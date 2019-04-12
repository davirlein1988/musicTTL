
export const logoutUser = ({access_token, uid, client }) => {
    return (dispatch) => {
      dispatch({
        type: 'LOAD_SPINNER'
      });
      fetch('https://musicttlmd-staging.herokuapp.com/api/v1/auth/sign_out.json', {
       // fetch('http://10.0.2.2:3000/api/v1/auth/sign_out.json', {
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              uid: uid,
              'access-token': access_token,
              client: client
            },
            body: JSON.stringify({
                uid: uid,
                'access-token': access_token
  
             })
          }).then((response) => {
            response.json().then(data => {
              dispatch({
                type: 'LOG_OUT_USER',
                payload: data
              })
            })
          }).catch((error)=> {
            console.log(error)
          })
        }
  };
  