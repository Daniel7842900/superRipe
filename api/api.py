import os
import requests
import json
import array as arr
from dotenv import load_dotenv
from flask_cors import CORS, cross_origin
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func

load_dotenv()

app = Flask(__name__)
app.config["DEBUG"] = True

# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:' + \
#     os.getenv("DEV_DB_PASSWORD") + '@localhost/superRipe'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:' + \
#     os.getenv("DB_PASSWORD") + '@' + os.getenv("DB_END_POINT") + '/superripe'
# app.config['CORS_HEADERS'] = 'Content-Type'
# db = SQLAlchemy(app)
CORS(app)
# cors = CORS(app, resources={
#             r"/api/searchByIngredient": {"origins": "http://localhost:port"}})


def spoonacular_recipe_search(query):
    APP_KEY = os.getenv("APP_KEY")
    MAX_RECIPE_TIME = 10
    MAX_RECIPE_NUMBER = 10

    curl = f"https://api.spoonacular.com/recipes/complexSearch?" \
        f"includeIngredients={query}" \
        f"&fillIngredients=true" \
        f"&instructionsRequired=true" \
        f"&maxReadyTime={MAX_RECIPE_TIME}" \
        f"&number={MAX_RECIPE_NUMBER}" \
        f"&apiKey={APP_KEY}"

    # Making a get request.
    response = requests.get(curl)

    # json() returns a JSON object of the result
    hits = response.json()

    results = hits["results"]
    recipe_ids = arr.array('i', [])

    for recipe in results:
        recipe_ids.append(recipe["id"])
        ingredients = []
        if(recipe["missedIngredients"]):
            for ingredient in recipe["missedIngredients"]:
                ingredients.append(ingredient["original"])
            del recipe["missedIngredients"]
        if(recipe["usedIngredients"]):
            for ingredient in recipe["usedIngredients"]:
                ingredients.append(ingredient["original"])
            del recipe["usedIngredients"]
        recipe["ingredients"] = ingredients

    for i in range(len(recipe_ids)):
        recipe_id = recipe_ids[i]
        steps = get_spoonacular_recipe_instructions(recipe_id)[0]["steps"]
        for step in steps:
            if(step["ingredients"]):
                del step["ingredients"]
            if(step["equipment"]):
                del step["equipment"]
        results[i]["steps"] = steps

    return results


def get_spoonacular_recipe_instructions(recipe_id):
    APP_KEY = os.getenv("APP_KEY")

    curl = f"https://api.spoonacular.com/recipes/{recipe_id}/analyzedInstructions?" \
        f"apiKey={APP_KEY}"

    response = requests.get(curl)
    hits = response.json()

    return hits


# This route is needed for the default EB health check
@ app.route('/')
def home():
    return "ok"


@ app.route('/api/recipes', methods=['GET'])
def index():
    # recipes = [*map(recipes_serializer, Recipes.query.all())]
    # categories = [*map(categories_serializer, Categories.query.all())]
    # recipes = edamam_search()
    # payload = {'recipes': recipes, 'categories': categories}
    payload = 1
    return jsonify(payload)


@ app.route('/api/searchByIngredient', methods=['POST'])
@ cross_origin()
def searchByIngredient():
    # When we get the data, we are getting bytes literal format.
    # Thus, we have to change that to json format.
    search_data = request.get_json()
    search_query = search_data["searchQuery"]

    searched_recipes_json = spoonacular_recipe_search(search_query)
    # print(searched_recipes_json)
    # searched_recipes = json.loads(json.loads(get_info()))
    # searched_recipes = searched_recipes_json["results"]
    # print(searched_recipes)
    # print(searched_recipes)
    return jsonify(searched_recipes_json)
