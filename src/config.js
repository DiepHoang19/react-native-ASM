import AsyncStorage from "@react-native-async-storage/async-storage";

export const BASE_URL = 'https://tiktok-are.herokuapp.com';
export const AUTH = AsyncStorage.getItem("accountUsername");
export const AUTH_LOGGER = AsyncStorage.getItem("accessToken") 
