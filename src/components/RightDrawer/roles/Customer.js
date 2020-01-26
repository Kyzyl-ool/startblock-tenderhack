import React, {useState} from 'react';
import {Box, Divider, makeStyles, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import TextField from "@material-ui/core/TextField/TextField";
import Input from "@material-ui/core/Input/Input";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import {Search} from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl/FormControl";

const useStyles = makeStyles(theme => ({
    checkBoxLabel: {
        fontSize: '12px'
    },
    category: {
        margin: 0
    },
    textField: {}
}));

const currencies = [
    {
        value: 'Канцелярские товары',
        label: 'Канцелярские товары',
    }
];

function Customer(props) {
    const [currency, setCurrency] = React.useState('Канцулярские товары');
    const [startDate, setStartDate] = useState(new Date());
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const handleChange = event => {
        setCurrency(event.target.value);
    };

    return (
        <>
            <Box>
                <Typography variant={"h5"}>
                    <b>Фильтры:</b>
                </Typography>
                <Typography>
                    Поиск заказа:
                </Typography>
                <FormControl style={{
                    marginTop: 8,
                    marginBottom: 8
                }} fullWidth={true}>
                    <Input style={{marginTop: "8px"}}
                           id="input-with-icon-adornment"
                           fullWidth
                           startAdornment={
                               <InputAdornment position="start">
                                   <Search/>
                               </InputAdornment>
                           }
                    />
                </FormControl>
                <Typography>
                    Вид товара:
                </Typography>
                <TextField
                    className={classes.category}
                    select
                    value={currency}
                    onChange={handleChange}
                    helperText="Выберите категорию товара"
                    fullWidth
                >
                    {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
            <br/>
            <Box>
                <Typography>
                    Время размещения:
                </Typography>
                <TextField
                    id="datetime-local"
                    type="datetime-local"
                    defaultValue="2020-01-26T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Box>
            <br/>
            <Box>
                <Typography>
                    Стоимость:
                </Typography>
                <TextField
                    id="name"
                    name="name"
                    label="Максимальная цена"
                    fullWidth
                />
            </Box>
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
