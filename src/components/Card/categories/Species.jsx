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

function Species({ data }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const {
        name,
        classification,
        designation,
        average_height,
        skin_colors,
        hair_colors,
        eye_colors,
        average_lifespan,
        language
    } = data;

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image="https://starwars-visualguide.com/assets/img/films/4.jpg"
                name={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {classification}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
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
                <CardContent>
                    <Typography paragraph>
                        Designation: {designation}
                    </Typography>
                    <Typography paragraph>
                        Average Height: {average_height}
                    </Typography>
                    <Typography paragraph>
                        Skin Colors: {skin_colors}
                    </Typography>
                    <Typography paragraph>
                        Hair Colors: {hair_colors}
                    </Typography>
                    <Typography paragraph>Eye Colors: {eye_colors}</Typography>
                    <Typography paragraph>
                        Average Lifespan: {average_lifespan}
                    </Typography>
                    <Typography paragraph>Language: {language}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default Species;