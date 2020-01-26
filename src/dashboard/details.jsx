import React, {useState} from 'react';
import {makeStyles, useTheme} from "@material-ui/core";
import ChartProvider from "../components/chart/ChartProvider";
import Typography from "@material-ui/core/Typography/Typography";
import Box from "@material-ui/core/Box/Box";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container/Container";
import {activityData} from "../stubs/stabFile";
import Button from "@material-ui/core/Button";
import {products} from "../stubs/supplierpage";
import Highcharts from 'highcharts';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export const PRICE_DECREASE = 10;

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        padding: "12px",
        marginBottom: '40px'
    },
    button: {
        marginRight: theme.spacing(1),
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    terminal: {
        width: '100vw',
        padding: 'none'
    },
    avatar: {
        height: '160px',
        width: '160px',
        borderRadius: '4px',
        boxShadow: '1px 1px 4px 1px rgba(0,0,0,0.5)',
        padding: '16px'
    },
    headContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
        gridTemplateRows: '1fr',
        alignItems: 'center',
        justifyItems: 'center',
        margin: theme.spacing(2, 0)
    },
    headAvatar: {
        gridArea: '1/1/1/1',
    },
    headInfo: {
        gridArea: '1/2/1/2',
    },
    headActions: {
        gridArea: '1/3/1/3',
        textAlign: 'center',
    }
}));

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    switch (index) {
        case 1:
            return <Container hidden={value !== index}>
                <Box paddingLeft="16px" marginTop="16px">
                    <Typography display="inline" style={{whiteSpace: 'pre-line'}} >{products[props.id].description}</Typography>
                </Box>
            </Container>
        case 0: {
            return <Container hidden={value !== index}>
                <div style={{height: "200px", padding: "12px"}}>
                    <ChartProvider chart={buildActivityGraphProductMetrics()}/>
                </div>
            </Container>
        }
        default:
            return <Box
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}
            >
                <Box p={3}>{children}</Box>
            </Box>
    }
}

const mapButtonstateToButton = (state, onClick) => {
    switch (state) {
        case -1: {
            return null;
        }
        case 0: {
            return <Button variant={"contained"} color={"secondary"} fullWidth={true}
                           onClick={onClick}>
                Участвовать в аукционе
            </Button>
        }
        case 1: {
            return <Button variant={"contained"} color={"secondary"} disabled={true} fullWidth={true}
            >
                Отправка&nbsp;заявки...
            </Button>
        }
        case 2: {
            return null;
        }
        case 3: {
            return <Button variant={"contained"} color={"secondary"} disabled={true} fullWidth={true}
            >
                Вы участвуете
            </Button>;
        }
        case 4: {
            return <Button variant={"contained"} color={"secondary"} fullWidth={true}
                           onClick={onClick}
            >
                Принять тендер
            </Button>
        }
        case 5: {
            return <Button variant={"contained"} color={"secondary"} disabled={true} fullWidth={true}
            >
                Тендер принят
            </Button>;
        }
        default:
            return null;
    }
}

