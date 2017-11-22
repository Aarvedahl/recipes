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
    cur.execute("SELECT * FROM Ingredients")
    rows = cur.fetchall()

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
