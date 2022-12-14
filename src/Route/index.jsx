import Watch from "../Pages/Watch";
import Main from "../Pages/Main";
import Films from "../Pages/Films";
import TV from "../Pages/TV";
import Anime from "../Pages/Anime";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";


export const privetRoutes = [
        {path:'/react-movie',element:<Main/>},
        {path:'films',element:<Films/>},
        {path:'tv',element:<TV/>},
        {path:'anime',element:<Anime/>},
        {path:'home',element:<Home/>},
        {path:'/watch:id',element:<Watch/>},
]
export const publicRoutes = [
        {path:'/loginPage',element:<LoginPage/>,exact:true},
]
