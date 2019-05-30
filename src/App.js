import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    editPizza: {
      id: "new",
      topping: "",
      size: undefined,
      vegetarian: undefined
    },
    allPizza: []
  }

  componentDidMount() {
    this.fetchPizza()
  }

  fetchPizza = () => {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(allPizza => this.setState({
      allPizza,
      editPizza: {
        id: "new",
        topping: "",
        size: undefined,
        vegetarian: undefined
        }
      })
    )
  }
  setEditPizza = (editPizza) => {
    this.setState({
      editPizza
    })
  }

  render() {
    const {editPizza, allPizza} = this.state
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleSubmit={this.handleSubmit} editPizza={editPizza} setEditPizza={this.setEditPizza}/>
        <PizzaList allPizza={allPizza} setEditPizza={this.setEditPizza}/>
      </Fragment>
    );
  }

  handleSubmit = () => {
    const {id, topping, size, vegetarian} = this.state.editPizza
    let method = Number.isInteger(id) ? "POST" : "PATCH"
    let url = 'http://localhost:3000/pizzas/'
    if (Number.isInteger(id)) {
      fetch(url+`/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.editPizza)
      })
      .then(res => res.json())
      .then(this.fetchPizza)
    } else {
      fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({topping, size, vegetarian})
      })
      .then(res => res.json())
      .then(this.fetchPizza)
    }
  }
}

export default App;
