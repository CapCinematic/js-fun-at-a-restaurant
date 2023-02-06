function nameMenuItem(food) {
  return `Delicious ${food}`;
}

function createMenuItem(food, price, type) {
  var menuItem = {
    name: food,
    price: price,
    type: type,
  };
  return menuItem;
}

function addIngredients(topping, ingredients) {
  if (ingredients.includes(topping) === false) {
    ingredients.push(topping);
  }
}

function formatPrice(formattedPrice) {
  return `$${formattedPrice}`;
}

function decreasePrice(decreasedPrice, newPrice) {
  var newPrice = 5.4;
  if (newPrice * decreasedPrice) {
    return newPrice;
  }
  console.log(decreasedPrice, newPrice);
}

function createRecipe(titleString, ingredientsArray, typeString) {
  console.log(titleString, ingredientsArray, typeString);
  var recipe = {
    title: titleString,
    ingredients: ingredientsArray,
    type: typeString,
  };
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
};
