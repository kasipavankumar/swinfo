import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import InfoRounded from "@material-ui/icons/InfoRounded";

import "./About.scss";

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    }
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                <InfoRounded style={{ color: "white" }} />
            </IconButton>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Developer
                </DialogTitle>
                <DialogContent dividers>
                    <Avatar
                        className="avatar__image"
                        alt="kman"
                        src="https://avatars0.githubusercontent.com/u/44864604?s=100"
                    />
                    <Typography gutterBottom>
                        Hello there, my name is <strong>thekman</strong>. I'm a
                        full stack web developer from India.
                    </Typography>
                    <Typography gutterBottom>
                        This site is made as a project for web development
                        course on Udemy.
                    </Typography>
                    <div className="about__links">
                        <Typography gutterBottom>
                            Components are provided by{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://material-ui.com/"
                            >
                                Material UI
                            </a>
                            .
                        </Typography>
                        <Typography gutterBottom>
                            Star Wars API by{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://swapi.co/"
                            >
                                SWAPI
                            </a>
                            .
                        </Typography>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
