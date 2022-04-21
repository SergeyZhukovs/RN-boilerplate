import * as types from "../constants/vehicles";
import Api from "../../services/Instance";
import { fetchVehicleBrandList, fetchVehicleModelList } from "../../services";
import { setMessage, setStatus, setVisibility } from "./modalStatus";

export const setVehicleBrands = (data: any) => ({
  type: types.SET_VEHICLE_BRANDS,
  data,
});

export const getVehicleBrands = () => {
  return async (dispatch) => {
    try {
      const { data } = await fetchVehicleBrandList();
      if (data.status === "ok") {
        dispatch(setVehicleBrands(data.data));
      } else {
        dispatch(setStatus(data.status));
        dispatch(setMessage(data.message));
        dispatch(setVisibility(true));
      }
    } catch (e) {
      console.log(e, "Vehicle branch error");
    }
  };
};

export const setVehicleModel = (data: any) => ({
  type: types.SET_VEHICLE_MODEL,
  data,
});

export const getVehicleModel = (pickedVehicleBrandId: number) => {
  return async (dispatch) => {
    try {
      const { data } = await fetchVehicleModelList(pickedVehicleBrandId);
      if (data.status === "ok") {
        dispatch(setVehicleModel(data.data));
      } else {
        dispatch(setStatus(data.status));
        dispatch(setMessage(data.message));
      }
    } catch (e) {
      console.log(e, "Vehicle model error");
    }
  };
};
