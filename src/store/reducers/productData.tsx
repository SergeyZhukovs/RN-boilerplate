import * as types from "../constants/productData";
import INITIAL_STATE from "../initialState/initialState";

export default (
  state = INITIAL_STATE,
  action: {
    type: string;
    data?: [] | {};
    value?: string | number;
    name?: string;
    id?: number;
  }
) => {
  switch (action.type) {
    case types.SET_LIST_DATA:
      return { ...state, listData: action.data };
    case types.SET_WATCH_LIST_DATA:
      return { ...state, watchListData: action.data };
    case types.SET_PRODUCT_DATA:
      return { ...state, adData: action.data };
    case types.SET_FAVORITES_DATA:
      return { ...state, favoritesData: action.data };
    case types.REMOVE_FAVORITES_DATA:
      return {
        ...state,
        favoritesData: state.favoritesData.filter((element) => {
          return element.id !== action.id;
        }),
      };
    case types.SET_COUNT_NUMBER:
      return { ...state, adsCount: action.value };
    case types.SET_WATCH_LIST_COUNT_NUMBER:
      return { ...state, watchListAdsCount: action.value };
    case types.SET_SEARCH_VALUE:
      return { ...state, searchValue: action.value };
    case types.SET_ORDER:
      return { ...state, order: action.value };
    case types.SET_SELLER_DATA:
      return { ...state, sellerData: action.data };
    case types.SET_LOCATION:
      return { ...state, locations: action.data };
    case types.SET_SUB_CATEGORIES:
      return { ...state, subCategories: action.data };
    case types.SET_SAVED_FILTERS:
      return { ...state, savedFilters: action.data };
    case types.SET_LATEST_FILTERS:
      const newArray = [...state.latestFilters];

      if (action?.data?.value) {
        const index = state.latestFilters.findIndex(
          (todo) => todo.name === action?.data?.name
        ); //finding index of the item

        if (index >= 0 && newArray[index]) {
          newArray[index].value = action.data.value;
        } else {
          newArray.push(action?.data);
        }
      }

      return { ...state, latestFilters: newArray };
    case types.SET_FILTERS:
      if (state.filters[action.name].name !== undefined) {
        return {
          ...state,
          filters: {
            ...state.filters,
            [action.name]: { name: action.value, id: action.id },
          },
        };
      }
      return {
        ...state,
        filters: { ...state.filters, [action.name]: action.value },
      };
    default:
      return state;
  }
};
