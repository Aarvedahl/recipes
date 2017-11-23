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
    ingredientList = []
    cur = con.cursor()
    dbquery=("SELECT ingredients.ingredientName, recipes.recipeName FROM ingredients " +
               "INNER JOIN ingredientsinrecipe ON ingredients.ingredientID = ingredientsinrecipe.ingredientsID " +
               "INNER JOIN recipes ON ingredientsinrecipe.recipeID = recipes.recipeID "+
               "WHERE ingredients.ingredientName ='Egg'" )
    if request_json:
        for ingName in request_json:
            dbquery += "OR ingredients.ingredientName = '" + ingName.get("name") +  "'"

    dbquery += "ORDER BY recipes.recipeName"
    cur.execute(dbquery)
    rows = cur.fetchall()
    for row in rows:
        ingre = Ingredient(row[0], row[1])
        ingredientList.append(ingre)
    return json.dumps([ing.__dict__ for ing in ingredientList])


#export FLASK_APP=hello.py python -m flask run
