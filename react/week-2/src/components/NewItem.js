import React, { Component } from 'react';

class NewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newInputValue: {
                titleValue: '',
                commentValue: ''
            }
        }
        //Binding all the methods
        this.addItem = this.props.addItem;
        this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
        this.handleCommentInputChange = this.handleCommentInputChange.bind(this);
    }

    handleTitleInputChange(event) {
        this.setState({
            newInputValue: { ...this.state.newInputValue, titleValue: event.target.value }
        })
    }

    handleCommentInputChange(event) {
        this.setState({
            newInputValue: { ...this.state.newInputValue, commentValue: event.target.value }
        })
    }


    render() {
        return (
            <div className="container border rounded p-2 bg-light" >
                <form className="form-inline justify-content-center " onSubmit={(event) => {
                    event.preventDefault();
                    //We check for a value in the title input.
                    if ((event.currentTarget[0].value === "") || (event.currentTarget[0].value === " ")) {
                        alert("You need to enter a title for the task.");
                        return
                    }
                    this.addItem(this.state.newInputValue)
                    //Clear inputs
                    event.currentTarget[0].value = ""
                    event.currentTarget[1].value = ""
                    //Clear state as well
                    this.setState({
                        newInputValue: {
                            titleValue: '',
                            commentValue: ''
                        }
                    })

                }}>

                    <input className="mr-2" placeholder="Enter title here" onChange={this.handleTitleInputChange} />
                    <input className="mr-2" placeholder="Enter comment" onChange={this.handleCommentInputChange} />
                    <input type="submit" value="Add new item" className="btn btn-primary  ml-5"  />
                </form>
            </div>
        )
    }
}

export default NewItem