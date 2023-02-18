import Web3 from 'web3'
import { Abi, ContractPromise } from '@polkadot/api-contract'

import { ApiPromise, Keyring, WsProvider } from '@polkadot/api'
import abiData from '../ink_contracts/wavedata/target/ink/metadata.json';
import { options } from '@astar-network/astar-api';


const address = 'Y1eBHj2d3kpEftUPaxnLxx1ndxZj94aKixLHHfp27mQrgNV'//smart contract deployed address 
	
export default async function getContract(api) {


    const abi = new Abi(abiData, api.registry.getChainProperties())

    const contract = new ContractPromise(api, abi, address)

	return contract
  }
  