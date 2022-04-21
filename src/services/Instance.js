import axios from 'axios';
window.btoa = require('Base64').btoa;
import {API_URL} from '@constants'
import AsyncStorage from '@react-native-community/async-storage';
import store from "@store/store";
import { setToken, setloginMethod } from "@store/actions/logIn";
import {navigate} from './RootNav';

const axiosInstance = axios.create({
  baseURL: API_URL,
  auth: {
    username: 'awave',
    password: 'awave',
  },
  headers: {
    'access-control-allow-origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = JSON.parse(await AsyncStorage.getItem('auth'));

  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  (error, status) => {
    switch (error.response.status) {
      case 400:
        console.log(
          `Error(${error.response.status}): ${
            error.response.data.message || 'Bad request'
          }`,
        );
        break;

      case 401: // authentication error, logout the user
        console.log(
          `Authentication error (${error.response.status}); ${
            error.response.data.message || 'Unauthorized'
          }`,
        );
        store.dispatch(setToken(null));
        dispatch(setloginMethod(false));
        AsyncStorage.removeItem('user_token');
        navigate("RegisterPage");

        // store.dispatch({type: action.LOGGED_OUT});
        // NavigationService.navigate('LoginScreen');
        break;

      default:
        console.log(
          `Error (${error.response.status}): ${
            error.response.data.message || 'Something went wrong'
          }`,
        );
    }

    console.log(error);
    return Promise.reject(error);
  },
);

export default axiosInstance;
