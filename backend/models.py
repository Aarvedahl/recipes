import json

class Ingredient:
    def __init__(self, name):
        self.name = name

    def toJson(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)

class Recipe:
    def __init__(self, recipeID, recipeName, rating, recipeimage, description, ingNeed):
        self.recipeID = recipeID
        self.recipeName = recipeName
        self.rating = rating
        self.recipeimage = recipeimage
        self.description = description
        self.ingNeed = ingNeed
        self.ingredients = []



    def toJson(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)
