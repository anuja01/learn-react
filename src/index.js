import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Logo from './logo.svg'
import * as serviceWorker from './serviceWorker';

const name = 'Anuja';

const user = {
    firstName: "Anuja",
    lastName: "Ulpathakumbura"
}
const formatName = (user) => {
    return `${user.firstName} ${user.lastName}`
}
const FirstComponent = () => (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <img src={Logo} alt='test logo' width='240px' height='240px' />
        <h1>Hello World !!!</h1>
        <h3>Hi {name}</h3>
        <h6>This is your full name: {formatName(user)}</h6>
    </div>
)
ReactDOM.render(<FirstComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
