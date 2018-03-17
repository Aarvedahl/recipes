from flask import Flask, jsonify, json, request
import MySQLdb as mdb
from models import Ingredient, Recipe
import jsonpickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# MySQL configurations
con = mdb.connect(host="localhost",user="root",
                  passwd="password",db="food")

@app.route("/mysql", methods=['GET', 'POST'])
def mysql():
    request_json = request.get_json()
    recipeList = []

    wildcard = request_json['wildcard']

    for row in select(request_json['ingredients']):
        recipe = Recipe(row[0], row[1], row[2], row[3], row[4], row[5])
        ingre = Ingredient(row[6])
        recipeList.append(recipe)
        recipe.ingredients.append(ingre)

    recDic = {}
    for i in range(0, len(recipeList)):
        if recipeList[i].recipeID in recDic:
            recDic[recipeList[i].recipeID].ingredients.append(recipeList[i].ingredients[0])
        else:
            recDic[recipeList[i].recipeID] = recipeList[i]

    return jsonpickle.encode(delUneccessary(recipeList, wildcard))

def select(requestparam):
    cur = con.cursor()
    dbquery=("SELECT recipes.recipeID, recipes.recipeName, recipes.rating, recipes.recipeimage, recipes.description, recipes.ingNeed, ingredients.ingredientName  FROM ingredients " +
               "INNER JOIN ingredientsinrecipe ON ingredients.ingredientID = ingredientsinrecipe.ingredientsID " +
               "INNER JOIN recipes ON ingredientsinrecipe.recipeID = recipes.recipeID "+
               "WHERE ingredients.ingredientName =''" )
    if requestparam:
        for ingName in requestparam:
            dbquery += "OR ingredients.ingredientName = '" + ingName.get("name") +  "'"

    dbquery += "ORDER BY recipes.recipeID"
    cur.execute(dbquery)
    return cur.fetchall()

def delUneccessary(recipeList, wildcard):
    if wildcard:
        for i in reversed(range(len(recipeList))):
            if len(recipeList[i].ingredients) < recipeList[i].ingNeed - 1:
                del recipeList[i]
    else:
        for i in reversed(range(len(recipeList))):
            if len(recipeList[i].ingredients) < recipeList[i].ingNeed:
                del recipeList[i]

    return recipeList


#export FLASK_APP=hello.py python -m flask run
