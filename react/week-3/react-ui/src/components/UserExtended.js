import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './../UserExtended.css'

class UserExtended extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profileImage: {
                loaded: false,
                url: ""
            }
        }
    }
    componentDidMount() {
        axios.get('https://picsum.photos/200/?random')
            .then((response) => {
                setTimeout(() => {
                    this.setState({
                        profileImage: { loaded: true, URL: response.request.responseURL }
                    })
                }, 1000);
            })
    }

    render() {
        console.log(this.props.userInfo);

        const { email, bio, deleteUser, id } = this.props.userInfo;

        return (
            <Fragment>
                <p><b>Email: </b>{email}</p>
                <p className="card-text"><b>Bio: </b>{bio}</p>
                {this.state.profileImage.loaded ?
                    <img className="card-img-bottom" src={this.state.profileImage.URL} alt="dummy" />
                    :
                    <Loading />
                }
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={() => { deleteUser(id) }}>Delete User</button>
                </div>
            </Fragment>
        )
    }
}

function Loading(){
    return <div className="spinnerUserExtended"></div>
}

export default UserExtended