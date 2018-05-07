import json
import io

with open('fauna.jsx', 'r') as infile:
    data = json.load(infile)

areas = data.keys()
frequencies = data[areas[0]].keys()
glob_key = "VORKOMMEN"
frequencies.remove(glob_key)
area_frequencies = dict()
for a in areas:
    area_frequencies[a] = data[a][glob_key]

animals = dict()
for a in areas:
    for f in frequencies:
        for animal in data[a][f]:
            if animal not in animals:
                animals[animal] = {}
            animals[animal][a] = f

result = json.dumps(animals, ensure_ascii=False)

with io.open('faune_transformed.jsx', 'w', encoding='utf8') as outfile:
    outfile.write(result)
