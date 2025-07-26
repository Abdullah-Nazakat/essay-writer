import axios from 'axios';

// export const baseURL =
//   'https://e278-2401-ba80-aa90-124a-970-bf2f-8895-ba6a.ngrok-free.app/api/';
// export const imageURL =
//   'https://e278-2401-ba80-aa90-124a-970-bf2f-8895-ba6a.ngrok-free.app/uploads/';
export const baseURL = 'https://api.ozelea.com/api/';
// export const baseURL = 'https://5j9spjlv-6000.inc1.devtunnels.ms/api/';
export const imageURL = 'https://api.ozelea.com/uploads/';
//jwt expired
export const simplePost = async (endpoint, data, token, contentType, passedHeaders={}) => {
  try {
    let headers = {
      'Content-Type': contentType || 'application/json',
      ...passedHeaders
    };
    if (token) {
      headers['authorization'] = `Bearer ${token}`;
    }
    const response = await axios.post(`${baseURL}${endpoint}`, data, {
      headers,
    });
    if (response.data.message == 'jwt expired') {
      if (endpoint == 'auth/refresh') {
        return globalUserSetter();
      }
      const newTokens = await simpleGet(
        'auth/refresh',
        null,
        globalUserGetter?.refresh,
      );
      console.log('newTokens', newTokens);
      if (newTokens?.status) {
        globalUserSetter({
          ...globalUserGetter,
          token: newTokens?.tokens.token,
          refresh: newTokens?.tokens?.refreshToken,
        });
        return await simplePost(
          endpoint,
          data,
          newTokens.tokens.token,
          contentType,
        );
      } else {
        return globalUserSetter();
      }
    } else {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const simpleGet = async (endpoint, token, refresh) => {
  try {
    let headers = {};
    console.log(globalUserGetter);
    if (token) {
      headers['authorization'] = `Bearer ${token}`;
    }
    if (refresh) {
      headers['refresh'] = `${refresh}`;
    }
    const response = await axios.get(`${baseURL}${endpoint}`, {
      headers,
    });
    if (response.data.message == 'jwt expired') {
      if (endpoint == 'auth/refresh') {
        return globalUserSetter();
      }
      const newTokens = await simpleGet(
        'auth/refresh',
        null,
        globalUserGetter?.refresh,
      );
      console.log('newTokens', newTokens);
      if (newTokens?.status) {
        globalUserSetter({
          ...globalUserGetter,
          token: newTokens?.tokens.token,
          refresh: newTokens?.tokens?.refreshToken,
        });
        return await simpleGet(endpoint, newTokens?.tokens?.token, refresh);
      } else {
        return globalUserSetter();
      }
    } else {
      return response.data;
    }
  } catch (error) {
    // console.warn('error: ', error);
    return null;
  }
};