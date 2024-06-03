import App from "../App";
import Login from "../components/Login";
import Home from "../sections/Home";
import MyCars from "../sections/MyCars";
import Overview from "../sections/Overview";
import Payment from "../sections/Payment";
import UserAccessLayout from "../sections/UserAccess";

const routes = [
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
