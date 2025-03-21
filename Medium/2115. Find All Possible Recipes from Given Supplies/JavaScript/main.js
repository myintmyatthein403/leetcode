/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  const supplySet = new Set(supplies);
  const recipeMap = new Map();
  const result = [];

  for (let i = 0; i < recipes.length; i++) {
    recipeMap.set(recipes[i], ingredients[i]);
  }

  let changed = true;
  while (changed) {
    changed = false;
    for (const recipe of recipes) {
      if (supplySet.has(recipe)) continue; // Skip if already made
      const neededIngredients = recipeMap.get(recipe);
      if (neededIngredients.every(ingredient => supplySet.has(ingredient))) {
        supplySet.add(recipe);
        result.push(recipe);
        changed = true;
      }
    }
  }
  return result;
};
