import * as types from "../constants/vehicles";
import INITIAL_STATE from "../initialState/initialState";

export default (state = INITIAL_STATE, action: { type: string; data: [] }) => {
    switch (action.type) {
        case types.SET_VEHICLE_BRANDS:
            return { ...state, vehicleBrands: action.data };
        case types.SET_VEHICLE_MODEL:
            return { ...state, vehicleModel: action.data };
        default:
            return state;
    }
};
