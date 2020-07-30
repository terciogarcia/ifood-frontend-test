import React from 'react';
import Layout from 'components/Layout';
import FilterBar from 'components/FilterBar';
import Playlists from 'components/Playlists';

function Home() {
  return (
    <Layout>
      <FilterBar />
      <Playlists />
    </Layout>
  );
}

export default Home;
