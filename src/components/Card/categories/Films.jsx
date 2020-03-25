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

import "../Card.scss";

function Films({ data }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const { title, opening_crawl, release_date, director, producer, url } = data;

    const pattern = /(\d+)/g;
    let imageNumber = url.match(pattern);

    return (
        <Card className={`${classes.root}, card`}>
            <CardMedia
                className={classes.media}
                image={`https://starwars-visualguide.com/assets/img/films/${imageNumber}.jpg`}
                title={title}
            />
            <CardContent className="text-black">
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" component="p">
                    {opening_crawl}
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
                    <Typography paragraph>
                        Release Date: {release_date}
                    </Typography>
                    <Typography paragraph>Director: {director}</Typography>
                    <Typography paragraph>Producer: {producer}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default Films;
