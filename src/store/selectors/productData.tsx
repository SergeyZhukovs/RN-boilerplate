export const selectListData = ({
  productData: { listData },
}: any): [{ [key: string]: string }] => listData;

export const selectProductData = ({
  productData: { adData },
}: any): { [key: string]: string } => adData;

export const selectFavoritesData = ({
  productData: { favoritesData },
}: any): { [key: string]: string } => favoritesData;

export const selectSavedFilters = ({
  productData: { savedFilters },
}: any): { [key: string]: string } => savedFilters;

export const selectSearchValue = ({
  productData: { searchValue },
}: any): string => searchValue;

export const selectAdsCount = ({ productData: { adsCount } }: any): number =>
  adsCount;

export const selectWatchListAdsCount = ({
  productData: { watchListAdsCount },
}: any): number => watchListAdsCount;

export const selectOrder = ({ productData: { order } }: any): string => order;

export const selectSellerData = ({ productData: { sellerData } }: any): {} =>
  sellerData;

export const selectSellerProductData = ({
  productData: { sellerProductData },
}: any): {} => sellerProductData;

export const selectFiltersLoaction = ({
  productData: {
    filters: {
      city: { id },
    },
  },
}: any): number => id;

export const selectFiltersCategories = ({
  productData: {
    filters: {
      sub_category: { id },
    },
  },
}: any): number => id;

export const selectWatchListData = ({
  productData: { watchListData },
}: any): [{ [key: string]: string }] => watchListData;

export const selectCities = ({ productData: { locations } }: any): [] =>
  locations;

export const selectSubCategories = ({
  productData: { subCategories },
}: any): [] => subCategories;

export const selectFilters = ({ productData: { filters } }: any): {} => filters;

export const selectLatestFilters = ({
  productData: { latestFilters },
}: any): [] => latestFilters;

export const selectCategoryId = ({
  productData: {
    filters: { category_id },
  },
}: any): number => category_id;

export const selectVehicleModel = ({
  productData: {
    filters: {
      vehicle_model: { id },
    },
  },
}: any): number => id;

export const selectVehicleBrand = ({
  productData: {
    filters: {
      vehicle_brand: { id },
    },
  },
}: any): number => id;

export const selectVehicleFuel = ({
  productData: {
    filters: { vehicle_fuel },
  },
}: any): string => vehicle_fuel;

export const selectVehicleGearBox = ({
  productData: {
    filters: { vehicle_gearbox },
  },
}: any): string => vehicle_gearbox;

export const selectAccommodationAreaMin = ({
  productData: {
    filters: { accommodation_square_meter_min },
  },
}: any): string | number => accommodation_square_meter_min;

export const selectAccommodationAreaMax = ({
  productData: {
    filters: { accommodation_square_meter_max },
  },
}: any): string | number => accommodation_square_meter_max;

export const selectAccommodationBedroomMin = ({
  productData: {
    filters: { accommodation_bedrooms_min },
  },
}: any): string | number => accommodation_bedrooms_min;

export const selectAccommodationBedroomMax = ({
  productData: {
    filters: { accommodation_square_meter_max },
  },
}: any): string | number => accommodation_square_meter_max;

export const selectAccommodationSaleRent = ({
  productData: {
    filters: { accommodation_sale_rent },
  },
}: any): string => accommodation_sale_rent;

export const selectAccommodationType = ({
  productData: {
    filters: { accommodation_type },
  },
}: any): string => accommodation_type;