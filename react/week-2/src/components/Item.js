import React, { Component } from "react";



class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: props.done
        }
        this.toggleStatus = this.toggleStatus.bind(this)
        this.deleteItem = this.props.deleteItem
    }

    toggleStatus() {
        this.setState({ status: !this.state.status })
    }

    render() {
        //
        let styleCard = { maxWidth: "18rem", margin: "auto", marginTop: "2rem",  paddingBottom: "1rem"};
        if (this.state.status) styleCard = {...styleCard, opacity: 0.75}
        const styleHeader = this.state.status ? "card-header bg-success text-right" : "card-header bg-danger text-right";
        const statusText = !this.state.status ? <h5 className="text-danger" >Not done</h5> : <h5 className="text-success" >Done</h5>;
        const changeStatusButton = !this.state.status ? <span className="text-success">Mark as Done</span> : <span className="text-danger">Mark as undone</span>;
        
        //

        return (
            <div className="card text-center border-dark" style={styleCard} >
                <div className={styleHeader} >
                    <button className="btn bg-light btn-outline-secondary" onClick={() => { this.deleteItem(this.props.Key) }}><i className="fas fa-trash-alt"></i></button>
                </div>

                <div className="card-body">
                    <h3 className="card-title">{this.props.title}</h3>
                    <p className="card-text"><b>Comments:</b> {this.props.comments}</p>
                </div>
                
                <p className="card-text">{statusText}</p>
                
                <button className="btn btn-outline-secondary" onClick={this.toggleStatus}><strong>{changeStatusButton}</strong></button>
            </div>
        )
    }
}

export default Item