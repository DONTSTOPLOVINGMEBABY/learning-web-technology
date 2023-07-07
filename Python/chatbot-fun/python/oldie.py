from dotenv import load_dotenv 
from os import environ
from time import sleep
import openai 
import requests
load_dotenv(dotenv_path="./.env")
openai.api_key = environ.get('OPENAI_API_KEY')

def format_message (role, content) :
    return { "role" : role, "content" : content }

class Bot :
    def __init__(self):
        self.system_messages = []
        self.user_messages = []

    def push_to_system (self, message) :
        self.system_messages.append(message)

    def push_to_user ( self, message ) :
        self.user_messages.append(message)

    def get_all_messages (self) :
        ctr = 0 
        messages = []
        while (ctr != len(self.user_messages) ) :
            messages.append(self.system_messages[ctr])
            messages.append(self.user_messages[ctr])
            ctr += 1 
        return messages


CuriousOne = Bot()
Thinker = Bot()

CuriousOne.push_to_system(format_message('system', 'Ask the user to help you create a Python Web application that will help you make millions. Keep asking the user to eloborate on the idea until you have a full application.'))

Thinker.push_to_system(format_message('system', 'Tell the user about your idea'))


while True :
    print(CuriousOne.get_all_messages())
    print("here here here ")
    curious_completion = openai.ChatCompletion.create(
        model='gpt-3.5-turbo', 
        messages=CuriousOne.system_messages
    )["choices"][0]["message"]
    print(curious_completion)

    think_completion = openai.ChatCompletion.create(
        model='gpt-3.5-turbo', 
        messages=Thinker.system_messages
    )["choices"][0]["message"]
    print(think_completion)









user_messages = []
system_messages = [{"role": "system", "content": "Ask the user to help you create a Python Web application that will help you make millions. Keep asking the user to eloborate on the idea until you have a full application."}]
content = ''


while content != 'quit' :
    
    content = input("Prompt GPT: ")
    user_messages.append(format_message("user", content))    
    messages = []
    ctr = 0 
    while ( ctr != len(user_messages) ) :
        messages.append(system_messages[ctr])
        messages.append(user_messages[ctr])
        ctr += 1 
    
    
    completion = openai.ChatCompletion.create(
        model='gpt-3.5-turbo', 
        messages=messages
    )["choices"][0]["message"]

    system_messages.append(format_message(completion["role"], completion["content"]))
    print(completion["content"])
