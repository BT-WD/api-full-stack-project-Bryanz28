# API-Project

## Wireframe / UI Plan Notes

The app layout includes a clean top header with the title `Nutri App` and a leaf-style logo on the right.

Below the header, the interface is divided into three main panels:
- Left panel: a nutrition summary card showing total nutrients and a daily tracker area with macros like protein and fiber.
- Center panel: ingredient search UI with a search bar, results list, and an ingredient macros display.
- Right panel: recipe search UI with a recipe search bar, recipe results, and detailed recipe information.

Each panel includes scrollable result areas and buttons for user actions:
- `Search` buttons for ingredients and recipes
- `Add To Macros` for adding selected items to the tracker
- `Save Locally` to store meal or recipe data in localStorage
- `Reset Macros` to clear daily totals

The overall flow is:
1. User logs in or lands on the app.
2. User searches ingredients and recipe options.
3. Search results populate in the center and right panels.
4. Selected items can be added to the nutrition tracker and stored locally.
5. Daily totals update in the left panel as macros are added.

These notes should be used as the UI plan reference for the project and support the rubric requirement for the Wireframe / UI Plan. Proposal
The nutrition app is designed for people who work out, want to eat healthier, or run restaurants needing fast nutrition analytics. It uses the Edamam API for both recipe search and nutrition data, so users can search meals by keyword, filter by diet or health labels, and view nutrient facts for calories, protein, carbs, and fiber. The app will be a web-based local project with a clear UI showing search, recipe results, nutrient summary cards, and a tracker panel for daily totals.

To meet the requirements, the project will include a static HTML/CSS structure with placeholders for API data, async JavaScript fetch calls to Edamam endpoints, and localStorage persistence for saved tracker totals and favorites. A simple login/account section can simulate Google account behavior, while the core app stores daily nutrition data locally and updates the page dynamically, fulfilling the rubric for UI/UX, API integration, and local data storage.