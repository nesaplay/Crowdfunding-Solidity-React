import React, { Component } from 'react';

export default class ShowCampaign extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                Your address is : {this.props.url.query.address}
            </div>
        );
    }
}
