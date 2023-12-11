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

class TestParam(BaseModel):
    message: str


@app.post("/api/test")
def mkdir(param: TestParam):
    print("test")

@app.post("/api/start")
def start(param: TestParam):
    print("start")

@app.post("/api/stop")
def stop(param: TestParam):
    print("stop")