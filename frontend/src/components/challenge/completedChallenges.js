import React from 'react';
import './Challenge.css';
import ChallengeIcon from "./ChallengeIcon";
import Icon from "../icon/Icon";

export default class CompletedChallenges extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        if (this.props.completedChallenges === undefined) {
            return <div/>
        }

        let listItems;

        listItems = this.props.completedChallenges.map((challenge) => <div className="completedMH dare-col">
            <Icon action={() => alert(challenge.body)} image={'http://localhost:5000/image/' + challenge.images + '/dares'}/>
            {/*challenge.image*/}
            <p className="center-align">{challenge.value + ' points'}</p>
        </div>);

        return (
            <div>
                <div className="card">
                    <div className="card-content overflow-scroll-box">
                        <div className="dare-cols">
                            {listItems}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}







