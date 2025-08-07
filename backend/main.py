from fastapi import FastAPI,Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel,EmailStr
import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

#Front end accessing backend(Cors)
app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:3000"],
    allow_methods = ["*"],
    allow_headers = ["*"],
)

# forms data model
class ContactForm(BaseModel):
    name:str
    email:EmailStr
    message:str

@app.post("/contact")
def contact(form:ContactForm):
    try:
        send_email(form)
        return {"message":"Message sent successfully"}
    except Exception as e:
        return {"Error":str(e)}
    
def send_email(form:ContactForm):
    EMAIL = os.getenv("EMAIL")
    PASSWORD = os.getenv("EMAIL_PASSWORD")
    RECEIVER = os.getenv("RECEIVER_EMAIL",EMAIL)

    msg = EmailMessage()
    msg["Subject"] = f"New Contact Form Submission from {form.name}"
    msg["From"] = EMAIL
    msg["To"] = RECEIVER
    msg.set_content(f"Name: {form.name}\nEMAIL: {form.email}\n\nMessage:\n{form.message}")

    with smtplib.SMTP("smtp.gmail.com",587) as server:
        server.starttls()
        server.login(EMAIL,PASSWORD)
        server.send_message(msg)
