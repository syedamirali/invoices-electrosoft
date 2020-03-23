import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/main';

const App=()=>{
    return(
        <MainApp />
    )
}

ReactDOM.render(<App/>,document.getElementById("app"));