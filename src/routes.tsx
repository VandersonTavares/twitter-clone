import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Status } from "./pages/Status";

import Content from "./layouts/Content";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Content />,
		children:[
			{
				path: '/',
				element: <Timeline />
			},

			{
				path: '/status',
				element: <Status/>
			},
		],
	}
])