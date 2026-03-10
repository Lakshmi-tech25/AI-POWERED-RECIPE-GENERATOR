recipes = [

{
"name":"Vegetable Salad",
"ingredients":["carrot","cucumber","tomato"],
"diet":"vegan",
"image":"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
"calories":120,
"protein":"3g",
"carbs":"10g",
"steps":[
"Chop all vegetables",
"Mix in bowl",
"Add lemon juice",
"Serve fresh"
]
},

{
"name":"Tomato Rice",
"ingredients":["rice","tomato","onion"],
"diet":"normal",
"image":"https://images.unsplash.com/photo-1604908177522-472c1d6e7e0a",
"calories":250,
"protein":"6g",
"carbs":"40g",
"steps":[
"Cook rice",
"Fry onions",
"Add tomatoes",
"Mix rice with masala"
]
},

{
"name":"Diabetic Veg Bowl",
"ingredients":["broccoli","spinach","carrot"],
"diet":"diabetes",
"image":"https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
"calories":150,
"protein":"8g",
"carbs":"12g",
"steps":[
"Steam vegetables",
"Add olive oil",
"Add salt and pepper",
"Serve healthy bowl"
]
}

]


def get_recipe(user_ingredients, diet):

    user_ingredients = [i.strip().lower() for i in user_ingredients]

    results = []

    for recipe in recipes:

        match = any(i in recipe["ingredients"] for i in user_ingredients)

        if diet == "normal":
            if match:
                results.append(recipe)

        else:
            if match and recipe["diet"] == diet:
                results.append(recipe)

    return {"recipes": results}