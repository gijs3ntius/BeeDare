import React from 'react';

export default class Register extends React.Component{

    render(){
        return(
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name_register" type="text" className="validate"/>
                            <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name_register" type="text" className="validate"/>
                            <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password_register" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email_register" type="email" className="validate"/>
                            <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="center" style={{boxAlign: "center"}}>
                        <a className="waves-effect waves-light btn amber darken-1"
                        >
                            Registreer
                        </a>
                    </div>
                </div>
                <div className="row">
                    <p className="center">Of registreer via Google</p>
                </div>
                <div className="row">
                    <div className="center">
                <a className="waves-effect waves-light btn social google light red"

                >
                    Registreer via Google
                </a>
                    </div>
                </div>
            </form>
        </div>
            )
    }
}
