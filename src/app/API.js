// const BASE_URL = `https://5j9spjlv-6000.inc1.devtunnels.ms/`
// https://api.ozelea.com/
const BASE_URL = `https://api.ozelea.com/`
const TAG = 'API.js';
const getRequest = async (endPoint, token = false) => {
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if (token) {
      headers.authorization = `${token}`;
    }
    console.log(TAG, 'getRequest() :', 'endpoint :', BASE_URL + endPoint);
    const response = await fetch(BASE_URL + endPoint, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error(
        response.statusText || (await response.text()) || 'Request failed',
      );
    }

    return response.json();
  } catch (error) {
    console.log(TAG, 'GET Request Error:', error);
    throw error;
  }
};

const postRequest = async (endPoint, data, token = false, method = 'POST') => {
  try {
    const headers = {
      Accept: 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      'Content-Type':
        data instanceof FormData ? 'multipart/form-data' : 'application/json',
    };

    if (token) {
      console.log(TAG, 'token', token);
      headers.authorization = token;
    }
    console.log(TAG, 'postRequest() :', 'endpoint :', BASE_URL + endPoint);
    console.log(TAG, 'postRequest() :', 'data :', data);
    const response = await fetch(BASE_URL + endPoint, {
      method,
      headers,
      body: data instanceof FormData ? data : JSON.stringify(data),
    });

    if (!response.ok && response.status != 500 && response.status != 400) {
      // console.log(TAG, 'POST Request Error:', await response.text());
      console.log(TAG, 'POST Request Error:', await response.text());
      throw new Error(response.statusText || 'Request failed');
    }
    // console.log(TAG, 'POST Request Success:', await response.text());
    return response.json();
  } catch (error) {
    console.log('Api.js', 'POST Request Error:', error);
    throw error;
  }
};

export const simplePostRequest = async (
  endPoint,
  data,
  token = false,
  method = 'POST',
) => {
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type':
        data instanceof FormData ? 'multipart/form-data' : 'application/json',
    };

    if (token) {
      headers.authorization = token;
    }
    console.log(
      TAG,
      'simplePostRequest() :',
      'endpoint :',
      BASE_URL + endPoint,
    );
    console.log(TAG, 'postRequest() :', 'data :', data);
    const response = await fetch(BASE_URL + endPoint, {
      method,
      headers,
      body: data instanceof FormData ? data : JSON.stringify(data),
    });

    if (!response.ok && response.status != 500 && response.status != 400) {
      print(
        `POST Request Error: ${response.status} ${response.statusText}`,
        await response.text(),
      );
      throw new Error(response.statusText || 'Request failed');
    } else if (response.status == 400 || response.status == 500) {
      return response.json();
    }

    return response.json();
  } catch (error) {
    console.log(TAG, 'POST Request Error:', error);
    throw error;
  }
};

export const deleteRequest = async (endPoint, data, token = false) => {
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if (token) {
      headers.authorization = `${token}`;
    }

    const response = await fetch(BASE_URL + endPoint, {
      method: 'DELETE',
      headers,
      body: data instanceof FormData ? data : JSON.stringify(data),
    });

    if (!response.ok) {
      const responseJSON = await response.json();
      console.log(TAG, 'DELETE Request Error:', responseJSON.message);

      throw new Error(
        responseJSON.message || response.statusText || 'Request failed',
      );
    }

    return response.json();
  } catch (error) {
    console.log(TAG, 'DELETE Request Error:', error);
    throw error;
  }
};



function print(TAG, object, props = {}) {
  console.log(TAG, JSON.stringify(object, null, 2), {...props});
}
export {getRequest, postRequest, print};