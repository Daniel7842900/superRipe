import os
import time
import requests
import json
import array as arr
from dotenv import load_dotenv
from flask_cors import CORS, cross_origin
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func

load_dotenv()

application = Flask(__name__)
CORS(application)


def spoonacular_recipe_search(query):
    """
    API call to spoonacular API when route /api/searchByIngredient is hit.
    """
    start = time.time()
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

    # results is a list of objects
    results = hits["results"]
    recipe_ids = arr.array('i', [])

    # Add recipe ids into recipe_ids array for the future use.
    # Grab ingredient info from each recipe and reform.
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

    # Get specific information of each recipe
    for i in range(len(recipe_ids)):
        recipe_id = recipe_ids[i]
        recipe_information = get_spoonacular_recipe_information(recipe_id)
        if(recipe_information["analyzedInstructions"]):
            steps = recipe_information["analyzedInstructions"][0]["steps"]
        else:
            steps = []
        total_time = recipe_information["readyInMinutes"]
        for step in steps:
            if(step["ingredients"]):
                del step["ingredients"]
            if(step["equipment"]):
                del step["equipment"]
        results[i]["steps"] = steps
        results[i]["totalTime"] = total_time

    end = time.time()
    print(f"The total time taken for getting every recipe is: {end-start}")

    return results


def get_spoonacular_recipe_information(recipe_id):
    """
    API call to spoonacular api when we need information of a specific recipe.
    """
    start = time.time()
    APP_KEY = os.getenv("APP_KEY")

    curl = f"https://api.spoonacular.com/recipes/{recipe_id}/information?" \
        f"apiKey={APP_KEY}" \
        f"&includeNutrition=false"

    response = requests.get(curl)
    hits = response.json()

    end = time.time()
    print(
        f"The total time taken for getting this specific recipe is: {end-start}")

    return hits


# This route is needed for the default EB health check
@ application.route('/')
def home():
    """home endpoint.
    ---
    get:
      description: Exists for EB health check
      security:
        - ApiKeyAuth: []
      responses:
        200:
          content:
            application/json:
              schema: PetSchema
    """
    return "ok"


@application.route('/api/test')
def test():
    return "this is test route"


@ application.route('/api/searchByIngredient', methods=['POST'])
@ cross_origin()
def searchByIngredient():
    """Recipe search by an ingredient endpoint.
    ---
    post:
      description: get a search query from post request and give the recipe info back to front-end.
      responses:
        200:
          content:
            application/json:
    """

    # When we get the data, we are getting bytes literal format.
    # Thus, we have to change that to json format.
    search_data = request.get_json()

    # Get search query from search_data json object.
    search_query = search_data["searchQuery"]

    searched_recipes_list = spoonacular_recipe_search(search_query)

    # jsonify turns the JSON output into a flask.Response() object with application/json type.
    return jsonify(searched_recipes_list)


if __name__ == '__main__':
    application.run(port=8080)
