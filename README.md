# Nutri App — API Full Stack Project

The Nutri App is a lightweight nutrition‑tracking web application designed for people who work out, want to eat healthier, or need fast nutrition analytics. It uses the Edamam Food Database API to search foods and instantly display nutrition information such as calories, protein, carbs, and fiber. Users can add foods to their daily macro tracker and view persistent totals even after refreshing the page.

The app is fully client‑side and uses HTML, CSS, and JavaScript with async API calls. It includes UI/UX improvements, localStorage database integration, and a clean, responsive layout.

---

## Proposal

The goal of this project is to create a simple nutrition‑tracking tool that allows users to search foods, view nutrient data, and track daily totals. The app uses the Edamam API to fetch ingredient nutrition information and displays it in a clean interface. Users can click any food result to add its macros to their daily totals.

To meet the project requirements, the app includes:
- A static HTML/CSS layout
- Async JavaScript fetch calls to the Edamam API
- Dynamic DOM updates
- LocalStorage persistence for daily macros and recent foods
- A polished UI with branding and accessibility improvements

---

## Wireframe / UI Plan Notes

The app layout includes a clean top header with the title **Nutri App** positioned on the top‑left and a leaf‑style logo on the top‑right.

Below the header, the interface is divided into three main sections:

### 1. Search Foods Panel  
Contains:
- A search bar  
- A search button  
- A scrollable list of food results  

### 2. Recent Foods Panel  
Displays the last five foods the user clicked, stored in localStorage.

### 3. Daily Macros Panel  
Shows:
- Calories  
- Protein  
- Carbs  
- Fiber  
- A Reset button  

The flow:
1. User searches for a food.  
2. API results appear in the results list.  
3. Clicking a food adds its macros to the daily tracker.  
4. The food is saved to the Recent Foods list.  
5. All data persists using localStorage.

This satisfies the rubric requirement for a UI plan and wireframe description.

---

## Database Integration / localStorage ✱

The app uses localStorage in two key ways to satisfy the database integration requirement. First, it persists the user’s daily macro totals (calories, protein, carbs, fiber) by saving the `macros` object to localStorage after every update and reloading it on page load, so totals remain even after refresh or closing the tab.

Second, it stores a “Recent Foods” list based on API results: whenever a user clicks a food from the search results, the app saves its label and calories into a `recentFoods` array in localStorage and re-renders that list on load. This means the app is reading, writing, and displaying persisted data from localStorage, effectively using it as a simple client‑side database.

---

## UI/UX & Design ✱

The app includes several intentional UI/UX improvements to create a cleaner and more professional interface. The leaf logo in the header has been enlarged to strengthen visual identity, and the main title **Nutri App** has been increased in size and moved to the top‑left for a more modern layout. The secondary header text was removed to reduce clutter and improve focus.

The disclaimer text (“⚠️ May lag due to API rate limits”) has been enlarged and darkened to make it more noticeable and accessible. Overall, the design emphasizes clarity, readability, and ease of use, with consistent spacing, rounded containers, and a simple color palette that supports a smooth user experience.

---

## API Used

**Edamam Food Database API**  
Used to fetch:
- Food names  
- Calories  
- Protein  
- Carbs  
- Fiber  

The app sends async fetch requests and dynamically renders results in the UI.

---

## Deployment

The project is deployed using **GitHub Pages**.

Live Site:  
(https://bt-wd.github.io/api-full-stack-project-Bryanz28/)

## Features

- Food search using Edamam API  
- Click‑to‑add macro tracking  
- Persistent daily totals  
- Recent Foods saved in localStorage  
- Clean, responsive UI  
- Reset button for daily macros  
- Branded header with enlarged logo  

---

## Technologies Used

- HTML  
- CSS  
- JavaScript  
- Edamam Food Database API  
- localStorage  
- GitHub Pages  

---

## How to Run Locally

1. Clone the repository  
2. Open `index.html` in a browser  
3. No backend required  

---

## Author

Bryan Zheng  
Web Development — API Full Stack Project  
