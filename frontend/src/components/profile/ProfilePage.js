import React, {Component} from 'react';
import OpenChallenges from "../challenge/OpenChallenges";
import Profile from "../user_interaction/Profile";
import CompletedChallenges from "../challenge/completedChallenges";
import {UserContext} from "../UserProvider";
import './Common.css'
import Link from "react-router-dom/es/Link";

class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openChallenges: [],
            completedChallenges: [],
            profileInfo: [],
            activeFriends: [],
            username: null,
            token: null,
            renderOnce: true,
            user: this.props.match.params.user,  // the user in the url
            public: false,
            friendInfo: [],
            setRenderTrue: () => this.setState({renderOnce: true}),

        };
        this.owned = true
    }

    fetchImportant() {
        let state;
        if (this.state.username !== null) {
            if (this.state.user !== this.state.username) {
                this.owned = false
            }
        }
        if (this.state.user !== this.state.profileInfo.username) {
            state = this.state.user;
        }
        else {
            // state = this.state.username + "/" + this.state.token;
            state = this.state.user;
        }
        if (this.state.username) {
            fetch('http://localhost:5000/dares/open_dares/' + state)
                .then(response => response.json())
                .then(data => this.setState({openChallenges: data}))
                .catch(error => console.log(error));

            fetch('http://localhost:5000/profile/user/' + this.state.username + "/" + this.state.token)
                .then(response => response.json())
                .then(data => this.setState({profileInfo: data}))
                .catch(error => console.log(error));

            fetch('http://localhost:5000/dares/completed_dares/' + state)
                .then(response => response.json())
                .then(data => this.setState({completedChallenges: data}))
                .catch(error => console.log(error));

            fetch('http://localhost:5000/profile/user/' + this.state.user)
                .then(response => response.json())
                .then(data => this.setState({friendInfo: data}))
                .catch(error => console.log(error));

            this.setState({renderOnce: false});
        }
    }

    addFriend() {
        let data = new FormData();
        // data.append('user_id', event.id);

        data.append('user_id', this.state.profileInfo.id);
        data.append('friend_id', this.state.friendInfo.id);

        fetch('http://127.0.0.1:5000/profile/accept/friend/' + this.state.friendInfo.id + '/' + this.state.profileInfo.id + '/' + this.state.token, {
            method: 'GET',
            // body: data,
        });
        this.setState({renderOnce: false});
    }

    render() {

        // Het is lastig om met consumer te werken en state. Als je het in render plaatst blijft hij maar updaten
        // op deze manier zorg je ervoor dat je het even weet, en daarna laadt hij de juiste context.
        if (this.state.renderOnce) {
            return (
                <UserContext.Consumer>{
                    (context) => {
                        this.setState({
                            username: context.loggedInUsername,
                            token: context.token,
                        });
                        this.fetchImportant();
                    }
                }
                </UserContext.Consumer>
            )
        }

        if (!this.state.friendInfo) {
            return (
                <div/>
            )
            //    dit stukje code zorgt ervoor dat je geen undefined krijgt
        }

        const {openChallenges, completedChallenges} = this.state;
        const profileInfo = this.state.friendInfo;

        return (
            <div>
                <div className="row">
                    <div className="col s2 m3">
                        <h6 className="center">Open Dares</h6>
                        <OpenChallenges fetch={this.state.setRenderTrue} openChallenges={openChallenges} owned={this.owned}/>
                    </div>
                    <div className="col s4 m6">
                        <h6 className="center">Achieved Dares</h6>
                        <CompletedChallenges completedChallenges={completedChallenges}/>
                    </div>
                    <div className="col s2 m3 center">
                        <h6 className="center">Profile</h6>
                        <Profile profileInfo={profileInfo} owned={this.owned}/>
                        {this.friend_button()}
                    </div>
                </div>
            </div>
        );
    }

    friend_button() {
        if (this.state.user !== this.state.profileInfo.username) {
            return <Link to={'/friends/' + this.state.profileInfo.id}><input className="btn amber darken-1" value='Add as a friend' type='button'
                                onClick={() => this.addFriend()}/></Link>
        }
    }
}

export default ProfilePage;