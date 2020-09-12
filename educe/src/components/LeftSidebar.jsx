import React from 'react';
import {
    Button,
    Menu,
    Sidebar
} from 'semantic-ui-react'
import Profile from "../components/Profile"
import './LeftSidebar.css';

const VerticalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
        as={Menu}
        animation={animation}
        direction={direction}
        icon='labeled'
        inverted
        vertical
        visible={visible}
        width='wide'
    >
        <Profile />
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

export default function LeftSidebar() {
    const [state, dispatch] = React.useReducer(exampleReducer, {
        animation: 'overlay',
        direction: 'left',
        dimmed: false,
        visible: false,
    })
    const { animation, visible } = state
    return(
        <div className = "LeftSidebar">
                <VerticalSidebar
                    animation={animation}
                    direction='left'
                    visible={visible}
                />
                <Button
                    onClick={() =>
                        dispatch({ type: 'CHANGE_ANIMATION', animation: 'slide along' })
                    }
                >
                    Sidebar
                </Button>
        </div>
    );
}