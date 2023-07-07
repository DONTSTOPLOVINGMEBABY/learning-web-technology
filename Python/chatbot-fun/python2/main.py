from dotenv import load_dotenv 
from os import environ
import openai 
import requests
load_dotenv(dotenv_path="./.env")
openai.api_key = environ.get('OPENAI_API_KEY')


class Builder : 
    def __init__(self, url) :
        self.user_messages = []
        self.system_messages = [{"role": "system", "content": "Ask the user to help you create a Python Web application that will help you make millions. Keep asking the user to eloborate on the idea until you have a full application."}]
        self.current_messages = []
        self.url = url 
    
    def format_message (role, content) :
        return { "role" : role, "content" : content }

    def post_response (self, message) : 
        thing = requests.get(self.url)



onetwo = Builder('http://localhost:5000')
onetwo.make_simple_request()







# def format_message (role, content) :
#     return { "role" : role, "content" : content }

# user_messages = []
# system_messages = [{"role": "system", "content": "Ask the user to help you create a Python Web application that will help you make millions. Keep asking the user to eloborate on the idea until you have a full application."}]
# content = ''


# while content != 'quit' :
    
#     content = input("Prompt GPT: ")
#     user_messages.append(format_message("user", content))    
#     messages = []
#     ctr = 0 
#     while ( ctr != len(user_messages) ) :
#         messages.append(system_messages[ctr])
#         messages.append(user_messages[ctr])
#         ctr += 1 
    
    
#     completion = openai.ChatCompletion.create(
#         model='gpt-3.5-turbo', 
#         messages=messages
#     )["choices"][0]["message"]

#     system_messages.append(format_message(completion["role"], completion["content"]))
#     print(completion["content"])
