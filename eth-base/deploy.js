const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const compiledFactory = require('./build/CrowdfundingFactory.json')

const provider = new HDWalletProvider(
    'feature truly garden ten gown lava chase diamond crucial aspect acoustic check',
    'https://rinkeby.infura.io/AwwXWAl8guoakZ1wyKtI '
)
const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000' })
        
    console.log('Deployed at address: ', result.options.address)
}

deploy()

