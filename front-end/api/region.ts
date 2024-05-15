import axios from "axios";

const API_KEY = "9adbe8e5-d6d1-5ee1-d8c1-378eb41d";

export const getProvince = async () => {
  try {
    const response = await axios.get(
      `https://api.goapi.io/regional/provinsi?api_key=${API_KEY}`
    );

    if (!response.data) {
      throw new Error("No data found");
    }

    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getRegency = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api.goapi.io/regional/kota?provinsi_id=${id}&api_key=${API_KEY}`
    );

    if (!response.data || !response.data.data) {
      throw new Error("No data found");
    }

    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getSubDistrict = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api.goapi.io/regional/kecamatan?kota_id=${id}&api_key=${API_KEY}`
    );

    if (!response.data || !response.data.data) {
      throw new Error("No data found");
    }

    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getDistrict = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api.goapi.io/regional/kelurahan?kecamatan_id=${id}&api_key=${API_KEY}`
    );

    if (!response.data || !response.data.data) {
      throw new Error("No data found");
    }

    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
