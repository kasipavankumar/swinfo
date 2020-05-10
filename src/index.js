import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./containers/App/App";
import * as serviceWorker from "./serviceWorker";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
	palette: {
		type: "dark",
		primary: {
			main: "#ffe400",
		},
		secondary: {
			main: "#212121",
		},
	},
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
