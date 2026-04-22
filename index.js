// -------------------------------
// API KEYS
// -------------------------------
const FOOD_APP_ID = "004d07f3";
const FOOD_APP_KEY = "a33c037858de9724de1cc6cd6f63fc6c";

// -------------------------------
// DOM ELEMENTS
// -------------------------------
const ingredientInput = document.querySelector("#ingredient-input");
const ingredientResults = document.querySelector("#ingredient-results");
const recentFoodsList = document.querySelector("#recent-foods");

const totalCalories = document.querySelector("#total-calories");
const totalProtein = document.querySelector("#total-protein");
const totalCarbs = document.querySelector("#total-carbs");
const totalFiber = document.querySelector("#total-fiber");

const resetBtn = document.querySelector("#reset-btn");

// -------------------------------
// MACROS STATE
// -------------------------------
let macros = JSON.parse(localStorage.getItem("macros")) || {
  calories: 0,
  protein: 0,
  carbs: 0,
  fiber: 0
};

updateMacroDisplay();

// -------------------------------
// RECENT FOODS (DATABASE FEATURE)
// -------------------------------
let recentFoods = JSON.parse(localStorage.getItem("recentFoods")) || [];

function saveRecentFood(food) {
  recentFoods.unshift(food);
  recentFoods = recentFoods.slice(0, 5);
  localStorage.setItem("recentFoods", JSON.stringify(recentFoods));
  renderRecentFoods();
}

function renderRecentFoods() {
  recentFoodsList.innerHTML = "";
  recentFoods.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.label} (${item.kcal} kcal)`;
    li.classList.add("result-item");
    recentFoodsList.appendChild(li);
  });
}

renderRecentFoods();

// -------------------------------
// UPDATE MACRO DISPLAY
// -------------------------------
function updateMacroDisplay() {
  totalCalories.textContent = macros.calories;
  totalProtein.textContent = macros.protein + "g";
  totalCarbs.textContent = macros.carbs + "g";
  totalFiber.textContent = macros.fiber + "g";

  localStorage.setItem("macros", JSON.stringify(macros));
}

// -------------------------------
// ADD MACROS
// -------------------------------
function addMacros(nutrients) {
  macros.calories += Math.round(nutrients.ENERC_KCAL || 0);
  macros.protein += Math.round(nutrients.PROCNT || 0);
  macros.carbs += Math.round(nutrients.CHOCDF || 0);
  macros.fiber += Math.round(nutrients.FIBTG || 0);

  updateMacroDisplay();
}

// -------------------------------
// FOOD SEARCH
// -------------------------------
async function searchFoods(event) {
  event?.preventDefault();

  const query = ingredientInput.value.trim();
  if (!query) return;

  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${FOOD_APP_ID}&app_key=${FOOD_APP_KEY}&ingr=${query}`;

  const res = await fetch(url);
  const data = await res.json();

  ingredientResults.innerHTML = "";

  if (!data.hints || data.hints.length === 0) {
    ingredientResults.innerHTML = "<li>No foods found.</li>";
    return;
  }

  const items = data.hints.slice(0, 5);

  items.forEach(item => {
    const food = item.food;
    const li = document.createElement("li");
    li.textContent = `${food.label} (${Math.round(food.nutrients.ENERC_KCAL)} kcal)`;
    li.classList.add("result-item");

    li.addEventListener("click", () => {
      addMacros(food.nutrients);

      saveRecentFood({
        label: food.label,
        kcal: Math.round(food.nutrients.ENERC_KCAL)
      });
    });

    ingredientResults.appendChild(li);
  });
}

// -------------------------------
// RESET BUTTON
// -------------------------------
resetBtn.addEventListener("click", () => {
  macros = { calories: 0, protein: 0, carbs: 0, fiber: 0 };
  updateMacroDisplay();
});

// -------------------------------
// EVENT LISTENERS
// -------------------------------
document.querySelector("#ingredient-search-btn").addEventListener("click", searchFoods);
