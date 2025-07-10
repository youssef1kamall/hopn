import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AutheriseContext';
import { X, Mail, Lock } from 'lucide-react';


const LoginModel = ( {onClose}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [data, setData] = useState({
     name: '',
     email: '',
     password:''
  })
 const { signIn, signUp } = useAuth();

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    if (isLogin) {
      await signIn({ email: data.email, password: data.password });
      onClose(); // close modal after login
    } else {
      await signUp({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      alert('Account created! Please log in.');
      setIsLogin(true); // switch to login screen
      // don't close modal or auto-login
    }
  } catch (error) {
    console.error('Authentication error:', error.message || error);
    alert(error.message || 'Something went wrong');
  }
};

 const handleChange = (e) => {
  setData({
    ...data,
    [e.target.name]: e.target.value
  });
 }

  return (
    <div className="fixed inset-0 bg-white/20 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className='bg-white rounded-lg shadow-lg p-4 w-full max-w-md'>
        <div className='flex item-center justify-between p-4 border-b border-gray-200'>
          <h2 className='text-2xl text-gray-900 font-bold'>
             {isLogin ? 'Join FitPass' : 'Wellcome Fitpass'}
         </h2>
         <button 
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700 hover:cursor-pointer transition-colors'>
           <X className="h-5 w-5 "/>
         </button>
        </div>

        <form onSubmit={handleSubmit} className='p-6 space-y-4'>
          {!isLogin && (
            <div>
              <label>Full Name:</label>
              <div className='relative'>
                <input 
                  type='text' 
                  name='name' 
                  value={data.name} 
                  onChange={handleChange} 
                  className='w-full px-4  py-2 border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-emerald-500'
                  placeholder='Enter your full name'
                  required
                />
              </div>
            </div>
          )}
          <div>
            <label className='mb-2 font-medium text-sm text-black block'>Email Address:</label>
            <div className='relative'>
               <Mail className='absolute left-3 top-1/2 h-5 w-5 transform -translate-y-1/2 text-gray-400' />
              <input 
                type='email' 
                name='email' 
                value={data.email} 
                onChange={handleChange} 
                className='w-full pl-10 pr-4 py-2  border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-emerald-500'
                placeholder='Enter your email'
                required
              />
            </div>
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium'>Password:</label>
            <div className='relative'>
              <Lock className='absolute left-3 top-1/2 h-5 w-5 transform -translate-y-1/2 text-gray-400' />
              <input 
                type='password' 
                name='password' 
                value={data.password} 
                onChange={handleChange} 
                className='w-full pl-10 py-2 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-emerald-500'
                placeholder='Enter your password'
                required
              />
            </div>
        </div>
          <button type='submit'
           className='block w-full bg-emerald-600 text-white py-2 px-4 rounded-lg 
           font-medium hover:bg-emerald-700 transition-colors'>
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
         <div className="px-6 pb-6">
          <p className="text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginModel