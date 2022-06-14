import * as React from "react"
import "./RestaurantsRow.css"
import Chip from "../Chip/Chip.jsx";

export function RestaurantsRow(props) {
    return (
        <div className="RestaurantsRow">
        <h2 className="title">Restaurants</h2>
            <div className="restaurants options">
                {props.restaurants.map((restaurant, idx) => (
                <Chip 
                    key={restaurant}
                    label={restaurant}
                    isActive={restaurant === props.currRestaurant}
                    onClick={() => {
                    props.setCurrRestaurant(restaurant);
                    }}
                    onClose={() => {
                    props.setCurrRestaurant(null);
                    }}
                    
                    />
                ))}
            </div>
        </div>
    )

}

export default RestaurantsRow