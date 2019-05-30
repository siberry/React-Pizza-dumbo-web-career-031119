import React from "react"

const Pizza = ({id, size, topping, vegetarian, setEditPizza}) => {
  return(
    <tr onClick={() => setEditPizza({id, size, topping, vegetarian})}>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "✔️" : null}</td>
      <td><button type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
