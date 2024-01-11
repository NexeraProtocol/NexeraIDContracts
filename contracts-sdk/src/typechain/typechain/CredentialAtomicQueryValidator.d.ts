/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface CredentialAtomicQueryValidatorInterface
  extends ethers.utils.Interface {
  functions: {
    "getSupportedCircuitIds()": FunctionFragment;
    "gistRootExpirationTimeout()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "inputIndexOf(string)": FunctionFragment;
    "owner()": FunctionFragment;
    "parseCommonPubSignals(uint256[])": FunctionFragment;
    "proofExpirationTimeout()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "revocationStateExpirationTimeout()": FunctionFragment;
    "setGISTRootExpirationTimeout(uint256)": FunctionFragment;
    "setProofExpirationTimeout(uint256)": FunctionFragment;
    "setRevocationStateExpirationTimeout(uint256)": FunctionFragment;
    "setStateAddress(address)": FunctionFragment;
    "state()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "verify(uint256[],uint256[2],uint256[2][2],uint256[2],bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getSupportedCircuitIds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "gistRootExpirationTimeout",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "inputIndexOf",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "parseCommonPubSignals",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "proofExpirationTimeout",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revocationStateExpirationTimeout",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGISTRootExpirationTimeout",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setProofExpirationTimeout",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRevocationStateExpirationTimeout",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setStateAddress",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [
      BigNumberish[],
      [BigNumberish, BigNumberish],
      [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      [BigNumberish, BigNumberish],
      BytesLike
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getSupportedCircuitIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gistRootExpirationTimeout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "inputIndexOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "parseCommonPubSignals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proofExpirationTimeout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revocationStateExpirationTimeout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGISTRootExpirationTimeout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProofExpirationTimeout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRevocationStateExpirationTimeout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStateAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class CredentialAtomicQueryValidator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CredentialAtomicQueryValidatorInterface;

  functions: {
    getSupportedCircuitIds(
      overrides?: CallOverrides
    ): Promise<[string[]] & { ids: string[] }>;

    gistRootExpirationTimeout(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _verifierContractAddr: string,
      _stateContractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    inputIndexOf(name: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    parseCommonPubSignals(
      inputs: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          merklized: BigNumber;
          userID: BigNumber;
          issuerState: BigNumber;
          circuitQueryHash: BigNumber;
          requestID: BigNumber;
          challenge: BigNumber;
          gistRoot: BigNumber;
          issuerID: BigNumber;
          isRevocationChecked: BigNumber;
          issuerClaimNonRevState: BigNumber;
          timestamp: BigNumber;
        }
      ]
    >;

    proofExpirationTimeout(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revocationStateExpirationTimeout(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setGISTRootExpirationTimeout(
      expirationTimeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProofExpirationTimeout(
      expirationTimeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRevocationStateExpirationTimeout(
      expirationTimeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStateAddress(
      stateContractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    state(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verify(
      inputs: BigNumberish[],
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  getSupportedCircuitIds(overrides?: CallOverrides): Promise<string[]>;

  gistRootExpirationTimeout(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _verifierContractAddr: string,
    _stateContractAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  inputIndexOf(name: string, overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  parseCommonPubSignals(
    inputs: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      merklized: BigNumber;
      userID: BigNumber;
      issuerState: BigNumber;
      circuitQueryHash: BigNumber;
      requestID: BigNumber;
      challenge: BigNumber;
      gistRoot: BigNumber;
      issuerID: BigNumber;
      isRevocationChecked: BigNumber;
      issuerClaimNonRevState: BigNumber;
      timestamp: BigNumber;
    }
  >;

  proofExpirationTimeout(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revocationStateExpirationTimeout(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setGISTRootExpirationTimeout(
    expirationTimeout: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProofExpirationTimeout(
    expirationTimeout: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRevocationStateExpirationTimeout(
    expirationTimeout: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStateAddress(
    stateContractAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  state(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verify(
    inputs: BigNumberish[],
    a: [BigNumberish, BigNumberish],
    b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
    c: [BigNumberish, BigNumberish],
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    getSupportedCircuitIds(overrides?: CallOverrides): Promise<string[]>;

    gistRootExpirationTimeout(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _verifierContractAddr: string,
      _stateContractAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    inputIndexOf(name: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    parseCommonPubSignals(
      inputs: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        merklized: BigNumber;
        userID: BigNumber;
        issuerState: BigNumber;
        circuitQueryHash: BigNumber;
        requestID: BigNumber;
        challenge: BigNumber;
        gistRoot: BigNumber;
        issuerID: BigNumber;
        isRevocationChecked: BigNumber;
        issuerClaimNonRevState: BigNumber;
        timestamp: BigNumber;
      }
    >;

    proofExpirationTimeout(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    revocationStateExpirationTimeout(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setGISTRootExpirationTimeout(
      expirationTimeout: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setProofExpirationTimeout(
      expirationTimeout: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRevocationStateExpirationTimeout(
      expirationTimeout: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setStateAddress(
      stateContractAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    state(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    verify(
      inputs: BigNumberish[],
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    getSupportedCircuitIds(overrides?: CallOverrides): Promise<BigNumber>;

    gistRootExpirationTimeout(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _verifierContractAddr: string,
      _stateContractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    inputIndexOf(name: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    parseCommonPubSignals(
      inputs: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proofExpirationTimeout(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revocationStateExpirationTimeout(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setGISTRootExpirationTimeout(
      expirationTimeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProofExpirationTimeout(
      expirationTimeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRevocationStateExpirationTimeout(
      expirationTimeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStateAddress(
      stateContractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verify(
      inputs: BigNumberish[],
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getSupportedCircuitIds(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gistRootExpirationTimeout(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _verifierContractAddr: string,
      _stateContractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    inputIndexOf(
      name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    parseCommonPubSignals(
      inputs: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proofExpirationTimeout(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revocationStateExpirationTimeout(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setGISTRootExpirationTimeout(
      expirationTimeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProofExpirationTimeout(
      expirationTimeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRevocationStateExpirationTimeout(
      expirationTimeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStateAddress(
      stateContractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verify(
      inputs: BigNumberish[],
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
