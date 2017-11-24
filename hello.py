from flask import Flask, jsonify, json, request
import MySQLdb as mdb
from models import Ingredient, Recipe


app = Flask(__name__)

# MySQL configurations
con = mdb.connect(host="localhost",user="root",
                  passwd="password",db="food")

@app.route("/mysql", methods=['GET', 'POST'])
def mysql():
    request_json = request.get_json()
    recipeList = []
    cur = con.cursor()
    dbquery=("SELECT recipes.recipeID, recipes.recipeName, recipes.ingNeed, ingredients.ingredientName  FROM ingredients " +
               "INNER JOIN ingredientsinrecipe ON ingredients.ingredientID = ingredientsinrecipe.ingredientsID " +
               "INNER JOIN recipes ON ingredientsinrecipe.recipeID = recipes.recipeID "+
               "WHERE ingredients.ingredientName ='Spaghetti'" )
    if request_json:
        for ingName in request_json:
            dbquery += "OR ingredients.ingredientName = '" + ingName.get("name") +  "'"

    dbquery += "ORDER BY recipes.recipeName"
    cur.execute(dbquery)
    rows = cur.fetchall()
    for row in rows:
        recipe = Recipe(row[0], row[1], 3, row[2])
        ingre = Ingredient(row[3])
        recipeList.append(recipe)
        recipe.ingredients.append(ingre)
        #ingredientList.append(ingre)
        # serialize ingredient object
    return json.dumps([recipe.__dict__ for recipe in recipeList])


#export FLASK_APP=hello.py python -m flask run
