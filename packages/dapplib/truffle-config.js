require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note still honey include enter equal gasp'; 
let testAccounts = [
"0xc13ea88dab3a87f3c022e99a03d731b8737c43fdecfcd18d018a9738b6c685e6",
"0xf3a77a7414ecc3f81dd38fb297c44d14c49a961f3e14d45b6cc728f834728060",
"0xef9f30f7bfb1fbc98cba6a4b08700527ca9f14feb4e2d8d888a5f0cb52d32c85",
"0x2acc15a910d8f1ed371e59ffe7467f9c7ae75021fdaf98999d6ee5509ad7b377",
"0xf47cfd60b767dfe8575ed0e53d0a32d708abd062cae6f165045855919088df34",
"0x35d4f39379f8d96b1b995ebc1921ab885f118ba7c61887f11ad46386bfa7339f",
"0xeb16ef26bac043eab44d5983ec7a26738b9716c74e8d55eefecc7fd7faf6c2a2",
"0x43065a42c423c1f861fa502846815d373bda790cd194c37f8cfebde09f58237c",
"0x136c1bd1b860b79dab637592b60255343748458c18b959367b915f851e5ebb0e",
"0xd28e32e6328e81c00bd5405fc8b3be81f392c7d120161a93a84406ded3981564"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

