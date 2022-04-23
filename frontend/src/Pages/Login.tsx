import * as React from 'react';
import "../Assets/styles/Login.css"
import InputUnstyled from '@mui/base/InputUnstyled';


export default function Login() {
    return (
        <div className='susususususu'>
            <div className='picture'>

            </div>
            <div className='loginPage'>
                <div className='title'>
                    <span style={{ fontFamily:'SpoqaBold' }}>DORIGI</span>
                    <span style={{ fontFamily:'SpoqaThin' , marginLeft:"10px" }}>Sign In</span>
                </div>
                <div className='login_form'>
                    <form>
                        <InputUnstyled />
                    </form>
                </div>
            </div>
        </div>
    );
}
