import React from 'react';
import PropTypes from 'prop-types';
import {Box, makeStyles, Paper, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";

const useStyles = makeStyles(theme => ({
    productCard: {
        border: '1px solid rgba(0,0,0,0.5)',
        padding: '16px',
    },
    productCardText: {
        marginLeft: 8
    },
    grid: {
        display: 'grid',
        gridTemplateRows: '1fr',
        gridTemplateColumns: '1fr 1fr 1fr 1fr'
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
        alignItems: 'left',
        flexDirection: 'column'
    },
    item2: {
        gridArea: '0/1/1/2'
    },
    item3: {
        gridArea: '0/2/1/3'
    },
    item4: {
        gridArea: '0/3/1/4'
    },
    button: {
        width: 100
    }
}));


const OrderCard = (info) => {
    const classes = useStyles()

    return (
        <Box m={1}>
            <Paper elevation={4} className={classes.productCard}>
                <Typography style={{marginLeft: 8, fontWeight: "bold"}} className={classes.productCardText}>
                    Заказ {info.id}
                </Typography>
                <Box className={classes.grid}>
                    <Box display={'flex'} className={classes.item1}>
                        <Typography className={classes.productCardText}>
                            <b>Товары:</b>
                        </Typography>
                        <Box mx={1} mb={1}>
                            {info.goods}
                        </Box>
                    </Box>
                    <Box display={'flex'} className={classes.item1}>
                        <Typography className={classes.productCardText}>
                            <b>Участники:</b>
                        </Typography>
                        <Box mx={1} mb={1}>
                            {info.participants}
                        </Box>
                    </Box>
                    <Box display={'flex'} className={classes.item1}>
                        <Typography className={classes.productCardText}>
                            <b>Стоимость:</b>
                        </Typography>
                        <Box mx={1} mb={1}>
                            {info.price}
                        </Box>
                    </Box>
                    <Box display={'flex'} className={classes.item1}>
                        <Button className={classes.button}
                                variant={"contained"}
                                color={"secondary"}
                        >
                            Выбрать
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

OrderCard.propTypes = {
    id: PropTypes.number,
    avatarSrc: PropTypes.string,
    description: PropTypes.string,
    cost: PropTypes.number,
    averageRate: PropTypes.number,
    type: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string
};

export default OrderCard;
