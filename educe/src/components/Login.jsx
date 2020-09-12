import React from 'react';
import { Icon, Input, Button, Form } from 'semantic-ui-react';
import "./Login.css";

export default function Login() {
    return(
        <Form className="Login">
            <Form.Field><h1>Log In</h1></Form.Field>
            <Form.Field>
                <Input iconPosition='left' placeholder='Email'>
                    <Icon name='at' />
                    <input />
                </Input>
            </Form.Field>
            <Form.Field>
                <Input iconPosition='left' placeholder='Password'>
                    <input />
                    <Icon name='lock' />
                </Input>
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    );
}