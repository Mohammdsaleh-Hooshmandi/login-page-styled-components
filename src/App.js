import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;