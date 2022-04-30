import type { NextPage } from 'next';
import { Layout } from '../src/components/Layout';
import { LeagueClient } from '../src/components/Client';

const Home: NextPage = () => (
  <Layout>
    <LeagueClient />
  </Layout>
);

export default Home;
