import React from 'react';
import {
    Button,
    Segment,
    Icon,
    Menu,
    Sidebar
} from 'semantic-ui-react'
import './RightSidebar.css';

const VerticalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
        as={Menu}
        animation={animation}
        direction={direction}
        icon='labeled'
        inverted
        vertical
        visible={visible}
        width='thin'
    >
        <Menu.Item as='a'>
            <Icon name='home' />
            Home
        </Menu.Item>
        <Menu.Item as='a'>
            <Icon name='gamepad' />
            Games
        </Menu.Item>
        <Menu.Item as='a'>
            <Icon name='camera' />
            Images
        </Menu.Item>
    </Sidebar>
)

function exampleReducer(state, action) {
    switch (action.type) {
        case 'CHANGE_ANIMATION':
            return { ...state, animation: action.animation, visible: !state.visible }
        case 'CHANGE_DIMMED':
            return { ...state, dimmed: action.dimmed }
        case 'CHANGE_DIRECTION':
            return { ...state, direction: action.direction, visible: false }
        default:
            throw new Error()
    }
}

export default function RightSidebar() {
    const [state, dispatch] = React.useReducer(exampleReducer, {
        animation: 'overlay',
        direction: 'right',
        dimmed: false,
        visible: false,
    })
    const { animation, visible } = state
    return(
        <div className = "RightSidebar">
                <VerticalSidebar
                    animation={animation}
                    direction='right'
                    visible={visible}
                />
                <Sidebar.Pusher>
                    <div>
                        <h1>Yeet</h1>
                    </div>
                    <Button
                        onClick={() =>
                            dispatch({ type: 'CHANGE_ANIMATION', animation: 'slide along' })
                        }
                    >
                        Menu
                    </Button>
                </Sidebar.Pusher>
        </div>
    );
}