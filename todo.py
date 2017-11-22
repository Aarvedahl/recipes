from flask import Flask, jsonify, json
from models import Todo

app = Flask(__name__)
todos = []
#En Lista med alla todos, en metod som initialiserar hela listan

@app.route("/")
def getTodos():
    todo = Todo("Study DOA", "false")
    todos.append(todo);
    return jsonify(todos);