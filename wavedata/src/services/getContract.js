import Web3 from 'web3'
import { Abi, ContractPromise } from '@polkadot/api-contract'

import { ApiPromise, Keyring, WsProvider } from '@polkadot/api'
import abiData from '../ink_contracts/wavedata/target/ink/metadata.json';
import { options } from '@astar-network/astar-api';


const address = 'ZoQDhjoyE58NdgkgDrv4JzojEQLRfqbw5s37r1eiYAwedsQ'//smart contract deployed address 
	
export default async function getContract(api) {


    const abi = new Abi(abiData, api.registry.getChainProperties())

    const contract = new ContractPromise(api, abi, address)

	return contract
  }
  