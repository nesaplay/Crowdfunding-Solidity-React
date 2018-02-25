import React, { Component } from 'react'
import { Form, Button, Input, Message } from 'semantic-ui-react'
import { Link, Router } from '../../routes'

import Layout from '../../components/Layout'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'

export default class NewCampaign extends Component {
    state = { minimum: '', error: '', loading: false }

    onSubmit = async (e) => {
        e.preventDefault()
        const { minimum } = this.state
        
        this.setState({ loading: true, error: '' })
        
        try {
            const accounts = await web3.eth.getAccounts()
            await factory.methods.createCampaign(minimum).send({
                from: accounts[0]
            })

            Router.pushRoute('/')
        } catch (e) {
            this.setState({ error: e.message })
        }

        this.setState({ loading: false })
    }

    render() {
        const { minimum, loading, error} = this.state

        return (
            <Layout>
                <h3>Create a new campaign</h3>

                <Form error={!!error} onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input 
                            label='wei' 
                            labelPosition='right' 
                            placeholder='enter minimum contribution amount'
                            value={minimum}
                            onChange={({ target }) => this.setState({ minimum: target.value })}
                        />
                    </Form.Field>
                        
                    <Message
                        error
                        header='Error while submiting'
                        content={error}
                    />
                    <Button primary loading={loading}>Create</Button>
                </Form>
            </Layout>
        );
    }
}