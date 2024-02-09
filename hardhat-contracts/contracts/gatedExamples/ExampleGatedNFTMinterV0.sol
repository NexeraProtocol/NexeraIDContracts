// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../sigVerifiers/TxAuthDataVerifierV0.sol"; // Ensure this path matches your file structure

/// @title Example Gated NFT Minter
/// V0 compares two gating meachansim
/// @notice This contract demonstrates an NFT minting process gated by off-chain signature verification.
/// @dev Inherits from OpenZeppelin's ERC721 for NFT functionality and a custom TxAuthDataVerifier for signature verification.
contract ExampleGatedNFTMinterV0 is ERC721, TxAuthDataVerifierV0 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    /// @notice Initializes the contract by setting a name, symbol, and signer for TxAuthDataVerifier.
    /// @param signerAddress The address allowed to sign transaction data for minting authorization.
    constructor(
        address signerAddress
    )
        ERC721("MyExampleGatedNFTMinter", "GNFT")
        TxAuthDataVerifierV0(signerAddress)
    {}

    /// @dev Internal function to mint a new NFT to a specified recipient.
    /// @param recipient The address that will receive the newly minted NFT.
    /// @return newItemId The token ID of the newly minted NFT.
    function mintNFT(address recipient) internal returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);

        return newItemId;
    }

    /// @notice Mints a new NFT to a specified recipient after validating the request with a basic signature verification.
    /// @dev This function demonstrates basic signature verification using externally provided data.
    /// @param recipient The address to which the NFT will be minted.
    /// @param _signature The signature provided for verification.
    /// @param _blockExpiration The block number after which the signature is considered expired.
    /// @return The ID of the newly minted NFT upon successful verification and minting.
    function mintNFTBasic(
        address recipient,
        bytes calldata _signature,
        uint256 _blockExpiration
    ) public returns (uint256) {
        // Calculate function data as a concatenation of functionName and arguments
        bytes32 functionName = "mintNFTBasic";
        bytes memory functionData = abi.encodePacked(functionName, recipient);

        // call requireTxDataAuthBasic with correct inputs
        requireTxDataAuthBasic(_signature, functionData, _blockExpiration);

        // if it doesn't revert, mint the NFT
        return mintNFT(recipient);
    }

    /// @notice Mints a new NFT to a specified recipient, using an optimized signature verification process.
    /// @dev Leverages the `requireTxDataAuthOpti` modifier for efficient signature verification.
    /// @param recipient The address to which the NFT will be minted.
    /// @param _blockExpiration The block number after which the request is considered expired.
    /// @param _signature The signature provided for verification.
    /// @return The ID of the newly minted NFT upon successful verification and minting.
    function mintNFTOpti(
        address recipient,
        uint256 _blockExpiration,
        bytes calldata _signature
    ) public requireTxDataAuthOpti returns (uint256) {
        return mintNFT(recipient);
    }
}