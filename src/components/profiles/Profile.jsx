import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUserQuery, useCreateProfileMutation } from '../../redux/users/userSlice';

const initialState = {
  title: '', food: '', location: '', hobby: '',
};

const Profile = () => {
  const {
    data: user, isLoading, isSuccess, isError, error,
  } = useGetUserQuery();

  const [addProfile] = useCreateProfileMutation();
  const [item, setItem] = useState(initialState);
  const [image, setImage] = useState(null);
  const [publish, setPubish] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', item.title);
      formData.append('food', item.food);
      formData.append('location', item.location);
      formData.append('public', publish);
      formData.append('image', image);
      formData.append('hobby', item.hobby);
      formData.append('user', user.id);

      console.log(formData);
      addProfile(formData);
      navigate('/');
      setItem('');
    } catch (err) {
      Error(err.message);
    }
  };

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const togglePublish = () => {
    setPubish((current) => !current);
  };

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = user;
  } else if (isError) {
    <p>{error}</p>;
      <p>{content}</p>;
  }

  return (
    <>
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div
          className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
        >
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Complete your profile</h2>
              </div>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label htmlFor="title" className="sr-only">Profession</label>
                    <input id="title" name="title" type="text" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Job title" onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="food" className="sr-only">Favorite food</label>
                    <input id="food" name="food" type="text" required className="relative mt-3 block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Favorite food" onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="location" className="sr-only">Location</label>
                    <input id="location" name="location" type="text" required className="relative block mt-3 w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Location" onChange={handleChange} />
                  </div>

                  <div>
                    <label htmlFor="hobby" className="sr-only">Hobby</label>
                    <input id="hobby" name="hobby" type="text" required className="relative block mt-3 w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Hobby" onChange={handleChange} />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="images" className="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
                    <input type="file" accept="image/*" id="images" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Profile picture" onChange={(e) => setImage(e.target.files[0])} required />
                  </div>

                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input id="public" name="public" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" onChange={togglePublish} />
                    <label htmlFor="public" className="ml-2 block text-sm text-gray-900">Publish</label>
                  </div>
                </div>

                <div>
                  <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Create Profile
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
export default Profile;
