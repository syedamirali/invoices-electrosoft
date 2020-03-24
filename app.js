import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/main';
import Store from './Redux/store';
import {Provider} from 'react-redux';

const App=()=>{
    return(
        <Provider store={Store}>
            <MainApp />
        </Provider>
    )
}

ReactDOM.render(<App/>,document.getElementById("app"));