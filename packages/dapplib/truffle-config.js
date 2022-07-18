require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note saddle honey inflict enter onion gate'; 
let testAccounts = [
"0xa6527f4fd9050445e0782b784164b01cc617029449faa53047ee3e092c839626",
"0x5511980c7040c5a650fce12df79f0a77318ae3cf5fd05040e07f1451f925a7f8",
"0xc7d6f729e71bc1b0fe2dcd3c2a7de5930e146cd4cf10423cf9b48110921259cc",
"0x500ae47c4ac8be552ee9c32ec81c38f6453b366dd6dd3528cdc554741dce38d3",
"0xb54d033e74e4afb9697f07d97bac99536ad0af1e97678324f3f75b8e0af69220",
"0xb9321b071a4d52e8740ae3cafa30e23fbd8a28ff4ce3d89c4048ded3934a86c5",
"0x217a9d0e89873365418ce10c90007f512065d49b5f581281411ed75e64a8f198",
"0x304839a5319e726b083c49c4560fc5ef63f20782752f8bbd4cbf1eff51e1ca95",
"0xbcd0220564c02936591cd15ce2152040fb11f4a645368f6c982ed8effb28c5d7",
"0x1c11b71a186aca160428d1e453acd8c322c525d52c64c79eec84cce90a6930c3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

