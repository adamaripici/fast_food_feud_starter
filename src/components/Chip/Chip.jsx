import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onClick = () => {} }) {
  // let buttonClassName = "";
  // if (!isActive) {
  //   buttonClassName = "chip";
  // } else {
  //   buttonClassName = "chip active";
  // }
  return (
    <button className = {isActive ? "chip active" : "chip"} onClick={onClick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
