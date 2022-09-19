import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useCreateUserMutation } from '../../redux/users/userSlice';

const initialState = {
  firstname: '', lastname: '', email: '', password: '',
};
const Register = () => {
  const [createUser] = useCreateUserMutation();
  const [user, setUser] = useState(initialState);
  const [value, setValue] = useState();

  const registerUser = (e) => {
    e.preventDefault();
    createUser({
      firstname: user.firstname,
      lastname: user.lastname,
      phoneNumber: value,
      email: user.email,
      password: user.password,
    });
    setUser('');
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div
          className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
        >
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Register</h2>
              </div>
              <form className="mt-8 space-y-6" onSubmit={registerUser}>
                <input type="hidden" name="remember" value="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label htmlFor="email-address" className="sr-only">First name</label>
                    <input id="email-address" name="firstname" type="text" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="First name" onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">Last name</label>
                    <input id="email-address" name="lastname" type="text" required className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Last name" onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">Phone number</label>
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={value}
                      onChange={setValue}
                      className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />

                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input id="email-address" name="email" type="email" required className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input id="password" name="password" type="password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" onChange={handleChange} />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                  </div>

                  <div className="text-sm">
                    <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                  </div>
                </div>

                <div>
                  <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Register;
