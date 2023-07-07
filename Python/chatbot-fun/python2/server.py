from flask import Flask, redirect, url_for, jsonify, request
from dotenv import load_dotenv 
from os import environ
load_dotenv(dotenv_path="./.env")


app = Flask(__name__)
app.debug = True 

@app.route('/receive-message', methods=['POST'])
def home() :
    print(request.json['message'])
    return jsonify({ 'hello' : 'there' })


app.run()