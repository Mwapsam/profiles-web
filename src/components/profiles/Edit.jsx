/* eslint-disable react/prop-types */
import React from 'react';
import Cookies from 'js-cookie';
import { useUpdateProfileMutation } from '../../redux/users/userSlice';

export default function Edit({
  title, food, location, image, publish, hobby,
}) {
  const initialState = {
    title, food, location, image, publish, hobby,
  };
  const [showModal, setShowModal] = React.useState(false);
  const [changes, setChanges] = React.useState(initialState);
  const [pub, setPub] = React.useState(initialState.publish);
  const [images, setImages] = React.useState(initialState.image);
  const [updateProfile] = useUpdateProfileMutation();

  const user = Cookies.get('users');
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', changes.title);
    formData.append('food', changes.food);
    formData.append('location', changes.location);
    formData.append('image', images);
    formData.append('public', pub);
    formData.append('user', user);
    formData.append('hobby', changes.hobby);

    updateProfile({ user, formData });
  };

  const handleChange = (e) => {
    setChanges({ ...changes, [e.target.name]: e.target.value });
  };

  const togglePublish = () => {
    setPub((current) => !current);
  };

  return (
    <>
      <button
        className="text-purple-100 bg-purple-600 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit profile
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Edit Your Profile
                  </h3>
                  <button
                    type="submit"
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* body */}
                <div className="relative p-6 flex-auto">
                  <form className="mt-8 space-y-6" onSubmit={handleUpdate}>
                    <div className="-space-y-px rounded-md shadow-sm">
                      <div>
                        <label htmlFor="title" className="sr-only">Profession</label>
                        <input id="title" name="title" value={changes.title} type="text" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Job title" onChange={handleChange} />
                      </div>
                      <div>
                        <label htmlFor="food" className="sr-only">Favorite food</label>
                        <input id="food" name="food" value={changes.food} type="text" required className="relative mt-3 block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Favorite food" onChange={handleChange} />
                      </div>
                      <div>
                        <label htmlFor="location" className="sr-only">Location</label>
                        <input id="location" name="location" value={changes.location} type="text" required className="relative block mt-3 w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Location" onChange={handleChange} />
                      </div>

                      <div>
                        <label htmlFor="hobby" className="sr-only">Hobby</label>
                        <input id="hobby" name="hobby" type="text" value={changes.hobby} required className="relative block mt-3 w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Hobby" onChange={handleChange} />
                      </div>

                      <div className="mb-6">
                        <label htmlFor="image" className="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
                        <input type="file" accept="image/*" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Profile picture" onChange={(e) => setImages(e.target.files[0])} />
                      </div>

                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input id="public" value={pub} name="public" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" onChange={togglePublish} />
                        <label htmlFor="public" className="ml-2 block text-sm text-gray-900">Unpublish</label>
                      </div>
                    </div>

                    <div>
                      <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Save changes
                      </button>
                    </div>
                  </form>
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  );
}
