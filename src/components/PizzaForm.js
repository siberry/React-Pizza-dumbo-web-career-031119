import React from "react"

class PizzaForm extends React.Component {

  render() {
    const {id, topping, size, vegetarian} = this.props.editPizza
    const {editPizza, handleSubmit} = this.props
    return(
      <div className="form-row">
        <div className="col-5">
          <input onChange={(event) => this.props.setEditPizza({...editPizza, topping: event.target.value})} type="text" className="form-control" placeholder="Pizza Topping" value={
            //Pizza Topping Should Go Here
            topping
          }/>
        </div>
        <div className="col">
          <select onChange={(event) => this.props.setEditPizza({...editPizza, size: event.target.value})} value={size} className="form-control">
            <option value={undefined}/>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={(event) => this.props.setEditPizza({...editPizza, vegetarian: true})} className="form-check-input" type="radio" value={vegetarian} checked={vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={(event) => this.props.setEditPizza({...editPizza, vegetarian: false})} className="form-check-input" type="radio" value={!vegetarian} checked={vegetarian === false ? true : null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

    )

  }
}

export default PizzaForm
