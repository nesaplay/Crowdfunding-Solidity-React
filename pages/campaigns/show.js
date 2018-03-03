import React, { Component } from 'react'
import Layout from '../../components/Layout'
import Campaign from '../../ethereum/campaign'

export default class ShowCampaign extends Component {
    static async getInitialProps(props) {
        const { address } = props.query
        const campaign = await Campaign(address)
        const details = await campaign.methods.getAllDetails().call()
        
        return { 
            minimumContribution: details[0],
            balance: details[1],
            requestsCount: details[2],
            approversCount: details[3],
            manager: details[4]
        }
    }

    render() {
        return (
            <Layout>
            </Layout>
        );
    }
}
