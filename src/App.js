import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Root from "./Pages/Root";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "/login", element: <LoginPage /> }
		]
	}
]);

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
		border: none;
	}

	html {
		font-size: 62.5%;
	}
`;

function App() {
	return (
		<Fragment>
			<GlobalStyle />
			<RouterProvider router={router} />
		</Fragment>
	);
}

export default App;