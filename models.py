import json

class Todo:
    def __init__(self,description,done):
        self.description = description
        self.done = done

    def toJson(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)

class Ingredient:
    def __init__(self, id, name):
        self.id = id
        self.name = name

    def toJson(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)

class Recipe:
    def __init__(self, recipeID, recipeName, rating):
        self.recipeID = recipeID
        self.recipeName = recipeName
        self.rating = rating

    def toJson(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)
