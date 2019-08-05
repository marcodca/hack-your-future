import React, { Component, Fragment } from 'react';
//
import './../UserList.css'
import User from './User';

class UserList extends Component {

    render() {
        const { error, loading, currentUsers, deleteUser } = this.props;

        if (loading) return <Loading />
        else if (error) return () => { Error(error) }
        return (
            <Fragment>
                {currentUsers.map((user) => {
                    return <User key={user.id} id={user.id} firstName={user.first_name} lastName={user.last_name} email={user.email} deleteUser={deleteUser} bio={user.bio} />
                })}
            </Fragment>
        )
    }
}

function Loading() {
    return <div className="spinner"></div>
}
function Error(err) {
    console.log(err);

    return <p>{err}</p>
}

export default UserList
