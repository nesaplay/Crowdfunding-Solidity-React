import React, { Component } from 'react'
import { Button, Table } from 'semantic-ui-react'
import { Link } from '../../../routes'

import Campaign from '../../../ethereum/campaign'
import web3 from '../../../ethereum/web3'
import Layout from '../../../components/Layout'
import RequestView from '../../../components/RequestView'

export default class Requests extends Component {
    static async getInitialProps(props) {
        const { address } = props.query
        const campaign = await Campaign(address)
        const requestCount = await campaign.methods.getRequestCount().call()
        const approversCount = await campaign.methods.approversCount().call()

        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill()
                .map((el, i) => campaign.methods.requests(i).call())
        )

        return { address, requests, requestCount, approversCount }
    }

    renderRequests() {
        const { requests, address, approversCount } = this.props

        return requests.map((request, i) => (
            <RequestView 
                key={i}
                id={i}
                request={request}
                address={address}
                approversCount={approversCount}
            />
        ))
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table

        return (
            <Layout>
                <h3>Requests List</h3>   
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary floated='right' style={{ marginBottom: 10 }}>
                            Add Request
                        </Button>
                    </a>
                </Link>     
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRequests()}
                    </Body>
                </Table>    
                <div>Found {this.props.requestCount} requests</div>   
            </Layout>
        );
    }
}