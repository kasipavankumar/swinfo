import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
    root: {
        // maxWidth: 345
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: red[500]
    }
}));

/* export default function DataCard({
    title,
    openingCrawl,
    director,
    producer,
    releaseDate
}) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image="https://starwars-visualguide.com/assets/img/films/4.jpg"
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {openingCrawl}
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
                            Release Date: {releaseDate}
                        </Typography>
                        <Typography paragraph>Director: {director}</Typography>
                        <Typography paragraph>Producer: {producer}</Typography>
                    </CardContent>
                </Collapse>
            </Card>
    );
} */

export default function DataCard({ endpoint, data }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    let name,
        model,
        manufacturer,
        cost_in_credits,
        length,
        max_atmosphering_speed,
        crew,
        passengers,
        cargo_capacity,
        vehicle_class = null;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    switch (endpoint) {
        case "films":
            const {
                title,
                opening_crawl,
                release_date,
                director,
                producer
            } = data;
            return (
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image="https://starwars-visualguide.com/assets/img/films/4.jpg"
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {opening_crawl}
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
                                Release Date: {release_date}
                            </Typography>
                            <Typography paragraph>
                                Director: {director}
                            </Typography>
                            <Typography paragraph>
                                Producer: {producer}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            );

        case "people":
            const {
                gender,
                height,
                mass,
                birth_year,
                hair_color,
                skin_color,
                eye_color
            } = data;

            name = data.name;

            return (
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image="https://starwars-visualguide.com/assets/img/films/4.jpg"
                        title={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Birth Year: {birth_year}
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
                            <Typography paragraph>Gender: {gender}</Typography>
                            <Typography paragraph>Height: {height}</Typography>
                            <Typography paragraph>Mass: {mass}</Typography>
                            <Typography paragraph>
                                Hair Color: {hair_color}
                            </Typography>
                            <Typography paragraph>
                                Skin Color: {skin_color}
                            </Typography>
                            <Typography paragraph>
                                Eye Color: {eye_color}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            );

        case "vehicles":
            model = data.model;
            manufacturer = data.manufacturer;
            cost_in_credits = data.cost_in_credits;
            length = data.length;
            max_atmosphering_speed = data.max_atmosphering_speed;
            crew = data.crew;
            passengers = data.passengers;
            cargo_capacity = data.cargo_capacity;
            name = data.name;

            vehicle_class = data.vehicle_class;

            return (
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image="https://starwars-visualguide.com/assets/img/films/4.jpg"
                        title={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Model: {model}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Manufacturer: {manufacturer}
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
                                Cost In Credits: {cost_in_credits}
                            </Typography>
                            <Typography paragraph>Length: {length}</Typography>
                            <Typography paragraph>
                                Max Speed: {max_atmosphering_speed}
                            </Typography>
                            <Typography paragraph>Crew: {crew}</Typography>
                            <Typography paragraph>
                                Passengers: {passengers}
                            </Typography>
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

        case "starships":
            model = data.model;
            manufacturer = data.manufacturer;
            cost_in_credits = data.cost_in_credits;
            length = data.length;
            max_atmosphering_speed = data.max_atmosphering_speed;
            crew = data.crew;
            passengers = data.passengers;
            cargo_capacity = data.cargo_capacity;
            name = data.name;
            vehicle_class = data.vehicle_class;

            let hyperdrive_rating = data.hyperdrive_rating;
            let starship_class = data.starship_class;

            return (
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image="https://starwars-visualguide.com/assets/img/films/4.jpg"
                        title={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Model: {model}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Manufacturer: {manufacturer}
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
                                Cost In Credits: {cost_in_credits}
                            </Typography>
                            <Typography paragraph>Length: {length}</Typography>
                            <Typography paragraph>
                                Max Speed: {max_atmosphering_speed}
                            </Typography>
                            <Typography paragraph>Crew: {crew}</Typography>
                            <Typography paragraph>
                                Passengers: {passengers}
                            </Typography>
                            <Typography paragraph>
                                Cargo Capacity: {cargo_capacity}
                            </Typography>
                            <Typography paragraph>
                                Starship Class: {starship_class}
                            </Typography>
                            <Typography paragraph>
                                Hyperdrive Rating: {hyperdrive_rating}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            );

        default:
            return "";
    }
}
