const Web3 = require('web3')
require('./bind.jsx')

const web3 = new Web3()
web3.setProvider(new Web3.providers.HttpProvider("/__service/parity/v1"))

window.web3 = web3

const knownParityUser = "0xa656705d507cbce676a709cd1a245db050ca4b98"
const knownParityPassword = "test1234"
const knownTransaction = '0x0ab2c90b6c3b5d08ab0269910f74baa893674941'
const GreenGoodGuyGasABI = [{"constant":true,"inputs":[],"name":"getDecaySinceGeneration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"locationType","type":"string"}],"name":"lockContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"locationType","type":"string"},{"name":"owner","type":"string"}],"name":"newValueInTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"calcDecay","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getValuesInTime","outputs":[{"components":[{"name":"value","type":"uint256"},{"name":"locationType","type":"string"},{"name":"owner","type":"string"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"locationType","type":"string"},{"name":"owner","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
const GreenGoodGuysGasContract = new web3.eth.Contract(GreenGoodGuyGasABI, knownTransaction)
window.GreenGoodGuysGasContract = GreenGoodGuysGasContract

const unlockAccountPayload = {"method":"personal_unlockAccount","params":[knownParityUser, knownParityPassword,null],"id":1,"jsonrpc":"2.0"}
window.unlockRequest = _ => fetch('/__service/parity/v1', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(unlockAccountPayload)
}).then(res => res.json())

window.transfer = _ => GreenGoodGuysGasContract.methods.newValueInTime("me", "me").send({ from: knownParityUser }).then(console.log)
window.calcDecay = _ => GreenGoodGuysGasContract.methods.calcDecay().call().then(console.log)

window.knownDemo = _ => window.calcDecay() ; window.unlockRequest().then(window.transfer)

