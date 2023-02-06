
function createRestaurant(name){
  var restDetails = {
    name: name,
    menus: {breakfast:[], lunch:[], dinner:[]}
   }
  
    
   return restDetails
}

function addMenuItem(restaurant, foodItem){
  if (!restaurant.menus[foodItem.type].includes(foodItem)) {
    return restaurant.menus[foodItem.type].push(foodItem)
  }
}

module.exports = {
  createRestaurant,  
  addMenuItem,
  // removeMenuItem
};