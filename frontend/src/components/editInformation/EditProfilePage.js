import React from 'react';
import Icon from "../icon/Icon";
import EmployeeDagmar from "../../images/EmployeeDagmar.jpg";
import {Link} from "react-router-dom";

class EditProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileInfo: [],
        };
    }

    componentWillMount() {
        // hier nog graag een API request die alleen op ID haalt, anders beetje zonde van data etc.
        fetch('http://localhost:5000/profile/user')
            .then(response => response.json())
            .then(data => this.setState({profileInfo: data}))
            .catch(error => console.log(error));
    }


    render() {
        if (!this.state.profileInfo[0]) {
            return <div/>
        }
        // Het is dus van essentieel belang om hier const te gebruiken, anders krijg je undefined errors.
        const profileInfo = this.state.profileInfo[0];

        return(
            <div className="container">
                <form className="col s12">
                    <div className="row">
                        <div className="col 6">
                            <img src={EmployeeDagmar} alt="" className="circle responsive-img z-depth-1"
                                 style={{maxWidth: "10vw", maxHeight: "auto"}}/>
                        </div>
                        {/*Br is misschien wel heel lelijk, maar is voor nu een snelle oplossing*/}
                        <br/>
                        <br/>
                        <form action="#" className="col s2">
                            <div className="file-field input-field">
                                <div className="btn btn-small amber darken-1">
                                    <i className="material-icons">edit</i>
                                    <input type="file"/>
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder={profileInfo.first_name} id="first_name" type="text" className="validate"/>
                                <label className="active" htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder={profileInfo.last_name} id="last_name" type="text" className="validate"/>
                                <label className="active" htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder={profileInfo.username} id="last_name" type="text" className="validate"/>
                            <label className="active" htmlFor="last_name">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <li className="btn amber darken-1">Save changes</li>
                    </div>
                    <div className="row">
                        <Link className="btn amber darken-1" to="/change-email">Edit Email and password</Link>
                    </div>
                </form>
            </div>
        )

    }
}

export default EditProfilePage;