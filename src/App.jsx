import * as React from "react"
import Header from "./components/Header/Header";
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import Instructions from "./components/Instructions/Instructions";
import Chip from "./components/Chip/Chip";
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel";
import { nutritionFacts } from "./constants";
import CategoryColumn from "./components/CategoryColumn/CategoryColumn";

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()



export function App() {

  const [currCategory, setCurrCategory] = React.useState(0);
  const [currRestaurant, setCurrRestaurant] = React.useState(0);
  const [selectedMenuItem, setSelectedMenuItem] = React.useState(0);
  const currentMenuItems = data.filter((item) => {
    return item.food_category === currCategory && item.restaurant === currRestaurant
  })

  const message = () => {
    if (currCategory === 0 && currRestaurant === 0) {
      return appInfo.instructions.start;
    } else if (currCategory != 0 && currRestaurant === 0) {
      return appInfo.instructions.onlyCategory;
    } else if (currCategory === 0 && currRestaurant != 0) {
      return appInfo.instructions.onlyRestaurant;
    } else if (currRestaurant != 0 && currCategory != 0 && selectedMenuItem === 0) {
      return appInfo.instructions.noSelectedItem;
    } else if (currRestaurant != 0 && currCategory != 0 && selectedMenuItem != 0) {
      return appInfo.instructions.allSelected;
    }
  }
  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* map over the catergories array and create a p tag for every item */}
          {categories.map((category, idx) => (
            <Chip 
              key={category.name} 
              label ={category}
              isActive={category === currCategory}
              
              onClick={() => {
                setCurrCategory(category);
                // console.log(currCategory);
              }}
              onClose={() => {
                setCurrCategory(null);
              }} 
              />
            
          ))}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header
          title = {appInfo.title}
          tagline = {appInfo.tagline}
          description = {appInfo.description}
          dataSource = {appInfo.dataSource}
        />
        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map((restaurant, idx) => (
              <Chip 
                key={restaurant.name}
                label={restaurant}
                isActive={restaurant === currRestaurant}
                onClick={() => {
                  setCurrRestaurant(restaurant);
                }}
                onClose={() => {
                  setCurrRestaurant(null);
                }}
                
                />
            ))}
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions
          instructions = {message()}
        />
        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {/* YOUR CODE HERE */}
            {currentMenuItems.map((item,idx) => (
              <Chip key={item.name} label = {item.item_name}
              isActive={item === selectedMenuItem}
              onClick={() => {
                setSelectedMenuItem(item);
              }}
              onClose={() => {
                setSelectedMenuItem(null);
              }}
              > 
              </Chip>
            ))}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            { selectedMenuItem ? 
            <NutritionalLabel item ={selectedMenuItem} />
            : null}
            
          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
