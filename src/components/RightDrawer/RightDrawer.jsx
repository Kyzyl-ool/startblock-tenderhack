import React from 'react';
import {Box, makeStyles} from "@material-ui/core";
import Customer from "./roles/Customer";

const useStyles = makeStyles(theme => ({
    drawer: {
        width: '20vw',
        boxShadow: '-5px 0 5px -5px rgba(0,0,0,0.5)',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        right: 0,
        top: 54,
        paddingBottom: '100px'
    },
}));

const mapRoleToContent = (role, content) => {
    return <Customer/>
}

function RightDrawer({content}) {
    const classes = useStyles()

    return (
        <Box className={classes.drawer} p={2}>
            {mapRoleToContent(localStorage.getItem('role'), content)}
        </Box>
    );
}

export default RightDrawer;
