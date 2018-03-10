import React, { Component } from 'react'
import { Form, Input, Button, Message } from 'semantic-ui-react'
import { Link, Router } from '../../../routes'

import Campaign from '../../../ethereum/campaign'
import web3 from '../../../ethereum/web3'
import Layout from '../../../components/Layout'

export default class RequestsNew extends Component {
    state = {
        value: '',
        description: '',
        recipient: '',
        error: '',
        loading: false
    }

    static async getInitialProps(props) {
        const { address } = props.query

        return { address }
    }

    onSubmit = async (e) => {
        e.preventDefault()

        this.setState({ loading: true, error: '' })

        const { description, value, recipient} = this.state
        const { address } = this.props

        const campaign = await Campaign(address)
        
        try {
            const accounts = await web3.eth.getAccounts()
            await campaign.methods.createRequest(
                description, web3.utils.toWei(value, 'ether'), recipient
            ).send({ from: accounts[0] })

            Router.pushRoute(`/campaigns/${address}/requests`)
        } catch (e) {
            this.setState({ error: e.message })
        }

        this.setState({ loading: false })
    }

    render() {
        const { recipient, value, description, loading, error } = this.state

        return (
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                    <a>Back</a>
                </Link>
                <h3>Create a Request</h3>
                <Form onSubmit={this.onSubmit} error={!!error}>
                    <Form.Field>
                        <label>Description</label>
                        <Input 
                            value={description}
                            onChange={({ target }) => this.setState({ description: target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Amount in Ether</label>
                        <Input 
                            value={value}
                            onChange={({ target }) => this.setState({ value: target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input 
                            value={recipient}
                            onChange={({ target }) => this.setState({ recipient: target.value })}
                        />
                    </Form.Field>
                    <Message error header="Oops!" content={error} />
                    <Button primary loading={loading}>Create</Button>
                </Form>
            </Layout>
        );
    }
}
