import Header from "./Components/header";
import Home from './Components/home'
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import CommentsPage from "./pages/commentsPage";
import { useEffect } from "react";
import { gapi } from 'gapi-script';
import Signup from "./Signup";

const clientId='768737600073-dnuqr72j98ibj57joe2pos47pvnjuql9.apps.googleusercontent.com'
function Router() {

    useEffect(() => {
        function start() {
            gapi.client.init({
            clientId: clientId,
            scope:""
            })
        };
        gapi.load('client:auth2', start);
        });

    return (
        <> 
            <BrowserRouter basename="/">
                <Routes>
                    <Route exact path='/' 
                        element={<Signup />} />
                    <Route exact path='/home'
                        element={<Home/>}/>
                    <Route exact path='comments'
                        element={<CommentsPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;