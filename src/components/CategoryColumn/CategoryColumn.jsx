import * as React from "react"
import "./CategoryColumn.css"
import Chip from "../Chip/Chip.jsx";

export function CategoryColumn(props) {

    return (
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* map over the catergories array and create a p tag for every item */}
          {props.categories.map((category, idx) => (
            <Chip 
              key={category.name} 
              label ={category}
              isActive={category === props.currCategory}
              
              onClick={() => {
                props.setCurrCategory(category);
              }}
              onClose={() => {
                props.setCurrCategory(null);
              }} 
              />
            
          ))}
        </div>
      </div>
    )
}

export default CategoryColumn