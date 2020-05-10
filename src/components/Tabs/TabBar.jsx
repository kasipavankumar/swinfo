import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import CardList from "../CardList/CardList";

import "./TabBar.scss";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}>
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: "100%",
        flexGrow: 1,
    },
}));

export default function TabBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const windowWidth = useMediaQuery("(max-width: 990px)");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="secondary">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant={windowWidth ? "scrollable" : "fullWidth"}
                    scrollButtons="on"
                    aria-label="Categories">
                    <Tab label="Films" {...a11yProps(0)} />
                    <Tab label="People" {...a11yProps(1)} />
                    <Tab label="Vehicles" {...a11yProps(2)} />
                    <Tab label="Starships" {...a11yProps(3)} />
                    <Tab label="Species" {...a11yProps(4)} />
                    <Tab label="Planets" {...a11yProps(5)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
                className="swipeViews">
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <CardList endpoint={"films"} />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <CardList endpoint={"people"} />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <CardList endpoint={"vehicles"} />
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <CardList endpoint={"starships"} />
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    <CardList endpoint={"species"} />
                </TabPanel>
                <TabPanel value={value} index={5} dir={theme.direction}>
                    <CardList endpoint={"planets"} />
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
