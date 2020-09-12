import React from 'react';
import { Icon, Input, Form, Checkbox, Button } from 'semantic-ui-react';
import "./SignUp.css";

export default function SignUp() {
    return(
        <Form className="SignUp">
            <Form.Field><h1>Sign Up</h1></Form.Field>
            <Form.Field>
                <Input iconPosition='left' placeholder='First Name'>
                    <Icon name='id badge' />
                    <input />
                </Input>
            </Form.Field>
            <Form.Field>
                <Input iconPosition='left' placeholder='Last Name'>
                    <Icon name='id badge outline' />
                    <input />
                </Input>
            </Form.Field>
            <Form.Field>
                <Input iconPosition='left' placeholder='School'>
                    <Icon name='building' />
                    <input />
                </Input>
            </Form.Field>
            <Form.Field>
                <Input iconPosition='left' placeholder='Grade'>
                    <Icon name='calendar alternate outline' />
                    <input />
                </Input>
            </Form.Field>
            <Form.Field>
                <Input iconPosition='left' placeholder='Password'>
                    <input />
                    <Icon name='lock' />
                </Input>
            </Form.Field>
            <Form.Field>
                <Checkbox radio label='Student' />
            </Form.Field>
            <Form.Field>
                <Checkbox radio label='Mentor' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    );
}