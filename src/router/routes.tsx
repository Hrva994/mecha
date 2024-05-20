import App from "../App";
import Home from "../sections/Home";
import MyCars from "../sections/MyCars";
import Overview from "../sections/Overview";
import Payment from "../sections/Payment";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "overview",
        element: <Overview />
    },
    {
        path: "my-cars",
        element: <MyCars />
    },
    {
        path: "payment",
        element: <Payment />
    },
    {
        path: "*",
        element: <div>ERROR</div>
    },
]

export default routes;
