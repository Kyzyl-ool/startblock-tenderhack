import React, {useState} from 'react';
import {OutlinedInput, Typography, Box} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ProductCard from "../components/ProductCard/ProductCard";
import ListOfProducts from "../components/ListOfProducts/ListOfProducts";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: 200,
    },
}));


SupplierPage.propTypes = {};

function SupplierPage(props) {
    const classes = useStyles(props);
    const [values, setValues] = useState({
        password: '',
    });

    const handleChange = prop => event => {
        setValues({...values, [prop]: event.target.value});
    };

    return (
        <div>
            <Typography variant={"h1"}>
                Подбор совместных заказов
            </Typography>
            <Box m={1}>
                <OutlinedInput
                    type={'text'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <SearchIcon/>
                    }
                    // labelWidth={70}
                    fullWidth={true}
                    placeholder={'Поиск'}
                />
            </Box>
            <ListOfProducts />
        </div>
    );
}

export default SupplierPage;
