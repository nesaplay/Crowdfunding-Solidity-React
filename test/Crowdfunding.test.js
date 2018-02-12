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
})