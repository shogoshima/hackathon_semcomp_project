from utils import *



# initializing cohere application
co_client = cohere.Client(key) # This is your trial API key


for i in range(10):
    msg = f'Give me a list of {i+1} songs and artists to be played on a event that will take place on a church. The people have to feel calm in a respectfull environment. The event will happen for about 2 hours and will hold about 200 people. Please, dont send any more text than the format like: \nName: "Song Name"; Author: Author Name.\n'

    # get response
    response = co_command(model='command', prompt=msg, co = co_client)

    # get text from response
    string = response.generations[0].text

    print(f'\n\n==========================\niteration {i}\nOriginal Response of text generator: \n{string}')

    # print(f"\n\nFormatted output: {get_song_array(string, debug=True)}" )
    
    new_message = "Give me, with no additional text or information, the separation of the following list of songs names and authors in the format: Name: \"Song Name\"; Author: Author Name\n\n" +string 
    new_response = co_command(model='command', prompt=new_message, co=co_client)

    new_string = new_response.generations[0].text
    print(f"\n\nNew response: \n{new_string}")

    print(f"\n\nFormatted string: \n{get_song_array(new_string)}")