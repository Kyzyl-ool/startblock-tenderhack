import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from '@material-ui/core';
import theme from "./theme/theme";


function App() {
    return <div>
        Hello
    </div>
}


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);

