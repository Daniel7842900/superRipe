import os
import requests
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


def edamam_search(query):
    APP_ID = os.getenv("APP_ID")
    APP_KEY = os.getenv("APP_KEY")
    RECIPE_TIME_LIMIT = 10

    curl = f"https://api.edamam.com/search?q={query}" \
        f"&app_id={APP_ID}" f"&app_key={APP_KEY}" \
        f"&time={RECIPE_TIME_LIMIT}"

    response = requests.get(curl)
    hits = response.json()['hits']

    return hits

# This route is needed for the default EB health check


@app.route('/')
def home():
    return "ok"


@app.route('/api/recipes', methods=['GET'])
def index():
    # recipes = [*map(recipes_serializer, Recipes.query.all())]
    # categories = [*map(categories_serializer, Categories.query.all())]
    # recipes = edamam_search()
    # payload = {'recipes': recipes, 'categories': categories}
    payload = 1
    return jsonify(payload)


@app.route('/api/searchByIngredient', methods=['POST'])
@cross_origin()
def searchByIngredient():
    search_data = request.get_json()
    search_query = search_data["searchQuery"]
    searched_recipes = edamam_search(search_query)
    print(searched_recipes)
    return jsonify(searched_recipes)
