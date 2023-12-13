/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PoseidonUnit1L,
  PoseidonUnit1LInterface,
} from "../PoseidonUnit1L";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[1]",
        name: "",
        type: "uint256[1]",
      },
    ],
    name: "poseidon",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x610120610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80631caab9a7146038575b600080fd5b604e6004803603810190604a91906092565b6062565b6040516059919060d1565b60405180910390f35b6000919050565b600080fd5b600080fd5b600081905082602060010282011115608c57608b606e565b5b92915050565b60006020828403121560a55760a46069565b5b600060b1848285016073565b91505092915050565b6000819050919050565b60cb8160ba565b82525050565b600060208201905060e4600083018460c4565b9291505056fea264697066735822122022a73590da3613f61cb3a1dc38949a2cc231f1109c32b3c18e0ba6ffaa326d1064736f6c63430008100033";

export class PoseidonUnit1L__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PoseidonUnit1L> {
    return super.deploy(overrides || {}) as Promise<PoseidonUnit1L>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PoseidonUnit1L {
    return super.attach(address) as PoseidonUnit1L;
  }
  connect(signer: Signer): PoseidonUnit1L__factory {
    return super.connect(signer) as PoseidonUnit1L__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoseidonUnit1LInterface {
    return new utils.Interface(_abi) as PoseidonUnit1LInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoseidonUnit1L {
    return new Contract(address, _abi, signerOrProvider) as PoseidonUnit1L;
  }
}