export function Details({id}) {
    const classes = useStyles();
    const [activeTab, setActiveTab] = React.useState(0);
    const theme = useTheme();
    const [buyState, setBuyState] = useState(0)
    const handleBuy = (newState) => {
        setBuyState(newState - 1);
        setTimeout(() => {
            setBuyState(newState)
        }, 2000)
    }
    const [showTerminal, setShowTerminal] = useState(false)
    const [showDialog, setShowDialog] = useState(false);
    if (showDialog && buyState !== 5) setBuyState(5);

    return (
        <div className={classes.root}>
            <Box className={classes.headContainer}>
                <Box className={classes.headAvatar}>
                    <img src={products[id].avatarSrc} alt={'Product'} className={classes.avatar}/>
                </Box>
                <Box className={classes.headInfo}>
                    <Typography variant="h5" paragraph={true}>{products[id].name}</Typography>
                    <Typography>
                        <b>Заказчики, участвующие в тендере:</b>
                    </Typography>
                    <Typography>
                        ИП&nbsp;Алексеенко&nbsp;М.&nbsp;А. – <b>{Number(products[id].price*0.7).toFixed(2)}&nbsp;₽</b>
                    </Typography>
                    <Typography>
                        ИП&nbsp;Матренок&nbsp;Ф.&nbsp;М. – <b>{Number(products[id].price*0.2).toFixed(2)}&nbsp;₽</b>
                    </Typography>
                    <Typography>
                        ИП&nbsp;Соболева&nbsp;А.В. – <b>{Number(products[id].price*0.1).toFixed(2)}&nbsp;₽</b>
                    </Typography>
                </Box>
                <Box className={classes.headActions}
                >
                    {buyState === 0 || buyState === 1 ? <Typography variant={"h4"}>
                        {products[id].price - (buyState >= 4 ? PRICE_DECREASE : 0)}&nbsp;₽
                    </Typography> : <Box><Typography variant={"h4"} align={"center"}>
                        {products[id].price - (buyState >= 4 ? PRICE_DECREASE : 0)}&nbsp;₽
                    </Typography> <br/>
                        {buyState === 2 &&
                        <Button onClick={() => handleBuy(4)} variant={"outlined"} color={"primary"}>Участвовать в
                            котировочной сессии с шагом в 0.5&nbsp;₽(мин. цена для
                            заказчиков {products[id].price - PRICE_DECREASE}&nbsp;₽)</Button>}
                    </Box>
                    }
                    <Box mt={1}>
                        {
                            mapButtonstateToButton(buyState, buyState === 0 ? () => handleBuy(2) : () => setShowDialog(true))
                        }
                    </Box>
                    <Box m={1}>
                        {buyState >= 4 ? <Typography variant={"caption"}>
                            У вас самое выгодное предложение в аукционе.
                            После принятия тендера вы обязуетесь реализовать доставку товара.
                        </Typography> : null}
                    </Box>
                    <Dialog
                        open={showDialog}
                        onClose={() => setShowDialog(false)}
                    >
                        <DialogTitle>
                            Информация о принятом тендере
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText color={"textPrimary"}>
                                <Box mb={2}>
                                    <Typography variant={"h5"}>
                                        <b>Вы приняли тендер у следующих заказчиков:</b>
                                    </Typography>
                                    <Typography>
                                        ИП&nbsp;Алексеенко&nbsp;М.&nbsp;А.
                                    </Typography>
                                    <Typography>
                                        ИП&nbsp;Матренок&nbsp;Ф.&nbsp;М.
                                    </Typography>
                                    <Typography>
                                        ИП&nbsp;Соболева&nbsp;А.В.
                                    </Typography>
                                    <br/>
                                    <Typography>
                                        <b>Предоставленные заказчиками адреса доставки:</b>
                                    </Typography>
                                    <Typography>
                                        152600, г. Зеленчукская, ул. Телевизионный 2-й пер, дом 16, квартира 301
                                    </Typography><Typography>
                                    617565, г. Баган, ул. 22-я линия, дом 14, квартира 112
                                </Typography><Typography>
                                    164760, г. Марьяновка, ул. Речная (Кировский), дом 16, квартира 430
                                </Typography>
                                    <br/>
                                    <Typography>
                                        <b>Заказчики в скором времени получат уведомление о принятии тендера.</b>
                                    </Typography>
                                    <Typography>
                                        <b>Контактные данные для связи:</b>
                                    </Typography>
                                    <Typography>
                                        +7 (908) 548-84-31
                                    </Typography>
                                    <Typography>
                                        +7 (954) 132-46-28
                                    </Typography>
                                    <Typography>
                                        +7 (919) 566-42-48
                                    </Typography>
                                </Box>
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </Box>
            </Box>
            <AppBar position="static" color="default">
                <Tabs
                    value={activeTab}
                    onChange={(event, value) => {
                        setActiveTab(value)
                    }}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Прогноз заказов" {...a11yProps(0)}/>
                    <Tab label="Описание" {...a11yProps(1)}/>
                </Tabs>
            </AppBar>
            <TabPanel id={id} value={activeTab} index={0} dir={theme.direction}>
                Item One
            </TabPanel>
            <TabPanel id={id} value={activeTab} index={1} dir={theme.direction}>
            </TabPanel>
        </div>
    )
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


function buildPieChartConfig(name, value, oppositeValue, label) {
    return {
        chart: {
            type: 'pie',
            height: 200
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,

                }
            }
        },
        title: {
            text: `${name}: ${value} ${label}`,
            align: 'center',
            verticalAlign: 'middle',
            y: 14
        },
        tooltip: {
            headerFormat: ''
        },
        series: [{
            minPointSize: 1,
            innerSize: '85%',
            zMin: 0,
            name: name,
            data: [
                {
                    name: 'no',
                    color: '#d1d1d1',
                    y: oppositeValue
                },
                {
                    name: name,
                    color: '#2e7ad8',
                    y: value
                }]
        }]
    }
}

function buildActivityGraphProductMetrics() {
    return {
        chart: {
            zoomType: 'x',
            height: 200
        },
        title: {
            text: "Прогноз заказов"
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Активность'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'Активность',
            data: activityData
        }]
    }
}

function buildActivityGraph() {
    return {
        chart: {
            zoomType: 'x',
            height: 200
        },
        title: {
            text: "График активности разработчика"
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Кол-во изменений'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'Активность',
            data: activityData
        }]
    }
}
