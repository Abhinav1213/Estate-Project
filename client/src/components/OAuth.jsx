import {  getAuth, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase';
import axios from 'axios';
import { signInSuccess, signInFailure } from '../redux/user/UserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            const Provider = new GoogleAuthProvider();
            const auth = getAuth(app)
            
            const result = await signInWithPopup(auth, Provider);
            // console.log(result)
            const user = {
                email: result.user.email,
                username: result.user.displayName,
                photoUrl: result.user.photoURL
            }
            axios.post('/api/auth/google', user )
                .then((res)=> {
                    console.log(res.data);
                    dispatch(signInSuccess(res.data));
                    navigate('/');
                })
                .catch((error) => {
                    dispatch(signInFailure(error.message));
                    console.log("Error with Google OAuth", error);
                })
        }
        catch (error) {
            console.log("Error with Google OAuth", error);
        }
     }

  return (
    <button onClick={handleGoogleClick}  type='button' className='w-full bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-90 my-2'>Continue with Google</button>
  )
}

export default OAuth
