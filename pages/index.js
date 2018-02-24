import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import factory from '../ethereum/factory'
import Layout from '../components/Layout'

export default class Index extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getLiveCampaigns().call()

        return { campaigns }
    }

    renderCampaigns() {
        const { campaigns } = this.props
        const items = campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                meta: '85% done',
                fluid: true
            }
        })

        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                <div>
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                    <h3>Live campaigns</h3>
                    <Button 
                        content='Create Campaign' 
                        icon='add' 
                        labelPosition='right'
                        floated='right'
                        primary
                    />
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    }
}