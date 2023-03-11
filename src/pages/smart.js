import React, { useState } from 'react';
import Web3 from 'web3';
import Abi from "../contract_abi.json"

const MyContract = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  const connectToBlockchain = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        setWeb3(web3);
        const networkId = await web3.eth.net.getId();
        // const network = 
        const contractAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'; // Replace with your contract address
        const contractAbi = Abi;
        const contract = new web3.eth.Contract(contractAbi, contractAddress);
        setContract(contract);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('No Ethereum browser extension detected.');
    }
  };

  const callContractFunction = async () => {
    try {
      const result = await contract.methods.myFunction().call();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={connectToBlockchain}>Connect to Blockchain</button>
      <button onClick={callContractFunction}>Call Contract Function</button>
    </div>
  );
};

export default MyContract;
// module.exports = {
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           enforce: "pre",
//           use: ["source-map-loader"],
//         },
//       ],
//     },
//     ignoreWarnings: [/Failed to parse source map/],
//   };
