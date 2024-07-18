import json
import re

# Read the original JSON file
with open('./dt.json', 'r') as file:
    data = json.load(file)

# Function to transform the ID to match the new convention


def _transform_id(old_id):
    # Split the old ID into its parts
    parts = old_id.split('_')
    if old_id.startswith("M2"):
        new_id = old_id.replace("M2", "WM2")
    elif old_id.startswith("M1"):
        new_id = old_id.replace("M1", "WM1")
    elif old_id.startswith("00"):
        new_id = old_id.replace("00", "WW0")
    elif old_id.startswith("P1"):
        new_id = old_id.replace("P1", "WP1")
    elif old_id.startswith("P2"):
        new_id = old_id.replace("P2", "WP2")

    wheel_part = parts[0]
    station_part = parts[1]
    sector_part = parts[2]
    SL_part = parts[3]

    wheel_number = re.sub("[^0-9]", "", wheel_part)
    station_number = re.sub("[^0-9]", "", station_part)
    sector_number = re.sub("[^0-9]", "", sector_part)
    SL_number = re.sub("[^0-9]", "", SL_part)
    
    if "M" in wheel_part:
        new_id += "_-" + str(wheel_number)
    else:
        new_id += "_" + str(wheel_number)
    new_id += "_" + str(station_number)
    new_id += "_" + str(sector_number).replace("0", "")
    new_id += "_" + str(SL_number)

    print(old_id)
    print(new_id)

    return new_id


def transform_id(old_id):
    # Split the old ID into its parts
    if old_id.startswith("M2"):
        new_id = old_id.replace("M2", "WM2")
    elif old_id.startswith("M1"):
        new_id = old_id.replace("M1", "WM1")
    elif old_id.startswith("00"):
        new_id = old_id.replace("00", "W00")
    elif old_id.startswith("P1"):
        new_id = old_id.replace("P1", "WP1")
    elif old_id.startswith("P2"):
        new_id = old_id.replace("P2", "WP2")

    return new_id
def split_trapezium(feature):
    coordinates = feature['geometry']['coordinates'][0]
    x1, y1 = coordinates[0]
    x2, y2 = coordinates[1]
    x3, y3 = coordinates[2]
    x4, y4 = coordinates[3]

    width = x2 - x1
    gap = 0.05 * width

    mid_x1 = x1 + width / 2 - gap / 2
    mid_x2 = x1 + width / 2 + gap / 2

    left_coords = [[x1, y1], [mid_x1, y1], [mid_x1, y3], [x1, y4]]
    right_coords = [[mid_x2, y2], [x2, y2], [x3, y3], [mid_x2, y4]]

    left_feature = {
        'type': 'Feature',
        'geometry': {
            'type': 'Polygon',
            'coordinates': [left_coords]
        },
        'properties': feature['properties'].copy()
    }

    right_feature = {
        'type': 'Feature',
        'geometry': {
            'type': 'Polygon',
            'coordinates': [right_coords]
        },
        'properties': feature['properties'].copy()
    }

    return left_feature, right_feature

new_features = []

# Iterate over the features and update the 'id' in 'properties'
for feature in data.get('features', []):
    properties = feature.get('properties', {})
    old_id = properties.get('id', '')
    new_id = transform_id(old_id)
    properties['id'] = new_id

    if ("S04" in new_id or "S10" in new_id) and "MB4" in new_id:

        left_feature, right_feature = split_trapezium(feature)

        left_feature['properties']['id'] = new_id.replace("S04L","S04").replace("S10L","S10")
        left_feature['properties']['name'] = properties['name']
        right_feature['properties']['id'] = new_id.replace("S04L","S13").replace("S10L","S14")
        right_feature['properties']['name'] = new_id.replace("S04L","S04R").replace("S10L","S10R")

        new_features.extend([left_feature, right_feature])
    else:
        new_features.append(feature)
    
    # Here I just correct the names with another function 
    old_name = properties.get('name', '')
    new_name = transform_id(old_name)
    properties['name'] = new_name

# Update the data with the new features
data['features'] = new_features

# Write the updated data to a new JSON file
with open('./DT_splitted.json', 'w') as file:
    json.dump(data, file, indent=2)