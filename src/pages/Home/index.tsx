import React, { useEffect } from 'react';
import Layout from 'components/Layout';
import FilterBar from 'components/FilterBar';
import PlaylistGrid from 'components/PlaylistGrid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylists, PlaylistState } from 'store/ducks/playlist';
import { ApplicationState } from 'store/ducks';

function Home() {
  const dispatch = useDispatch();
  const { playlists } = useSelector<ApplicationState, PlaylistState>((state) => state.playlist);

  useEffect(() => {
    dispatch(fetchPlaylists());
  }, [ dispatch ]);

  return (
    <Layout>
      <FilterBar />
      <PlaylistGrid playlists={playlists} />
    </Layout>
  );
}

export default Home;
