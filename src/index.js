import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Form, Canvas } from './components'

const initialState = {text: ''}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}

const store = createStore(reducer)

const render = () => {
    ReactDOM.render(
        <div>
            <Form store={store}/>
            <Canvas store={store}/>
        </div>,
        document.getElementById('root')
    )
}

store.subscribe(() => render())
render()
