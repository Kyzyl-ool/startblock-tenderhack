import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import MaterialTable from "material-table";
import FormLabel from "@material-ui/core/FormLabel/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";


const currencies = [
    {
        value: 'Канцелярские товары',
        label: 'Канцелярские товары',
    }
];

export default function ProductInfo() {
    const [currency, setCurrency] = React.useState('Канцулярские товары');
    const [state, setState] = React.useState({
        columns: [
            {title: 'Название', field: 'name'},
            {title: 'Количество', field: 'quantity', type: 'numeric'},
            {title: 'Цена', field: 'price', type: 'numeric'}
        ],
        data: [
            {name: 'Карандаши', quantity: 100, price: 500},
            {name: 'Ручка', quantity: 1000, price: 10000},
            {name: 'Бумага Svetocopy', quantity: 10, price: 24000},
            {name: 'Бумага Цветная', quantity: 12, price: 1000},
        ],
    });

    const handleChange = event => {
        setCurrency(event.target.value);
    };

    return (
        <div style={{maxHeight: "90vh"}}>
            <Typography variant="h4" gutterBottom>
                Информация о закупке
            </Typography>
            <Grid item xs={12}>
                <TextField
                    id="name"
                    name="name"
                    label="Меаксимальная цена"
                    fullWidth
                />
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
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
                </Grid>
                <Grid item xs={12}>
                    <MaterialTable
                        localization={{
                            header: {
                                actions: ""
                            },
                            body: {
                                emptyDataSourceMessage: 'Нет продуктов',
                                addTooltip: "Добавить",
                                deleteTooltip: "Удалить",
                                editTooltip: "Изменить",
                                editRow: {
                                    deleteText: "Удалить товар?",
                                    saveTooltip: "Сохранить",
                                    cancelTooltip: "Отмена"
                                }
                            }
                        }}
                        options={{
                            rowStyle: {
                                backgroundColor: '#EEE',
                            },
                            search: false
                        }}
                        searchable={false}
                        title="Список товаров"
                        columns={state.columns}
                        data={state.data}
                        editable={{
                            onRowAdd: newData =>
                                new Promise(resolve => {
                                    setTimeout(() => {
                                        resolve();
                                        setState(prevState => {
                                            const data = [...prevState.data];
                                            data.push(newData);
                                            return {...prevState, data};
                                        });
                                    }, 600);
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise(resolve => {
                                    setTimeout(() => {
                                        resolve();
                                        if (oldData) {
                                            setState(prevState => {
                                                const data = [...prevState.data];
                                                data[data.indexOf(oldData)] = newData;
                                                return {...prevState, data};
                                            });
                                        }
                                    }, 600);
                                }),
                            onRowDelete: oldData =>
                                new Promise(resolve => {
                                    setTimeout(() => {
                                        resolve();
                                        setState(prevState => {
                                            const data = [...prevState.data];
                                            data.splice(data.indexOf(oldData), 1);
                                            return {...prevState, data};
                                        });
                                    }, 600);
                                }),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="name"
                        name="name"
                        label="Место доставки"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="datetime-local"
                        type="datetime-local"
                        label="Дата доставки"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component="legend">Тип закупки</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value="one" control={<Radio/>} label="Единоразовая"/>
                        <FormControlLabel value="two" control={<Radio/>} label="Регулярная"/>
                    </RadioGroup>
                </Grid>
            </Grid>
        </div>
    );
}