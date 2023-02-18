import { Abi, ContractPromise } from '@polkadot/api-contract'
import abiData from './ink_contracts//metadata.json';


const address = 'WTXFEEFxitvh5g8zqct3Scyny5HtuBdjedav1oJRGZTmrcp'//smart contract deployed address 
	
export default async function getContract(api) {


    const abi = new Abi(abiData, api.registry.getChainProperties())

    const contract = new ContractPromise(api, abi, address)

	return contract
  }
  