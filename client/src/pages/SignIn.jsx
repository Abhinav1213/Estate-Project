import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/UserSlice';
import { useSelector } from 'react-redux';
import OAuth from '../components/OAuth'


const SignIn = () => {
  const [formData, setFormData] = useState({});

  const { loading=false, error } = useSelector((state) =>  state.user);
  const navigate = useNavigate();

  const handleChange = (e) => { 
    setFormData({...formData,[e.target.id]:e.target.value});
  }
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    console.log(formData);
    axios.post('/api/auth/signin', formData)
      .then((res) => {
        if (res.data.success === false) { 
          console.log(res.data.message);
          dispatch(signInFailure(res.data.message));
          return;
        }
        console.log(res.data);
        dispatch(signInSuccess(res.data));
        navigate('/');
    }).catch((err) => { 
      console.log(err.message);
      dispatch(signInFailure(err.message));
    })
    
  }
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleChange}
            />
          </div>
          <  button 
              type="submit"
              disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {loading && <i className="fas fa-spinner fa-spin"></i>}
            Login
            </button>
            <OAuth />
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <Link to="/signup" className=' text-blue-600'>Sign Up</Link>
        </p>
        {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
          <p>{error}</p>
        </div>
        }
      </div>
    </div>
      
  </>
  )
}

export default SignIn
