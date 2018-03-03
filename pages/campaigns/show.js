import React, { Component } from 'react'

import Campaign from '../../ethereum/campaign'
import web3 from '../../ethereum/web3'

import Layout from '../../components/Layout'
import { Card, Grid, Button } from 'semantic-ui-react'
import { Link } from '../../routes'
import ContributeForm from '../../components/ContributeForm'

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
            manager: details[4],
            address
        }
    }

    renderCampaigns() {
        const { 
            minimumContribution,
            balance,
            manager,
            requestsCount,
            approversCount
        } = this.props

        const items = [
            {
                header: manager,
                description: 'Manager is asking for this spending request',
                meta: 'Address of Manager',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                description: 'This is the minimum amount to become a contributor',
                meta: 'Minimum Contribution (in wei)'
            },
            {
                header: requestsCount,
                description: 'A request is in place to spending purposes. Approvers must approve it first.',
                meta: 'Number of current requests'
            },
            {
                header: approversCount,
                description: 'Number of people who have already donated.',
                meta: 'Number of Approvers'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                description: 'How much money this campaign currently have.',
                meta: 'Campaign Balance (ether)'
            },
        ]

        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                <h3>Show Campaign</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCampaigns()}
                        </Grid.Column>

                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }
}
