import React from 'react';
import PropTypes from 'prop-types';
import {Box, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    productCard: {
        border: '1px solid rgba(0,0,0,0.5)',
        padding: '16px',
    },
    grid: {
        display: 'grid',
        gridTemplateRows: '1fr',
        gridTemplateColumns: '4fr 1fr'
    },
    avatar: {
        height: '160px',
        width: '160px',
        borderRadius: '4px',
        boxShadow: '1px 1px 4px 1px rgba(0,0,0,0.5)',
        padding: '16px'
    },
    item1: {
        gridArea: '0/0/0/0',
        display: 'flex',
        alignItems: 'center'
    },
    item2: {
        gridArea: '0/1/1/2'
    },
}))


const ProductCard = ({avatarSrc, description, price: cost, contractsAmount, type, name, pricefor}) => {
    const classes = useStyles()

    return (
        <Box m={1}>
            <Paper elevation={4} className={classes.productCard}>
                <Box className={classes.grid}>
                    <Box display={'flex'} className={classes.item1}>
                        <img src={avatarSrc} alt={'Product'} className={classes.avatar}/>
                        <Box mx={1}>
                            <Box mx={1} mb={1}>
                                <Typography>
                                    <b>{name}</b>
                                </Typography>
                                <Typography>
                                    <b>Описание:</b>
                                </Typography>
                                <Box ml={1} >
                                    <Typography variant={"body2"} style={{whiteSpace: "pre-line"}}>
                                        {description}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box mx={1}>
                                <Typography>
                                    <b>Тип:</b>&nbsp;{type}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.item2}>
                        <Box mb={1}>
                            <Typography>
                                <b>Стоимость:</b>
                            </Typography>
                            <Typography variant={"h5"}>
                                {cost}&nbsp;₽&nbsp;/&nbsp;{pricefor}
                            </Typography>
                            <Typography>
                                <b>Прибыль с контракта на основе оферты:</b>
                            </Typography>
                            <Typography variant={"h5"}>
                                {Number(cost/17).toFixed(2)}&nbsp;₽
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                <b>Кол-во заказчиков:</b>
                            </Typography>
                            <Typography variant={"h5"}>
                                {contractsAmount}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

ProductCard.propTypes = {
    id: PropTypes.number,
    avatarSrc: PropTypes.string,
    description: PropTypes.string,
    cost: PropTypes.number,
    averageRate: PropTypes.number,
    type: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string
};

export default ProductCard;
