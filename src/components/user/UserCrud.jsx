import React, { Component } from "react";
import Main from "../template/Main";


const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'User creation: CRUD- Create, Read, Update, Delete'
}

export default class UserCrud extends Component {
    render(){
        return (
            <Main {...headerProps}>
                User Creation
            </Main>
        )
    }
}