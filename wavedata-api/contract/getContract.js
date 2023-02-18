import { Abi, ContractPromise } from '@polkadot/api-contract'
import abiData from './ink_contracts//metadata.json';


const address = 'ZB2jrKpp6ztYmLrNUMj4cP368i2gGxiehaTQk98RKrvEeFt'//smart contract deployed address 
	
export default async function getContract(api) {


    const abi = new Abi(abiData, api.registry.getChainProperties())

    const contract = new ContractPromise(api, abi, address)

	return contract
  }
  