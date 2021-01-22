from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:' + \
    os.getenv("DB_PASSWORD") + '@localhost/superRipe'
db = SQLAlchemy(app)


class Recipes(db.Model):
    __tablename__ = 'recipes'
    id = db.Column(db.Integer(), primary_key=True)
    title = db.Column(db.String(), nullable=False)
    prep_time = db.Column(db.Integer(), nullable=True)
    craft_time = db.Column(db.Integer(), nullable=True)
    ingredients = db.Column(db.ARRAY(db.String()), nullable=True)
    directions = db.Column(db.ARRAY(db.String()), nullable=True)
    category_id = db.Column(db.Integer(), db.ForeignKey('categories.id'))

    def __init__(self, id, title, prep_time, craft_time, ingredients,
                 directions, category_id):
        self.title = title
        self.prep_time = prep_time
        self.craft_time = craft_time
        self.ingredients = ingredients
        self.directions = directions
        self.category_id = category_id


class Categories(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(), nullable=False)
    recipes = db.relationship('Recipes', backref='category_fk')

    def __init__(self, id, name, recipes):
        self.name = name


def recipes_serializer(recipe):
    return {
        'id': recipe.id,
        'title': recipe.title,
        'prep_time': recipe.prep_time,
        'craft_time': recipe.craft_time,
        'ingredients': recipe.ingredients,
        'directions': recipe.directions,
        'category_id': recipe.category_id
    }


def categories_serializer(category):
    return {
        'id': category.id,
        'name': category.name
    }


@app.route('/api/recipes', methods=['GET'])
def index():
    recipes = [*map(recipes_serializer, Recipes.query.all())]
    categories = [*map(categories_serializer, Categories.query.all())]
    payload = {'recipes': recipes, 'categories': categories}
    return jsonify(payload)
