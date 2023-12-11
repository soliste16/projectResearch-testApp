from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import List
from starlette.middleware.cors import CORSMiddleware
#import TobiiProSDK.tobii_research as tr
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

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

# eyetracker = tr.find_all_eyetrackers()[0]

class MkdirParam(BaseModel):
    number: str


@app.post("/api/mkdir")
def mkdir(param: MkdirParam):
    global userNumber

    userNumber = param.number
    os.mkdir('./public/userData/' + str(userNumber))
    os.mkdir('./public/userData/' + str(userNumber) + '/gaze')
    os.mkdir('./public/userData/' + str(userNumber) + '/stroke')
    os.mkdir('./public/userData/' + str(userNumber) + '/img')
    os.mkdir('./public/userData/' + str(userNumber) + '/questionnaire')