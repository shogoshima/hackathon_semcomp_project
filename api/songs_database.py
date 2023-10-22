import numpy, csv, json

'''
## File columns: 

['', 'aartist_nme', 'track_name', 'release_date', 

'genre', 'lyrics', 'len', 

'dating', 'violence', 'world/life', 'night/time', 'shake the audience', 'family/gospel', 'romantic', 'communication', 'obscene', 'music', 'movement/places', 
'light/visual perceptions', 'family/spiritual', 'like/girls', 'sadness', 'feelings', 

'danceability', 'loudness', 'acousticness', 'instrumentalness', 'valence', 'energy', 
'topic', 'age']

topic : hip hop, country, 
genre : obscene, violence 

useful tags:

genre, lyrics, energy, topic -> keywords and theme

danceability (0-1), loudness, acousticness, intrumentalness, valence -> environment, local and intentions
'''

final_data = {}

theme_str = ['dating', 'violence', 'world/life', 'night/time', 'shake the audience', 'family/gospel', 'romantic', 'communication', 'obscene', 'music', 'movement/places', 
'light/visual perceptions', 'family/spiritual', 'like/girls', 'sadness', 'feelings']

intent_str = ['danceability', 'loudness', 'acousticness', 'instrumentalness', 'valence', 'energy', 'age']

with open('data/csv/tcc_ceds_music.csv') as c:
    csv_reader = csv.DictReader(c)

    l_counter = 0
    str = ""
    row_counter = 0
    for row in csv_reader: # cycling through each column
        name = row["track_name"]
        lyrics = row["lyrics"]

        str += f"{name}; {lyrics}\n"
    
    with open("DATA.csv", "w") as file:
        file.write(str)
        # d = row["dating"]
        # general_data = {"artist_name" : row["artist_name"],
        #                 "genre"  : row["genre"],
        #                 "release_date" : row["release_date"],
        #                 "lyrics" : row["lyrics"],
        #                 "topic" : row["topic"],

        #                 "theme" : [],
                        
        #                 "intent" : []}
        
        # for th in theme_str:
        #     if float(row[th]) > 0.5:
        #         general_data["theme"].append(th)

        # for th in intent_str:
        #     if float(row[th]) > 0.5:
        #         general_data["intent"].append(th)
        
        # final_data[row["track_name"]] = general_data

        # if float(d) > 0.5:
        # print(row["obscene"])

        # row_counter += 1

    # with open('data.json', 'w') as f:
    #     json.dump(final_data, f)
    # with open('/home/jc_deckel13/git/hackathon_semcomp_project/api/data/csv/tcc_ceds_music.csv', 'wb+') as j:
    #     data = json.load(j)

        # if l_counter == 0:
    # print(f"Columns names: \n")
    # print(csv_reader["track_name"])
    # for name in csv_reader:
    #     print(f"{name} ")
    #     brea
