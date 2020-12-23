import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '564893688827-083ol0fcip1gmf2b9qm43pt1dab4dq58.apps.googleusercontent.com';

function Logout() {

    const onSuccess = () => {
        alert('Successfully Logged Out');
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;