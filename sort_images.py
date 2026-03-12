import os
import json
import shutil

data_dir = "frontend/public/data"
image_source = "images"
image_dest = "frontend/public/images"

categories = [
    "items",
    "weapons",
    "armor",
    "tools",
    "recipes",
    "monsters",
    "mounts",
    "cosmetics"
]

for category in categories:

    json_file = os.path.join(data_dir, f"{category}.json")

    if not os.path.exists(json_file):
        continue

    with open(json_file, "r") as f:
        entries = json.load(f)

    category_folder = os.path.join(image_dest, category)
    os.makedirs(category_folder, exist_ok=True)

    for entry in entries:

        icon = entry.get("icon")

        if not icon:
            continue

        filename = icon.split("/")[-1]

        src = os.path.join(image_source, filename)
        dst = os.path.join(category_folder, filename)

        if os.path.exists(src):
            shutil.move(src, dst)

print("Images sorted successfully.")