import { ReduxAction } from 'interfaces/reduxAction';
import { Filter } from 'interfaces/filter';
import { Dispatch } from 'redux';
import { FILTER_FIELD_ENDPOINT } from 'constants/environment';

export enum FilterActionTypes {
  FETCH_FILTERS = 'FILTERS/FETCH_FILTERS',
  FETCH_FILTERS_SUCCESS = 'FILTERS/FETCH_FILTERS_SUCCESS',
}

export interface FilterState {
  filters: Filter[];
  loading: boolean;
}

const initialState = {
  filters: [],
  loading: false,
};

function reducer(state: FilterState = initialState, action: ReduxAction<FilterActionTypes>) {
  switch (action.type) {
    case FilterActionTypes.FETCH_FILTERS:
      return { ...state, loading: true };
    case FilterActionTypes.FETCH_FILTERS_SUCCESS:
      return { ...state, loading: false, filters: action.payload };
    default:
      return state;
  }
}

export default reducer;

export const actionFetchFilters = () => ({
  type: FilterActionTypes.FETCH_FILTERS,
});

export const actionFetchFiltersSuccess = (filters: Filter[]) => ({
  type: FilterActionTypes.FETCH_FILTERS_SUCCESS,
  payload: filters,
});

export const fetchFilters = () => async (dispatch: Dispatch) => {
  const data = await fetch(FILTER_FIELD_ENDPOINT)
    .then((response) => response.json());

  dispatch(actionFetchFiltersSuccess(data.filters));
};
