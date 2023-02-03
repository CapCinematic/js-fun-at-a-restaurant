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

function addIngredients(){
  
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


