import React, { Component } from 'react';
import YoutubeEmbed from './YoutubeEmbed';

class Activity extends Component {
    constructor(props) {
        super(props)

        this.state = {
            complete: false
        }
    }

    componentDidMount() {
        // server call to get the embedId to display the video of {id} category
        //console.log(this.props.match.params.id);
    }

    handleComplete = () => {
        // server call -> Update DB
        this.setState({
            complete: true
        })
    }

    render() {
        return (
            <div className="text-center">
                <h3>{this.props.match.params.id}</h3>
                <YoutubeEmbed embedId="O-6f5wQXSu8" />
                {!this.state.complete ? <button className="btn btn-primary mt-5" onClick={this.handleComplete}>Mark as complete</button> :
                    <button className="btn btn-success mt-5">complete</button>}


            </div>
        )
    }
}

export default Activity
