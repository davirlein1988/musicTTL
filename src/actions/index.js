export const emailChanged = (email) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: email
  };
};

export const passwordChanged = (password) => {
  return {
    type: 'PASSWORD_CHANGED',
    payload: password
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_SPINNER'
    });
   fetch('https://musicttlmd-staging.herokuapp.com/api/v1/auth/sign_in', {
   // fetch('http://10.0.2.2:3000/api/v1/auth/sign_in', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // user: {
            email: email,
            password: password
          // }
        })
      }).then((response) => {
        console.log(response);
        if (response.status === 401) {
          console.log('AUTHENTICATION ERROR!!');
          dispatch({
            type: 'LOGIN_FAILED'
          });
        } else {
          console.log('SUCCESS!!');
          response.json().then(data => {
            //let parsed = JSON.parse(data);
            console.log(data);

            dispatch({
              type: 'LOGIN_USER_SUCCESS',
              payload: {data: data, response: response}
              // history.push("/Home")

            });
          });
        }
      });
  };
};
