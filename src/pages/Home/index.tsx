import React, {
  useEffect, useState, useCallback, useMemo,
} from 'react';
import FilterBar from 'components/FilterBar';
import PlaylistGrid from 'components/PlaylistGrid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylists } from 'store/ducks/playlist';
import { ApplicationState } from 'store/ducks';
import { fetchFilters } from 'store/ducks/filter';
import { Playlist } from 'interfaces/playlist';
import { Filter } from 'interfaces/filter';
import { FilterParams } from 'interfaces/filterParams';

interface SelectedProps {
  playlists: Playlist[],
  filters: Filter[]
}

function Home() {
  const dispatch = useDispatch();
  const [ searchTerm, setSearchTerm ] = useState<string>('');
  const { playlists, filters } = useSelector<ApplicationState, SelectedProps>((state) => ({
    playlists: state.playlist.playlists,
    filters: state.filter.filters,
  }));

  const loadPlaylists = useCallback((params?: FilterParams) => {
    dispatch(fetchPlaylists(params));
  }, [ dispatch ]);

  useEffect(() => {
    loadPlaylists();
    dispatch(fetchFilters());
  }, [ dispatch, loadPlaylists ]);

  const handleChangeSearchTerm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const filteredPlayslists = useMemo(() => {
    if (!searchTerm) return playlists;
    return playlists.filter((playlist) => (
      playlist.name.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  }, [ playlists, searchTerm ]);

  return (
    <>
      <FilterBar
        filters={filters}
        searchTerm={searchTerm}
        onSubmit={loadPlaylists}
        onSearchTermChange={handleChangeSearchTerm}
      />
      <PlaylistGrid playlists={filteredPlayslists} />
    </>
  );
}

export default Home;
