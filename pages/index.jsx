import { ConnectButton } from '@rainbow-me/rainbowkit';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
      <ConnectButton />
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
};

export default Home;
