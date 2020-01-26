import React, {useState} from 'react';
import {Box, Divider, makeStyles, Typography} from "@material-ui/core";
// import PricePicker from "../../PricePicker/PricePicker";
// import IntervalPicker from "../../IntervalPicker/IntervalPicker";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import 'react-rater/lib/react-rater.css'

const useStyles = makeStyles(theme => ({
    checkBoxLabel: {
        fontSize: '12px'
    }
}))

function Customer(props) {
    const [startDate, setStartDate] = useState(new Date());
    const classes = useStyles()

    return (
        <>
            <Box>
                <Box mb={1}>
                    <Typography variant={"h5"}>
                        <b>Фильтры:</b>
                    </Typography>
                </Box>
                <Box mb={1}>
                    <TextField label={'Вид товара'} variant={"outlined"}/>
                </Box>
                <Box mb={1}>
                    <TextField label={'Кол-во'} variant={"outlined"}/>
                </Box>
                <Box mb={1}>
                    <TextField label={'География участников'} variant={"outlined"}/>
                </Box>
                <Box mb={1}>
                    <TextField label={'Срок начала'} variant={"outlined"}/>
                </Box>
                <Box mb={1}>
                    <TextField label={'Срок контракта'} variant={"outlined"}/>
                </Box>
            </Box>
            <br/>
            <Divider/>
            <br/>
            <Box alignSelf={'center'}>
                <Button variant={"contained"} color={"primary"}>
                    Применить
                </Button>
            </Box>
        </>
    );
}

export default Customer;
