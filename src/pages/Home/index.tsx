import React, { useEffect } from 'react';
import Layout from 'components/Layout';
import FilterBar from 'components/FilterBar';
import PlaylistGrid from 'components/PlaylistGrid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylists } from 'store/ducks/playlist';
import { ApplicationState } from 'store/ducks';
import { fetchFilters } from 'store/ducks/filter';
import { Playlist } from 'interfaces/playlist';
import { Filter } from 'interfaces/filter';

interface SelectedProps {
  playlists: Playlist[],
  filters: Filter[]
}

function Home() {
  const dispatch = useDispatch();
  const { playlists, filters } = useSelector<ApplicationState, SelectedProps>((state) => ({
    playlists: state.playlist.playlists,
    filters: state.filter.filters,
  }));

  useEffect(() => {
    dispatch(fetchPlaylists());
    dispatch(fetchFilters());
  }, [ dispatch ]);

  return (
    <Layout>
      <FilterBar filters={filters} />
      <PlaylistGrid playlists={playlists} />
    </Layout>
  );
}

export default Home;
