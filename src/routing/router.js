import {createBrowserRouter, Outlet} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {Todos} from "../components/Todos/Todos";
import {Albums} from "../components/Albums/Albums";
import {Comments} from "../components/Comments/Comments";
import {Navbar} from "../components/Navbar/Navbar";
import {AppRoutes} from "./AppRoutes";

const AppLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}
const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <h1>Error message</h1>,
        children: [
            {
                path: AppRoutes.MAIN,
                element: <MainPage/>
            },

            {
                path: AppRoutes.TODOS,
                element: <Todos/>
            },
            {
                path: AppRoutes.ALBUMS,
                element: <Albums/>
            },
            {
                path: AppRoutes.COMMENTS,
                element: <Comments/>,
                children: [
                    {
                        path: AppRoutes.POST,
                        element: <h1>Info Info Info</h1>
                    }
                ]
            }
        ]
    }
]);

export {router};