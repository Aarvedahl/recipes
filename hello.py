from flask import Flask, jsonify, json, request
from employee import Employee
import names
import MySQLdb as mdb
from models import Ingredient


app = Flask(__name__)

# MySQL configurations
con = mdb.connect(host="localhost",user="root",
                  passwd="password",db="food")

@app.route("/mysql")
def mysql():
    ingredientList = []
    cur = con.cursor()
    # Bättre idé att endast frontend sortera detta? Blir antagligen långsammare
    cur.execute("SELECT ingredients.ingredientName, recipes.recipeName FROM ingredients " +
                "INNER JOIN ingredientsinrecipe ON ingredients.ingredientID = ingredientsinrecipe.ingredientsID " +
                "INNER JOIN recipes ON ingredientsinrecipe.recipeID = recipes.recipeID "+
                "WHERE ingredients.ingredientName ='Egg' OR ingredients.ingredientName ='Chicken' " +
                "ORDER BY recipes.recipeName")
    rows = cur.fetchall()
    # OR ingredients.ingredientName =" " String which we will add for each item in the json list we receive
    for row in rows:
        ingre = Ingredient(row[0], row[1])
        ingredientList.append(ingre)
    return json.dumps([ing.__dict__ for ing in ingredientList])

@app.route("/postjson", methods=['GET', 'POST'])
def postjson():
    request_json = request.get_json()
    print(request_json.get('firstName'))
    return "ok"

@app.route("/json")
def test():
    employee = Employee('first name','last name')
    return employee.toJson()

@app.route("/jsonlist")
def jsonlist():
    list = []
    employee = Employee('Alex','dkaldkal')
    list.append(employee)
    employee = Employee("Alex", "Arvedahl")
    list.append(employee)
    return json.dumps([employee.__dict__ for employee in list])

@app.route('/user/<username>')
def show_user_profile(username):
    return "User %s" %username

@app.route('/user/<int:user_id>')
def show_user_id(user_id):
    return 'User id is %d' % user_id


#export FLASK_APP=hello.py python -m flask run
