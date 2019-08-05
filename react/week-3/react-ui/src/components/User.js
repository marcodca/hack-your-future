import React, { Component } from 'react';
import './../User.css'

import UserExtended from './UserExtended'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            loading: false
        }
        this.toggleSelectUser = this.toggleSelectUser.bind(this);
    }

    toggleSelectUser() {
        this.setState({ selected: !this.state.selected })
    }

    render() {
        const { firstName, lastName } = this.props;
        if (this.state.loading) return <Loading />

        return (
            <div className="card" style={{ maxWidth: "25rem", margin: "auto", marginTop: "2rem", paddingBottom: "1rem", cursor: "pointer" }} onClick={this.toggleSelectUser}>
                <div class="card-header">
                    <h3 className='card-title d-inline'>{firstName}</h3>
                    <h4 className='card-subtitle text-muted d-inline ml-3'>{lastName}</h4>
                </div>
                <div className="card-body">
                    {this.state.selected ?
                        <UserExtended userInfo={this.props} />
                        :
                        <h5 className="text-muted">Click to expand</h5>
                    }
                </div>
            </div>

        )
    }
}

function Loading(){
    return <div className="spinnerUser"></div>
}

export default User