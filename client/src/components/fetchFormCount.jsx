import axios from 'axios';

export const fetchFormCount = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/get-form-count');
    if (response.data.success) {
      return response.data.count;
    }
  } catch (error) {
    console.error('Error fetching form count:', error);
    return 0; // You may want to handle errors gracefully
  }
};