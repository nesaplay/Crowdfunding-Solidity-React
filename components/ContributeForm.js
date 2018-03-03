import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react'

import Campaign from '../ethereum/campaign'
import web3 from '../ethereum/web3'
import { Router } from '../routes'

export default class ContributeForm extends Component {
    state = { value: '', loading: false, error: '' }

    onSubmit = async (e) => {
        e.preventDefault()
        
        this.setState({ loading: true, error: '' })

        const { address } = this.props
        const campaign = await Campaign(address)

        try {
            const accounts = await web3.eth.getAccounts()
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            })

            Router.replaceRoute(`/campaigns/${address}`)
        } catch (e) {
            this.setState({ error: e.message })
        }

        this.setState({ loading: false, value: '' })
    }
    
    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.error}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input 
                        value={this.state.value}
                        onChange={({ target }) => this.setState({ value: target.value })}
                        label='ether'
                        labelPosition='right'
                    />
                </Form.Field>
                <Message error header='Oops!' content={this.state.error} />
                <Button primary loading={this.state.loading}>Contribute!</Button>
            </Form>
        );
    }
}