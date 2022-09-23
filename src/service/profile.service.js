import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteProfile = createAsyncThunk(
  'profile/deleteProfile',
  async ({ id, token }) => {
    axios.delete(`${process.env.REACT_APP_SERVER}/api/delete/${id}`, {
      headers: { Authorization: token },
    });
    return id;
  },
);

export const createProfile = createAsyncThunk(
  'profile/createProfile',
  async (profile) => {
    const createData = await axios.post(`${process.env.REACT_APP_SERVER}/api/create`, profile);
    const res = await createData.data;
    return res;
  },
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async ({ id, token, status }) => {
    const profile = { reserved: !status };
    const response = await axios.put(`${process.env.REACT_APP_SERVER}/${id}`, profile, {
      headers: { Authorization: token },
    });
    const res = await response.data;
    return res;
  },
);
