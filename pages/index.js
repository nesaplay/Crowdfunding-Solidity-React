import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import { Link } from '../routes'

import factory from '../ethereum/factory'
import Layout from '../components/Layout'

export default class IndexCampaign extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getLiveCampaigns().call()

        return { campaigns }
    }

    renderCampaigns() {
        const { campaigns } = this.props
        const items = campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>
                ),
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
                    <h3>Live campaigns</h3>
                    <Link route='/campaigns/new'>
                        <a>
                            <Button 
                                content='Create Campaign' 
                                icon='add' 
                                labelPosition='right'
                                floated='right'
                                primary
                            />
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    }
}