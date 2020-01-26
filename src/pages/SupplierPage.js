import React from 'react';
import ListOfProducts from "../components/ListOfProducts/ListOfProducts";
import Customer from "./rightdrawer/Customer";
import Box from "@material-ui/core/Box";

const SupplierPage = (props) => {
    return (
        <Box display={'flex'}>
            <Box m={2}>
                <ListOfProducts/>
            </Box>
            <Box m={2} width={'40vw'} textAlign={'center'} >
                <Customer/>
            </Box>
        </Box>
    );
}

SupplierPage.propTypes = {};

export default SupplierPage;
