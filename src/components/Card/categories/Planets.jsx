import React from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "../Common";

function Planets({ data }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const {
        name,
        terrain,
        rotation_period,
        orbital_period,
        diameter,
        climate,
        gravity,
        surface_water,
        population,
        url,
    } = data;

    const pattern = /(\d+)/g;
    let imageNumber = url.match(pattern);

    return (
        <Card className={`${classes.root}, card`}>
            <CardMedia
                className={classes.media}
                image={`https://starwars-visualguide.com/assets/img/planets/${imageNumber}.jpg`}
                name={name}
                style={{
                    backgroundImage: `url('https://starwars-visualguide.com/assets/img/planets/${imageNumber}.jpg'), url('https://starwars-visualguide.com/assets/img/big-placeholder.jpg')`,
                }}
            />
            <CardContent className="text-black">
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" component="p">
                    {terrain}
                </Typography>
            </CardContent>
            <CardActions className="cardActions" disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more">
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className="text-black">
                    <Typography paragraph>
                        Rotation Period: {rotation_period}
                    </Typography>
                    <Typography paragraph>
                        Orbital Period: {orbital_period}
                    </Typography>
                    <Typography paragraph>Diameter: {diameter}</Typography>
                    <Typography paragraph>Climate: {climate}</Typography>
                    <Typography paragraph>Gravity: {gravity}</Typography>
                    <Typography paragraph>
                        Surface Water: {surface_water}
                    </Typography>
                    <Typography paragraph>Population: {population}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default Planets;
