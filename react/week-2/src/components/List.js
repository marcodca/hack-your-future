import React, { Component } from 'react';
import Item from './Item';

import NewItem from './NewItem';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfTodos: this.props.list
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    //A deleteItem method that is gonna be passed to the Item component as a prop
    deleteItem(key) {
        this.setState({ listOfTodos: this.state.listOfTodos.filter(elem => elem.id !== key) })
    }

    //A addItem method that should be passsed to the NewInput component
    addItem(itemToAdd) {
        //
        const newId = this.state.listOfTodos[this.state.listOfTodos.length - 1].id + 1;
        if (itemToAdd.commentValue === ""|| itemToAdd.commentValue === " ") itemToAdd.commentValue = "No comments";

        const newItem = { id: newId, title: itemToAdd.titleValue, comments: itemToAdd.commentValue, done: false }
        this.setState((prevState) => ({
            listOfTodos: [...prevState.listOfTodos, newItem]
        }))
    }

    render() {
        //We check the precesence of tasks in the todo list.
        const contentList = this.state.listOfTodos.length > 0 ?
            this.state.listOfTodos.map((elem) => {
                const { title, comments, id, done } = elem;
                return <Item className="col" title={title} comments={comments} done={done} Key={id} deleteItem={this.deleteItem} />
            }) : <p>Hurra! Nothing to be done...</p>

        return (
            <div className="container-fluid">
                <NewItem addItem={this.addItem} />
                <div className="card-columns">{contentList}</div>
            </div>
        )
    }
}

export default List