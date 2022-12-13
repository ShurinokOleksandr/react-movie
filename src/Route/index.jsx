import Watch from "../Pages/Watch";
import Main from "../Pages/Main";
import Films from "../Pages/Films";
import TV from "../Pages/TV";
import Anime from "../Pages/Anime";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";


export const privetRoutes = [
        {path:'/react-movie',element:<Main/>},
        {path:'films',element:<Films/>,exact:true},
        {path:'tv',element:<TV/>,exact:true},
        {path:'anime',element:<Anime/>,exact:true},
        {path:'home',element:<Home/>,exact:true},
        {path:'watch/:id',element:<Watch/>,exact:true},
]
export const publicRoutes = [
        {path:'/loginPage',element:<LoginPage/>,exact:true},
]
