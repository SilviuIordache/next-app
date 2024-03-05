import { Metadata } from 'next';
import HeavyComponent from './components/HeavyComponent';

export const metadata: Metadata = {
  title: 'NextApp: Home page',
  description: 'This is the home page',
};

const Home = () => {
  return (
    <main>
      <HeavyComponent />
    </main>
  );
};

export default Home;
