import AddTodoScreen from "@/screens/add";
import HomeScreen from "@/screens/home";
import { ReactElement } from "react"

type RouteType = {
    element : any;
    path: string;
}

export const ROUTES = {
    TODOS : "/",
    ABOUT : "/about",
    ADD_TODO : "/add-todo"
}


export const routes:RouteType[] = [
    {
        element: <HomeScreen/>,
        path:ROUTES.TODOS
    },
    {
        element:<AddTodoScreen/>,
        path:ROUTES.ADD_TODO
    },
    {
        element: <h1>about</h1>,
        path:ROUTES.ABOUT
    },
]