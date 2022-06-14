import * as React from "react"
import "./MenuDisplay.css"
import Chip from "../Chip/Chip.jsx";

export function MenuDisplay(props) {
    return (
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {/* YOUR CODE HERE */}
            {props.currentMenuItems.map((item,idx) => (
              <Chip key={item.name} label = {item.item_name}
              isActive={item === selectedMenuItem}
              onClick={() => {
                props.setSelectedMenuItem(item);
              }}
              onClose={() => {
                props.setSelectedMenuItem(null);
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
    )
}

export default MenuDisplay