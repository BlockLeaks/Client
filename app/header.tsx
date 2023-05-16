import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function AppHeader({ group }: { group: string }) {
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();

  return (
    <header className="bg-blue-600 text-white py-8 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2">BlockLeaks</h1>
          <p className="text-lg">
            Your shield for anonymous truth-telling! Leak confidential info,
            prove group membership, all while staying invisible with Sismo tech.
            Built on Gnosis. Power of transparency, without compromising
            identity.
          </p>
        </div>
        {isConnected ? (
          <div className="flex items-center space-x-2 bg-blue-700 text-white p-3 rounded-lg">
            <span>Connected with</span>
            <code className="bg-blue-800 px-2 py-1 rounded text-white font-mono text-sm">
              {address}
            </code>
            <button
              className="ml-auto bg-white text-blue-700 rounded px-3 py-1 text-sm"
              onClick={() => disconnect()}
            >
              Disconnect
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-2 bg-blue-700 text-white p-3 rounded-lg">
            <button
              className="ml-auto bg-white text-blue-700 rounded px-3 py-1 text-sm"
              onClick={() => connect()}
            >
              Connect
            </button>
          </div>
        )}
      </div>

      {group && (
        <div>
          <br /> <h1 className="text-4xl"> ZKgroup : {group} </h1>
        </div>
      )}
    </header>
  );
}
