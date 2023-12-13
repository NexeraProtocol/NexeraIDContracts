/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NexeraVerifierEntrypoint,
  NexeraVerifierEntrypointInterface,
} from "../NexeraVerifierEntrypoint";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "scenarioVerifierAddress",
        type: "address",
      },
    ],
    name: "ScenarioVerifierAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "scenarioVerifierAddress",
        type: "address",
      },
    ],
    name: "ScenarioVerifierDeleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "scenarioVerifierAddress",
        type: "address",
      },
    ],
    name: "ScenarioVerifierDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "scenarioVerifierAddress",
        type: "address",
      },
    ],
    name: "ScenarioVerifierEnabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldScenarioVerifierAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newScenarioVerifierAddress",
        type: "address",
      },
    ],
    name: "ScenarioVerifierUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "scenarioVerifierAddress",
        type: "address",
      },
    ],
    name: "addScenarioVerifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "scenarioVerifierAddress",
        type: "address",
      },
    ],
    name: "deleteScenarioVerifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "scenarioVerifierAddress",
        type: "address",
      },
    ],
    name: "disableScenario",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "scenarioVerifierAddress",
        type: "address",
      },
    ],
    name: "enableScenario",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getScenarioVerifierAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isAllowedForEntrypoint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isScenarioEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "scenarioVerifierAddresses",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oldScenarioVerifierAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "newScenarioVerifierAddress",
        type: "address",
      },
    ],
    name: "updateScenarioVerifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6112858061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806386ba25191161007157806386ba2519146101775780638da5cb5b14610193578063b347e741146101b1578063d1a2851d146101e1578063da872ffa14610211578063f2fde38b1461022d576100b4565b8063010f25d7146100b95780630192e6c8146100d5578063042b77cc146100f15780632dd04b7a146101215780633288c68214610151578063715018a61461016d575b600080fd5b6100d360048036038101906100ce9190610d61565b610249565b005b6100ef60048036038101906100ea9190610da1565b6102e8565b005b61010b60048036038101906101069190610e04565b6103ca565b6040516101189190610e40565b60405180910390f35b61013b60048036038101906101369190610da1565b610409565b6040516101489190610e76565b60405180910390f35b61016b60048036038101906101669190610da1565b610429565b005b61017561050b565b005b610191600480360381019061018c9190610da1565b61051f565b005b61019b61068b565b6040516101a89190610e40565b60405180910390f35b6101cb60048036038101906101c69190610da1565b6106b4565b6040516101d89190610e76565b60405180910390f35b6101fb60048036038101906101f69190610e04565b6107ab565b6040516102089190610e40565b60405180910390f35b61022b60048036038101906102269190610da1565b6107f3565b005b61024760048036038101906102429190610da1565b610a83565b005b610251610b06565b61025a82610b84565b610299576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029090610f14565b60405180910390fd5b6102a2826107f3565b6102ab8161051f565b7f7e895ef684dc2bc346da08dc2f907aee03d3f2fbaf9634e53d9c848081e354bc82826040516102dc929190610f34565b60405180910390a15050565b6102f0610b06565b6102f981610b84565b610338576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032f90610f14565b60405180910390fd5b6001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f18694eb16874b3190b87ff4555f9e0bf11824582bbff638dbf1cf695c9ead06d816040516103bf9190610e40565b60405180910390a150565b600181815481106103da57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60026020528060005260406000206000915054906101000a900460ff1681565b610431610b06565b61043a81610b84565b610479576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047090610f14565b60405180910390fd5b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fc24ce0afc93b75393d529101473eace78db706e505db6dff99f36a6098b6527f816040516105009190610e40565b60405180910390a150565b610513610b06565b61051d6000610c32565b565b610527610b06565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610596576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058d90610fcf565b60405180910390fd5b6001819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f9cb35b4d87a29c981b43fe2b083241b12e94b901ee8278d73d81ce7dc3180ac7816040516106809190610e40565b60405180910390a150565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000806001905060005b6001805490508110156107a15781801561078c5750600181815481106106e7576106e6610fef565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663398cfb76856040518263ffffffff1660e01b815260040161074a9190610e40565b602060405180830381865afa158015610767573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078b919061104a565b5b915081156107a15780806001019150506106be565b5080915050919050565b6000600182815481106107c1576107c0610fef565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6107fb610b06565b61080481610b84565b610843576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a90610f14565b60405180910390fd5b60005b8173ffffffffffffffffffffffffffffffffffffffff166001828154811061087157610870610fef565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146108ca5780806108c2906110a6565b915050610846565b60026000600183815481106108e2576108e1610fef565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055600180808054905061096991906110ee565b8154811061097a57610979610fef565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600182815481106109b9576109b8610fef565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001805480610a1357610a12611122565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590557f6d2f0e1df68c030383a28d88dd5c68415e7a6546fbe379c429b28b5cc9339e0c82604051610a779190610e40565b60405180910390a15050565b610a8b610b06565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610afa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af1906111c3565b60405180910390fd5b610b0381610c32565b50565b610b0e610cf6565b73ffffffffffffffffffffffffffffffffffffffff16610b2c61068b565b73ffffffffffffffffffffffffffffffffffffffff1614610b82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b799061122f565b60405180910390fd5b565b6000806000905060005b600180549050811015610c28578373ffffffffffffffffffffffffffffffffffffffff1660018281548110610bc657610bc5610fef565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610c155760019150610c28565b8080610c20906110a6565b915050610b8e565b5080915050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d2e82610d03565b9050919050565b610d3e81610d23565b8114610d4957600080fd5b50565b600081359050610d5b81610d35565b92915050565b60008060408385031215610d7857610d77610cfe565b5b6000610d8685828601610d4c565b9250506020610d9785828601610d4c565b9150509250929050565b600060208284031215610db757610db6610cfe565b5b6000610dc584828501610d4c565b91505092915050565b6000819050919050565b610de181610dce565b8114610dec57600080fd5b50565b600081359050610dfe81610dd8565b92915050565b600060208284031215610e1a57610e19610cfe565b5b6000610e2884828501610def565b91505092915050565b610e3a81610d23565b82525050565b6000602082019050610e556000830184610e31565b92915050565b60008115159050919050565b610e7081610e5b565b82525050565b6000602082019050610e8b6000830184610e67565b92915050565b600082825260208201905092915050565b7f4e65786572612056657269666965723a205363656e6172696f2056657269666960008201527f6572204164647265737320646f65736e27742065786973740000000000000000602082015250565b6000610efe603883610e91565b9150610f0982610ea2565b604082019050919050565b60006020820190508181036000830152610f2d81610ef1565b9050919050565b6000604082019050610f496000830185610e31565b610f566020830184610e31565b9392505050565b7f496e707574205363656e6172696f20616464726573732063616e6e6f7420626560008201527f20746865207a65726f2061646472657373000000000000000000000000000000602082015250565b6000610fb9603183610e91565b9150610fc482610f5d565b604082019050919050565b60006020820190508181036000830152610fe881610fac565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b61102781610e5b565b811461103257600080fd5b50565b6000815190506110448161101e565b92915050565b6000602082840312156110605761105f610cfe565b5b600061106e84828501611035565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006110b182610dce565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036110e3576110e2611077565b5b600182019050919050565b60006110f982610dce565b915061110483610dce565b925082820390508181111561111c5761111b611077565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006111ad602683610e91565b91506111b882611151565b604082019050919050565b600060208201905081810360008301526111dc816111a0565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611219602083610e91565b9150611224826111e3565b602082019050919050565b600060208201905081810360008301526112488161120c565b905091905056fea2646970667358221220a73f732f0df76793915a6e0530c475b68e97b7f10572c2616ab89c0a8517443d64736f6c63430008100033";

export class NexeraVerifierEntrypoint__factory extends ContractFactory {
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
  ): Promise<NexeraVerifierEntrypoint> {
    return super.deploy(overrides || {}) as Promise<NexeraVerifierEntrypoint>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NexeraVerifierEntrypoint {
    return super.attach(address) as NexeraVerifierEntrypoint;
  }
  connect(signer: Signer): NexeraVerifierEntrypoint__factory {
    return super.connect(signer) as NexeraVerifierEntrypoint__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NexeraVerifierEntrypointInterface {
    return new utils.Interface(_abi) as NexeraVerifierEntrypointInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NexeraVerifierEntrypoint {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NexeraVerifierEntrypoint;
  }
}
