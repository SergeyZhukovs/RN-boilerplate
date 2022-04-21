export const selectVehicleBrand = ({ vehicles: { vehicleBrands } }: any): [] =>
  vehicleBrands;

export const selectVehicleModel = ({ vehicles: { vehicleModel } }: any): [] =>
  vehicleModel;

export const selectCreatedAdData = ({ createdAd }: any): [] => createdAd;

export const selectVehicle = ({
  createdAd: {
    createFormData: { createdVehicleBrand },
  },
}: any): string => createdVehicleBrand;

export const selectModel = ({
  createdAd: {
    createFormData: { createdModel },
  },
}: any): string => createdModel;

export const selectModelFuel = ({
  createdAd: {
    createFormData: { createdModelFuel },
  },
}: any): string => createdModelFuel;

export const selectModelGearbox = ({
  createdAd: {
    createFormData: { createdModelGearbox },
  },
}: any): string => createdModelGearbox;

export const selectAccommodationArea = ({
  createdAd: {
    createFormData: { createdAccommodationArea },
  },
}: any): string => createdAccommodationArea;

export const selectAccommodationBedrooms = ({
  createdAd: {
    createFormData: { createdAccommodationBedrooms },
  },
}: any): string => createdAccommodationBedrooms;

export const selectAccommodationSaleRent = ({
  createdAd: {
    createFormData: { createdAccommodationSaleRent },
  },
}: any): string => createdAccommodationSaleRent;

export const selectAccommodationType = ({
  createdAd: {
    createFormData: { createdAccommodationType },
  },
}: any): string => createdAccommodationType;
