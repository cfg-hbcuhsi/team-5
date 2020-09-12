import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import "./Login.css";

export default function Login() {
    return(
        <div className="Login">
            <h1>Log In</h1>
            <Input iconPosition='left' placeholder='Email'>
                <Icon name='at' />
                <input />
            </Input>
            <br />
            <br />
            <Input iconPosition='left' placeholder='Password'>
                <input />
                <Icon name='lock' />
            </Input>            
        </div>
    );
}