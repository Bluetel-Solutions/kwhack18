const Web3 = require('web3')
const web3 = new Web3()
web3.setProvider(new Web3.providers.HttpProvider("/__service/parity/v1"))

window.web3 = web3

const locationType = 'me';
const owner = 'me';
const greengoodguygasContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getDecaySinceGeneration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"locationType","type":"string"}],"name":"lockContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"locationType","type":"string"},{"name":"owner","type":"string"}],"name":"newValueInTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"calcDecay","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getValuesInTime","outputs":[{"components":[{"name":"value","type":"uint256"},{"name":"locationType","type":"string"},{"name":"owner","type":"string"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"locationType","type":"string"},{"name":"owner","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
const greengoodguygas = greengoodguygasContract.new(
   locationType,
   owner,
   {
     from: web3.eth.accounts[0], 
     data: '0x60606040526000600160006101000a81548160ff021916908315150217905550341561002a57600080fd5b6040516109f03803806109f0833981016040528080518201919060200180518201919050506002805480600101828161006391906100e3565b91600052602060002090600302016000606060405190810160405280606481526020018681526020018581525090919091506000820151816000015560208201518160010190805190602001906100bb929190610115565b5060408201518160020190805190602001906100d8929190610115565b505050505050610249565b8154818355818115116101105760030281600302836000526020600020918201910161010f9190610195565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061015657805160ff1916838001178555610184565b82800160010185558215610184579182015b82811115610183578251825591602001919060010190610168565b5b50905061019191906101dc565b5090565b6101d991905b808211156101d5576000808201600090556001820160006101bc9190610201565b6002820160006101cc9190610201565b5060030161019b565b5090565b90565b6101fe91905b808211156101fa5760008160009055506001016101e2565b5090565b90565b50805460018160011615610100020316600290046000825580601f106102275750610246565b601f01602090049060005260206000209081019061024591906101dc565b5b50565b610798806102586000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318cf52da14610072578063599e74af1461009b5780637e498c22146100f8578063a77c8ec514610198578063dbc7b4cc146101c1575b600080fd5b341561007d57600080fd5b610085610226565b6040518082815260200191505060405180910390f35b34156100a657600080fd5b6100f6600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610279565b005b341561010357600080fd5b610196600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061033e565b005b34156101a357600080fd5b6101ab6103ff565b6040518082815260200191505060405180910390f35b34156101cc57600080fd5b6101d461043e565b60405180806020018281038252838181518152602001915080516000925b8184101561021557828490602001906020020151815260200192600101926101f2565b925050509250505060405180910390f35b6000600260016002805490500381548110151561023f57fe5b9060005260206000209060030201600001546002600081548110151561026157fe5b90600052602060002090600302016000015403905090565b60405180807f636f6e73756d65720000000000000000000000000000000000000000000000008152506008019050604051809103902060001916816040518082805190602001908083835b6020831015156102e957805182526020820191506020810190506020830392506102c4565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902060001916141561033b5760018060006101000a81548160ff0219169083151502179055505b50565b6000600160009054906101000a900460ff161561035a576103fa565b6103626103ff565b90506002805480600101828161037891906105f2565b916000526020600020906003020160006060604051908101604052808581526020018781526020018681525090919091506000820151816000015560208201518160010190805190602001906103cf929190610624565b5060408201518160020190805190602001906103ec929190610624565b505050506103f983610279565b5b505050565b6000600a6009600260016002805490500381548110151561041c57fe5b9060005260206000209060030201600001540281151561043857fe5b04905090565b6104466106a4565b6002805480602002602001604051908101604052809291908181526020016000905b828210156105e957838290600052602060002090600302016060604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561052f5780601f106105045761010080835404028352916020019161052f565b820191906000526020600020905b81548152906001019060200180831161051257829003601f168201915b50505050508152602001600282018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b50505050508152505081526020019060010190610468565b50505050905090565b81548183558181151161061f5760030281600302836000526020600020918201910161061e91906106b8565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061066557805160ff1916838001178555610693565b82800160010185558215610693579182015b82811115610692578251825591602001919060010190610677565b5b5090506106a091906106ff565b5090565b602060405190810160405280600081525090565b6106fc91905b808211156106f8576000808201600090556001820160006106df9190610724565b6002820160006106ef9190610724565b506003016106be565b5090565b90565b61072191905b8082111561071d576000816000905550600101610705565b5090565b90565b50805460018160011615610100020316600290046000825580601f1061074a5750610769565b601f01602090049060005260206000209081019061076891906106ff565b5b505600a165627a7a723058209175682e208b7fdbfe1f36c43cef22c065a60bfc663d266d10b170db68f7ff4a0029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })