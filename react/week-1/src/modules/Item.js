import React, { Component } from "react";

const style = { maxWidth: "18rem", margin: "auto", marginTop: "2rem", padding: "1rem" };

class Item extends Component {
    render() {
        return (
            <div className="card text-center bg-light border-dark" style={style} >
                <div className="card-block">
                    <h3 className="card-title">{this.props.title}</h3>
                    <p className="card-text"><b>Comments:</b> {this.props.comments}</p>
                    <div className="card-footer text-muted">
                    <p><b>Due date:</b> {this.props.dueDate}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item