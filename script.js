const recipes = [

{
name:"Tomato Rice",
ingredients:["rice","tomato","onion"],
diet:"normal",
image:"https://images.unsplash.com/photo-1604908177522-472c1d6e7e0a",
calories:250,
protein:"6g",
carbs:"40g",
steps:[
"Cook rice separately",
"Fry onions in oil",
"Add tomatoes and spices",
"Mix rice with tomato mixture"
]
},

{
name:"Vegetable Salad",
ingredients:["carrot","cucumber","tomato"],
diet:"vegan",
image:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
calories:120,
protein:"3g",
carbs:"10g",
steps:[
"Chop vegetables",
"Mix in bowl",
"Add lemon juice",
"Serve fresh"
]
},

{
name:"Grilled Chicken",
ingredients:["chicken","pepper"],
diet:"normal",
image:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
calories:300,
protein:"35g",
carbs:"0g",
steps:[
"Marinate chicken",
"Grill for 20 minutes",
"Add pepper and salt",
"Serve hot"
]
},

{
name:"Diabetic Friendly Veg Bowl",
ingredients:["broccoli","carrot","spinach"],
diet:"diabetes",
image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
calories:150,
protein:"8g",
carbs:"12g",
steps:[
"Steam vegetables",
"Add olive oil",
"Add salt and pepper",
"Serve healthy bowl"
]
}

]

function generateRecipe(){

let userIngredients=document.getElementById("ingredients").value.toLowerCase()
let diet=document.getElementById("diet").value

let ingredientsList=userIngredients.split(",")

let result=recipes.filter(recipe=>{

let match=recipe.ingredients.some(i=>ingredientsList.includes(i))

if(diet==="normal")
return match

return match && recipe.diet===diet

})

displayRecipes(result)

}

function displayRecipes(result){

let container=document.getElementById("recipeContainer")

container.innerHTML=""

if(result.length===0){

container.innerHTML="<h2>No Recipe Found</h2>"
return

}

result.forEach(recipe=>{

container.innerHTML+=`

<div class="card">

<img src="${recipe.image}">

<h2>${recipe.name}</h2>

<h3>Nutrition</h3>
<p>Calories: ${recipe.calories}</p>
<p>Protein: ${recipe.protein}</p>
<p>Carbs: ${recipe.carbs}</p>

<h3>Ingredients</h3>
<ul>
${recipe.ingredients.map(i=>`<li>${i}</li>`).join("")}
</ul>

<h3>Steps</h3>
<ol class="steps">
${recipe.steps.map(s=>`<li>${s}</li>`).join("")}
</ol>

</div>

`

})

}