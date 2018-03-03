import web3 from './web3'
import Campaign from './build/Crowdfunding.json'

export default async (address) => {
    return await new web3.eth.Contract(
        JSON.parse(Campaign.interface), address)
    }