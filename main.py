from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import List
from starlette.middleware.cors import CORSMiddleware
import tobii_research as tr
import time
import json
import base64
import os
import subprocess
import platform
import glob
import csv


import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.ticker as mticker
import seaborn as sns
from scipy import stats
from PIL import Image
import itertools

import asyncio
from sse_starlette.sse import EventSourceResponse
datas=[]
id=-1
path=""

def subscribe():
    datas=[]
    eyetracker.subscribe_to(tr.EYETRACKER_GAZE_DATA, gaze_data_callback, as_dictionary=True)
    print("Subscribed to eyetracker")

def unsubscribe(id):
    eyetracker.unsubscribe_from(tr.EYETRACKER_GAZE_DATA, gaze_data_callback)
    with open("data.txt", 'w') as f:
        for data in datas:
            f.write(str(data))
        print("saved")
    print("Unsubscribed from eyetracker")

# def gaze_data_callback(gaze_data):
#     """ 視線データのコールバック関数 """
#     datas.append(gaze_data)
#     print(datas)  # ここで視線データを処理


app = FastAPI()

origins= [
    "http://localhost",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],#origins,
    allow_credentials=True,
    allow_methods=["*"],#['GET', 'POST', 'OPTIONS'],
    allow_headers=["*"]#['Content-Type', 'Authorization']
)

id=-1
eyetracker = tr.find_all_eyetrackers()[0]

class TestParam(BaseModel):
    message: str

def gaze_data_callback(gaze_data):
    data = {
        "l_g": gaze_data['left_gaze_point_on_display_area'],
        "l_p": gaze_data['left_pupil_diameter'],
        "r_g": gaze_data['right_gaze_point_on_display_area'],
        "r_p": gaze_data['right_pupil_diameter'],
        "v": [
            gaze_data['left_gaze_point_validity'],
            gaze_data['left_pupil_validity'],
            gaze_data['right_gaze_point_validity'],
            gaze_data['right_pupil_validity']
        ],
        "t": time.time()
    }
    datas.append(data)
    print(data)

# @app.options("/api/start")
# def options_start():
#     return JSONResponse(content={}, status_code=200)

@app.post("/api/start1")
def start1():
    print("start")
    datas=[]
    with open("id.txt") as f:
        id = int(f.read())
    print(id)
    global path
    path = 'userData/' + str(id)
    os.mkdir(path)
    path=path+'/first'
    os.mkdir(path)
    eyetracker.subscribe_to(tr.EYETRACKER_GAZE_DATA, gaze_data_callback, as_dictionary=True)
    print("Subscribed to eyetracker")

@app.post("/api/start2")
def start2():
    print("start")
    datas=[]
    with open("id.txt") as f:
        id = int(f.read())

    global path
    path = './userData/' + str(id)

    path=path+'/second'
    os.mkdir(path)
    eyetracker.subscribe_to(tr.EYETRACKER_GAZE_DATA, gaze_data_callback, as_dictionary=True)
    print("Subscribed to eyetracker")

@app.post("/api/stop")
def stop():
    print("stop")
    eyetracker.unsubscribe_from(tr.EYETRACKER_GAZE_DATA, gaze_data_callback)
    global path

    with open(path+'/data.json', 'w') as f:
        json_object=json.dumps(datas,indent=4)
        f.write(json_object)
        print("saved")
    print("Unsubscribed from eyetracker")


