// updateData
import axios from 'axios';
import { showAlert } from './alerts';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  const url =
    type === 'password'
      ? 'http:127.0.0.1:3000/api/v1/users/updateMyPassword'
      : 'http:127.0.0.1:3000/api/v1/users/updateMyPassword';
  try {
    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (res.data.this.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
    }
  } catch (err) {
    console.showAlert('error', err.response.data.message);
  }
};
