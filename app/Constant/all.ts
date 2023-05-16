import { SismoConnectClientConfig } from "@sismo-core/sismo-connect-react";

export const contractAddress =
  "0x13BB753567Eaf68A760D6e92e52323DC23904765" as `0x${string}`;
export const rpc = "https://rpc.gnosischain.com";

export const sismoConnectConfig: SismoConnectClientConfig = {
  appId: "0x3c0e4da0cf926dfbf5e31aa66f77199b",
  // devMode: {
  //   enabled: false,
  // },
};

export const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_multisig",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "groupId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "title",
        type: "string",
      },
    ],
    name: "MessageWritten",
    type: "event",
  },
  {
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        internalType: "contract IAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "APP_ID",
    outputs: [
      {
        internalType: "bytes16",
        name: "",
        type: "bytes16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SISMO_CONNECT_LIB_VERSION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "appId",
    outputs: [
      {
        internalType: "bytes16",
        name: "",
        type: "bytes16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "isSelectableByUser",
        type: "bool",
      },
    ],
    name: "buildSignature",
    outputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "message",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "isSelectableByUser",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes",
          },
        ],
        internalType: "struct SignatureRequest",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "buildSignature",
    outputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "message",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "isSelectableByUser",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes",
          },
        ],
        internalType: "struct SignatureRequest",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "isSelectableByUser",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "buildSignature",
    outputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "message",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "isSelectableByUser",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes",
          },
        ],
        internalType: "struct SignatureRequest",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "isSelectableByUser",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "buildSignature",
    outputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "message",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "isSelectableByUser",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes",
          },
        ],
        internalType: "struct SignatureRequest",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllMessages",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "messageOwner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "groupId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "cid",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "stakeAmount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "withdrawn",
            type: "bool",
          },
        ],
        internalType: "struct BlockLeaks.Message[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGroupIds",
    outputs: [
      {
        internalType: "bytes16[]",
        name: "",
        type: "bytes16[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "_groupId",
        type: "bytes16",
      },
    ],
    name: "getMessagesByGroupId",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "messageOwner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "groupId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "cid",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "stakeAmount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "withdrawn",
            type: "bool",
          },
        ],
        internalType: "struct BlockLeaks.Message[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "messageCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "messages",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "messageOwner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "groupId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "cid",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "stakeAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "withdrawn",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "multisig",
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
        name: "_newMultisig",
        type: "address",
      },
    ],
    name: "newMultisig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newStake",
        type: "uint256",
      },
    ],
    name: "newStakePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_msgIds",
        type: "uint256[]",
      },
    ],
    name: "withdrawSomeToMultisig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_msgId",
        type: "uint256",
      },
    ],
    name: "withdrawToMsgOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_msgIds",
        type: "uint256[]",
      },
    ],
    name: "withdrawToMsgOwners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_msgId",
        type: "uint256",
      },
    ],
    name: "withdrawToMultisig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
      {
        internalType: "bytes16",
        name: "_groupId",
        type: "bytes16",
      },
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_cid",
        type: "string",
      },
    ],
    name: "writeMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
