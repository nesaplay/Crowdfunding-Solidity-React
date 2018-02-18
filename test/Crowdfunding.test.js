const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const provider = ganache.provider()
const web3 = new Web3(provider)

const compiledCrowdfundingFactory = require('../eth-base/build/CrowdfundingFactory.json')
const compiledCrowdfunding = require('../eth-base/build/Crowdfunding.json')

let accounts
let factory
let campaignAddress
let campaign

beforeEach(async () => {
    accounts = await web3.eth.getAccounts()

    factory = await new web3.eth.Contract(JSON.parse(compiledCrowdfundingFactory.interface))
        .deploy({ data: compiledCrowdfundingFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000'})
    factory.setProvider(provider)

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    })

    const campaignAddresses = await factory.methods.getLiveCampaigns().call()
    campaignAddress = campaignAddresses[0]

    campaign = await new web3.eth.Contract(JSON.parse(compiledCrowdfunding.interface), campaignAddress)
    // campaign.setProvider(provider)
})

describe('Campaigns', () => {
    it('should deploy a factory and a campaign', () => {
        assert.ok(factory.options.address)
        assert.ok(campaign.options.address)
    })

    it('marks person who called campaign as campaign manager', async () => {
        const manager = await campaign.methods.manager().call()

        assert.equal(accounts[0], manager)
    })

    it('lets people to donate money and marks them as approvers', async () => {
        await campaign.methods.contribute().send({
            from: accounts[1],
            value: '999'
        })

        const approver = await campaign.methods.approvers(accounts[1]).call()
        assert(approver)
    })

    it('fails if minimum value not donated', async () => {
        try {
            await campaign.methods.contribute().send({
                from: accounts[1],
                value: '50'
            })
            assert(false)
        } catch (e) {
            assert(e)
        }
    })

    it('allows manager to create a spending request', async () => {
        await campaign.methods
            .createRequest('wash dishes', '200', accounts[1])
            .send({ from: accounts[0], gas: '1000000' })

        const request = await campaign.methods.requests(0).call()
        assert.equal('wash dishes', request.description)
    })

    it('runs a full contract lifecycle', async () => {
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        })

        await campaign.methods
            .createRequest('drink more water', web3.utils.toWei('3', 'ether'), accounts[1])
            .send({ from: accounts[0], gas: '1000000' })

        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        })

        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        })

        let balance = await web3.eth.getBalance(accounts[1])
        balance = web3.utils.fromWei(balance, 'ether')
        balance = parseFloat(balance)

        assert(balance > 102)

    })
})