import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Register from "../pages/auth/RegisterPage/RegisterPage";
import Login from "../pages/auth/LoginPage/LoginPage";
const routes = [
    {
        path: "/",
        page: HomePage,
        isShowHeader: true
    },
    {
        path: "*",
        page: NotFoundPage,
        isShowHeader: false
    },
    {
        path: "/register",
        page: Register,
        isShowHeader: false
    }
    ,
    {
        path: "/login",
        page: Login,
        isShowHeader: false
    }
]

export default routes;
