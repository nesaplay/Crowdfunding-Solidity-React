import Web3 from 'web3'
let provider

// works with metamask only currently
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    provider = window.web3.currentProvider
} else {
    provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/AwwXWAl8guoakZ1wyKtI')
}
export default new Web3(provider)
