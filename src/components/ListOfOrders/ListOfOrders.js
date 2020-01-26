import React from 'react';
import {Box} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Search} from "@material-ui/icons";
import Button from "@material-ui/core/Button/Button";
import OrderCard from "../OrderCard/OrderCard";

const stubData = [
    {
        id: 1,
        goods:
            'Карандаши цветные\n' +
            'Ручки\n' +
            'Бумага Svetocopy\n',
        participants: '67 ГБОУ СОШ г. Москва\n' +
            '203 МБОУ СОШ г. Москва\n' +
            '42 Лицей г. Москва\n',
        price: '150000'
    },
    {
        id: 4,
        goods:
            'Карандаши цветные\n' +
            'Ручки\n' +
            'Бумага Svetocopy\n',
        participants: '67 ГБОУ СОШ г. Москва\n' +
            '203 МБОУ СОШ г. Москва\n' +
            '42 Лицей г. Москва\n',
        price: '120000'
    }
];

const ListOfOrders = () => {
    return (
        <>
            <Box display="flex" m={1}>
                <FormControl fullWidth={true}>
                    <InputLabel htmlFor="input-with-icon-adornment">Поиск заказов:</InputLabel>
                    <Input style={{marginTop: "8px"}}
                           id="input-with-icon-adornment"
                           startAdornment={
                               <InputAdornment position="start">
                                   <Search/>
                               </InputAdornment>
                           }
                    />
                </FormControl>
                <Box ml={1}>
                    <Button styles={{marginLeft: "8px"}}
                            variant={"contained"}
                            color={"secondary"}
                            onClick={() => window.open('http://localhost:5000')}>
                        Подобрать
                    </Button>
                </Box>
            </Box>
            {
                stubData.map((value, index) => (
                    <Box key={index} style={{textDecoration: 'none'}}>
                        <OrderCard
                            {...value}
                        />
                    </Box>))
            }
        </>
    )
};

ListOfOrders.propTypes = {};

export default ListOfOrders;
