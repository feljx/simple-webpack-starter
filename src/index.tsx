import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import cat from './assets/cat.jpg'

const App: FunctionComponent = () => {
    return (
        <React.Fragment>
            <p>This cat is rendered in React.</p>
            <img className="column-image" src={cat} />
        </React.Fragment>
    )
}

const container = document.getElementById('react-container')
ReactDOM.render(<App />, container)
