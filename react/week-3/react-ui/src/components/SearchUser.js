import React, { Component } from 'react';

class SearchUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ""
        }
    }

    render() {
        const { searchValue } = this.state;
        return (
            <form className="form-inline justify-content-center" onSubmit={(event) => {
                event.preventDefault();
                if (searchValue.trim() === "") {
                    alert("You need to insert something in order to search");
                    return
                }
                else {
                    this.props.searchUserByName(searchValue);
                }
            }}>
                <input
                    className="form-control  ml-2"
                    type="text"
                    value={searchValue}
                    onChange={
                        event => this.setState({ searchValue: event.target.value })
                    }
                    placeholder="Enter first or last name"
                />
                <input
                    className="btn btn-primary ml-2"
                    type="submit"
                    value="Search by name"
                />
            </form>
        )
    }

}

export default SearchUser