from fastapi import FastAPI,Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel,EmailStr
import smtplib
from email.message import EmailMessage
import os

app = FastAPI()

@app.get("/con")
def contact_form():
    return {'output':'successful'}