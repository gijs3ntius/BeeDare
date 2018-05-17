import React from 'react';
import Friends from "../friends/Friends";
import NewsFeedPage from "../newsFeed/NewsFeedPage";
import Newsfeed from "../newsFeed/Newsfeed";
import ProfielPagina from "../challenge/ProfielPagina";
import Profile from "../user_interaction/Profile";

class LandingPage extends React.Component{
    render(){
        return(
            <div>
                <div className="row"></div>
                <div className="row">
                    <div className="col s6">
                        <h1 className="text">Welcome on the landing page!</h1>
                    </div>
                    <div className="col s6">
                        <h1 className="text">This is an example!</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage