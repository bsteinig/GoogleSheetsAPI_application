import React from 'react'
import {GoogleLogin} from 'react-google-login';

const clientId = '564893688827-083ol0fcip1gmf2b9qm43pt1dab4dq58.apps.googleusercontent.com';

function Login() {

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    }

    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);
    };

    return(
        <div> 
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop: '100px'}}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;