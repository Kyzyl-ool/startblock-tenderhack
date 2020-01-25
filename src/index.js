import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from '@material-ui/core';
import theme from "./theme/theme";
import Header from "./components/header/header";
import {BrowserRouter as Router} from 'react-router-dom';
import {TreeRootRouter} from "./routes/TreeRouter/TreeRootRouter";


function App() {
    return <Router>
        <Header/>
        <TreeRootRouter>
        </TreeRootRouter>
    </Router>
}


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);

