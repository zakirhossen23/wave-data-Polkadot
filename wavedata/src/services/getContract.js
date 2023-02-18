import Web3 from 'web3'
import { Abi, ContractPromise } from '@polkadot/api-contract'

import { ApiPromise, Keyring, WsProvider } from '@polkadot/api'
import abiData from '../ink_contracts/wavedata/target/ink/metadata.json';
import { options } from '@astar-network/astar-api';


const address = 'aYgfJmSJY3YyiFYPRewaAT3WEV8Mp7YwaXaN93191w5N8Zg'//smart contract deployed address 
	
export default async function getContract(api) {


    const abi = new Abi(abiData, api.registry.getChainProperties())

    const contract = new ContractPromise(api, abi, address)

	return contract
  }
  