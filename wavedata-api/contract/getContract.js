import { Abi, ContractPromise } from '@polkadot/api-contract'
import abiData from './ink_contracts//metadata.json';


const address = 'ZoQDhjoyE58NdgkgDrv4JzojEQLRfqbw5s37r1eiYAwedsQ'//smart contract deployed address 
	
export default async function getContract(api) {


    const abi = new Abi(abiData, api.registry.getChainProperties())

    const contract = new ContractPromise(api, abi, address)

	return contract
  }
  