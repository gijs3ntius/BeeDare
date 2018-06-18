import React, {Component} from 'react';
import Message from './Message'


class Newsfeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            number: 10,
            messageList: [],

        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => this.setState({messages: data}))
    }


    render() {
        this.state.messageList = this.state.messages.map((message) =>
            <div className="message">
                <Message
                    body={message.body}
                    name={message.name}
                />
            </div>
        );//end map
        return (
            <div>
                {this.getList(this.state.number)}
                {this.placeButton()}
            </div>

        ); //end return
    }//end render

    getList() {
        let messageSet = [];
        for (let i = 0; i < this.state.number; i++) {
            messageSet.push(this.state.messageList[i])
        }
        return (
            <div className="card">
                <div className="card-content">
                    {messageSet}
                </div>
            </div>
        )
    }

    placeButton() {
        if (this.state.number < this.state.messages.length) {
            return <a className="waves-effect waves-light btn amber darken-1 center-component top-button"
                      onClick={() => this.setState({number: this.state.number + 10})}>Load more</a>
        }
    }
}

export default Newsfeed;
