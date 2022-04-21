import * as types from "../constants/productData";
import { fetchListData } from "@services";
import { setMessage, setStatus, setVisibility } from "./modalStatus";

export const setListData = (data: []) => ({
  type: types.SET_LIST_DATA,
  data,
});

export const setWatchListData = (data: []) => ({
  type: types.SET_WATCH_LIST_DATA,
  data,
});

export const setProductData = (data: {}) => ({
  type: types.SET_PRODUCT_DATA,
  data,
});

export const setFavoritesData = (data: {}) => ({
  type: types.SET_FAVORITES_DATA,
  data,
});

export const removeFavoritesData = (id: number) => ({
  type: types.REMOVE_FAVORITES_DATA,
  id,
});

export const setSearchValue = (value: string) => ({
  type: types.SET_SEARCH_VALUE,
  value,
});

export const setCountNumber = (value: Number) => ({
  type: types.SET_COUNT_NUMBER,
  value,
});

export const setWatchListCountNumber = (value: Number) => ({
  type: types.SET_WATCH_LIST_COUNT_NUMBER,
  value,
});

export const setOrder = (value: Number) => ({
  type: types.SET_ORDER,
  value,
});

export const setSellerData = (data: {}) => ({
  type: types.SET_SELLER_DATA,
  data,
});

export const setLocation = (data: []) => ({
  type: types.SET_LOCATION,
  data,
});

export const setSubCategories = (data: []) => ({
  type: types.SET_SUB_CATEGORIES,
  data,
});

export const setLatestFilters = (data: {}) => ({
  type: types.SET_LATEST_FILTERS,
  data,
});

export const setSavedFilters = (data: {}) => ({
  type: types.SET_SAVED_FILTERS,
  data,
});

export const setFilters = (
  name: string,
  value: string,
  id: number | null | string
) => ({
  type: types.SET_FILTERS,
  name,
  value,
  id,
});

export const getListData = (
  category_id: number | string,
  locationId: number,
  subCategoryId: number,
  priceMin: number,
  priceMax: number,
  vehicleBrand: number,
  vehicleModel: number,
  vehicleMileageMin: number,
  vehicleMileageMax: number,
  vehicleYearMin: number,
  vehicleYearMax: number,
  vehicleFuel: string,
  vehicleGearbox: string,
  accommodationAreaMin: string | number,
  accommodationAreaMax: string | number,
  accommodationBedroomMin: string | number,
  accommodationBedroomMax: string | number,
  accommodationSaleRent: string,
  accommodationType: string,
  searchValue: string | undefined,
  order: string | undefined,
  succeesCallBack?: () => void
) => {
  return async (dispatch) => {
    try {
      const { data } = await fetchListData(
        category_id,
        locationId,
        subCategoryId,
        priceMin,
        priceMax,
        vehicleBrand,
        vehicleModel,
        vehicleMileageMin,
        vehicleMileageMax,
        vehicleYearMin,
        vehicleYearMax,
        vehicleFuel,
        vehicleGearbox,
        accommodationAreaMin,
        accommodationAreaMax,
        accommodationBedroomMin,
        accommodationBedroomMax,
        accommodationSaleRent,
        accommodationType,
        searchValue,
        order
      );

      if (data.status === "ok") {
        dispatch(setListData(data.ads));
        dispatch(setCountNumber(data.ads_count));
        succeesCallBack && succeesCallBack();
      } else {
        dispatch(setStatus(data.status));
        dispatch(setMessage(data.message));
        dispatch(setVisibility(true));
      }
    } catch (e) {
      console.log(e?.response, "error");
    }
  };
};
