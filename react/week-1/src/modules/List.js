import React, {Component} from 'react';
import Item from './Item';
import listOfTodos from "./../listOfTodos"

class List extends Component {
    

    render(){
        return(
            <div className="container-fluid">
                <div className="card-columns">
                        {listOfTodos.map((elem, index)=>{
                            return <Item className="col" title={elem.title} comments={elem.comments} dueDate={elem.dueDate} key={index}/>
                        })}
                </div>        
            </div>
        )
    } 
} 

export default List