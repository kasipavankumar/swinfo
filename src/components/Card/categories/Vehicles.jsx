import React from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "../Common";

function Vehicles({ data }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const {
        model,
        manufacturer,
        cost_in_credits,
        length,
        max_atmosphering_speed,
        crew,
        passengers,
        cargo_capacity,
        name,
        vehicle_class
    } = data;

    return (
        <Card className={`${classes.root}, card`}>
            <CardMedia
                className={classes.media}
                image="https://starwars-visualguide.com/assets/img/films/4.jpg"
                title={name}
            />
            <CardContent className="text-black">
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" component="p">
                    Model: {model}
                </Typography>
                <Typography variant="body2" component="p">
                    Manufacturer: {manufacturer}
                </Typography>
            </CardContent>
            <CardActions className="cardActions" disableSpacing>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className="text-black">
                    <Typography paragraph>
                        Cost In Credits: {cost_in_credits}
                    </Typography>
                    <Typography paragraph>Length: {length}</Typography>
                    <Typography paragraph>
                        Max Speed: {max_atmosphering_speed}
                    </Typography>
                    <Typography paragraph>Crew: {crew}</Typography>
                    <Typography paragraph>Passengers: {passengers}</Typography>
                    <Typography paragraph>
                        Cargo Capacity: {cargo_capacity}
                    </Typography>
                    <Typography paragraph>
                        Vehicle Class: {vehicle_class}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default Vehicles;
