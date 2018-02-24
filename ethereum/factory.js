import web3 from './web3'
import CrowdfundingFactory from './build/CrowdfundingFactory.json'
import { FACTORY_ADDRESS } from '../constants';

export default new web3.eth.Contract(
    JSON.parse(CrowdfundingFactory.interface), 
    FACTORY_ADDRESS
)