function nameMenuItem(food) {
  return `Delicious ${food}`

}

function createMenuItem(food, price, type) {
  var menuItem = {
    name: food,
    price: price,
    type: type
  }
  return menuItem
}

function addIngredients(topping, ingredients){
  
  
  if (ingredients.includes(topping) === false){
     ingredients.push(topping)
  } 
  // if a topping is repeated, do not add it to array
  
}

function formatPrice(formattedPrice){
  console.log(formattedPrice)
 return `$${formattedPrice}`
}

function decreasePrice(){

}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
}


