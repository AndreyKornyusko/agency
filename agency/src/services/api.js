import axios from 'axios';

const getUsers = baseURL => {
  return fetch(baseURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('data', data);
      if (data.success) return data;
    })
    .catch(error => {
      // catch обрабатывает возможную ошибку запроса
      console.error('Error: ', error);
    });
};

const getUserById = id => {
  return fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users/${id}`,
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(userData) {
      if (userData.success) return userData;
    })
    .catch(error => {
      console.error('Error: ', error);
    });
};

const getToken = () => {
  return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(function(response) {
      return response.json();
    })
    .then(function(dataToken) {
      // console.log('dataToken', dataToken);
      return dataToken.token;
    })
    .catch(function(error) {
      console.error('Error: ', error);
    });
};

const getPositions = () => {
  return fetch(
    'https://frontend-test-assignment-api.abz.agency/api/v1/positions',
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('positions', data);
      return data;
    });
};

const PostUser = (position_id, name, email, phone, photo, token) => {
  const formData = new FormData();
  formData.append('position_id', Number(position_id));
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('photo', photo);

  // var fileField = document.querySelector('input[type="file"]');
  // formData.append('position_id', 3);
  // formData.append('name', 'Iron Man');
  // formData.append('email', 'Hron@gmail.com');
  // formData.append('phone', '+380955388486');
  // formData.append('photo', fileField.files[0]);
  

  console.log('formData', formData)

  return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    method: 'POST',
    body: formData,
    headers: {
      Token: token,
    },
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(postData) {
      console.log('postData', postData);
      if (postData.success) {
        // process success response
      } else {
        // proccess server errors
      }
    })
    .catch(function(error) {
      // proccess network errors
    });
};

axios.defaults.baseURL = 'http://localhost:3000';
// 'https://frontend-test-assignment-api.abz.agency/api/v1';
// const getAllUsers = () =>
//   axios.get('/users?page=1&count=6').then(response => {
//     response.data;
//   });

const getAllMenuItems = () =>
  axios.get('/menu').then(response => response.data);

const getMenuItemById = id =>
  axios.get(`/menu/${id}`).then(response => response.data);

const deleteMenuItem = id =>
  axios.delete(`/menu/${id}`).then(response => response.status === 200);

const addMenuItem = item =>
  axios.post('/menu', item).then(response => response.data);

export {
  getUsers,
  getUserById,
  getPositions,
  getToken,
  PostUser,
  getAllMenuItems,
  getMenuItemById,
  deleteMenuItem,
  addMenuItem,
};
