import json
import re
import math


def rotate_polygon(points, angle, origin=(0, 0)):
    angle_rad = math.radians(angle)
    cos_theta = math.cos(angle_rad)
    sin_theta = math.sin(angle_rad)
    ox, oy = origin

    rotated_points = []
    for x, y in points:
        # Translate point back to origin
        x -= ox
        y -= oy

        # Rotate point
        x_new = x * cos_theta - y * sin_theta
        y_new = x * sin_theta + y * cos_theta

        # Translate point back
        x_new += ox
        y_new += oy

        rotated_points.append((x_new, y_new))

    return rotated_points


# Load JSON data from a file
with open("dt.json", "r") as file:
    data = json.load(file)


class Chamber:
    def __init__(self, name):
        self.name = name

        self.is_vertical = False
        if "S01" in name or "S07" in name:
            self.is_vertical = True

        self.is_horizontal = False
        if "S04" in name or "S10" in name:
            self.is_horizontal = True

        self.R = None
        self.L = None
        self.U = None
        self.B = None
        self.points = []

    def add(self, point):
        self.points.append(point)

        if not self.R:
            self.R = point
        else:
            if point[0] > self.R[0]:
                self.R = point

        if not self.L:
            self.L = point
        else:
            if point[0] < self.L[0]:
                self.L = point

        if not self.U:
            self.U = point
        else:
            if point[1] > self.U[1]:
                self.U = point

        if not self.B:
            self.B = point
        else:
            if point[1] < self.B[1]:
                self.B = point

    def get_coords(self):
        if not self.is_vertical and not self.is_horizontal:
            return [self.L, self.U, self.R, self.B]

        if self.is_vertical:
            x_min = min([p[0] for p in self.points])
            x_max = max([p[0] for p in self.points])

            ys_x_min = []
            ys_x_max = []
            for p in self.points:
                if p[0] == x_min:
                    ys_x_min.append(p[1])
                if p[0] == x_max:
                    ys_x_max.append(p[1])

            return [
                [x_min, min(ys_x_min)],
                [x_max, min(ys_x_max)],
                [x_max, max(ys_x_max)],
                [x_min, max(ys_x_min)],
            ]

        if self.is_horizontal:
            y_min = min([p[1] for p in self.points])
            y_max = max([p[1] for p in self.points])

            xs_y_min = []
            xs_y_max = []
            for p in self.points:
                if p[1] == y_min:
                    xs_y_min.append(p[0])
                if p[1] == y_max:
                    xs_y_max.append(p[0])

            return [
                [min(xs_y_min), y_min],
                [max(xs_y_min), y_min],
                [max(xs_y_max), y_max],
                [min(xs_y_max), y_max],
            ]


pattern = r"_SL.*"

chambers = {}
for feature in data["features"]:
    chamber_name = re.sub(pattern, "", feature["properties"]["id"])
    if chamber_name not in chambers.keys():
        chambers[chamber_name] = Chamber(chamber_name)
    for coord in feature["geometry"]["coordinates"][0]:
        chambers[chamber_name].add(coord)


new_json = """
  geoData = {
  "crs": {
    "properties": {
      "name": "mapname"
    },
    "type": "name"
  },
  "features": [
      """

for idx, chamber in enumerate(chambers):
    new_json += """{
      "geometry": {
        "coordinates": ["""
    new_json += str(chambers[chamber].get_coords())
    new_json += """],
        "type": "Polygon"
      },
      "properties": {
        "id": "___NAME___",
        "name": "___NAME___"
      },
      "type": "Feature"
    }___COMMA___
    """.replace("___NAME___", chamber).replace(
        "___COMMA___", "," if idx < len(chambers) - 1 else ""
    )

new_json += """
   ],
  "type": "FeatureCollection"
};
"""
with open("new_dt.json", "w") as file:
    file.write(new_json)
