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

function People({ data }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const {
        name,
        gender,
        height,
        mass,
        birth_year,
        hair_color,
        skin_color,
        eye_color,
        url
    } = data;

    const pattern = /(\d+)/g;
    let imageNumber = url.match(pattern);

    return (
        <Card className={`${classes.root}, card`}>
            <CardMedia
                className={classes.media}
                image={`https://starwars-visualguide.com/assets/img/characters/${imageNumber}.jpg`}
                title={name}
            />
            <CardContent className="text-black">
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" component="p">
                    Birth Year: {birth_year}
                </Typography>
            </CardContent>
            <CardActions className="cardActions" disableSpacing>
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
                    <Typography paragraph>Gender: {gender}</Typography>
                    <Typography paragraph>Height: {height}</Typography>
                    <Typography paragraph>Mass: {mass}</Typography>
                    <Typography paragraph>Hair Color: {hair_color}</Typography>
                    <Typography paragraph>Skin Color: {skin_color}</Typography>
                    <Typography paragraph>Eye Color: {eye_color}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default People;
