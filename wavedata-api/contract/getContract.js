import { Abi, ContractPromise } from '@polkadot/api-contract'
import abiData from './ink_contracts//metadata.json';


const address = 'YhzcbJWUYeoRzt6GbNbp22vRRP5DADSHKNYk1qVj3qCZeCW'//smart contract deployed address 
	
export default async function getContract(api) {


    const abi = new Abi(abiData, api.registry.getChainProperties())

    const contract = new ContractPromise(api, abi, address)

	return contract
  }
  