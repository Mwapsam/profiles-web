/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetProfileDetailQuery } from '../../redux/users/userSlice';
import Header from '../home/Header';
import Edit from '../profiles/Edit';

const New = ({ content }) => {
  const {
    data: profile, isLoading, isSuccess, isError, error,
  } = useGetProfileDetailQuery();

  const navigate = useNavigate();

  return (
    <>
      <Header />
      {profile ? (
        <div className="flex items-center p-6 bg-gray-50 dark:bg-gray-900">
          <div
            className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
          >
            <div
              className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 shadow-md focus:outline-none focus:shadow-outline-purple"
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                {isSuccess
              && (
              <Edit
                title={profile.title}
                hobby={profile.hobby}
                food={profile.food}
                location={profile.location}
                image={profile.image}
                publish={profile.public}
                user={content.id}
              />
              )}

              </div>
              <span>Delete Profile</span>
            </div>
            {isLoading && <p>Loading...</p>}
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              {isSuccess && (
              <div className="w-screen h-full bg-white flex flex-row flex-wrap p-3">
                <div className="mx-auto w-2/3">

                  <div className="rounded-lg shadow-lg bg-gray-600 w-full h-64 flex flex-row flex-wrap p-3 antialiased">
                    <div className="md:w-1/3 w-full">
                      <img className="rounded-lg shadow-lg antialiased" src={`${process.env.REACT_APP_SERVER}${profile.image}`} alt="icon" />
                    </div>
                    <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
                      <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
                        <div className="text-2xl text-white leading-tight">
                          <p>{content.firstname}</p>
                          <p>{content.lastname}</p>
                        </div>
                        <div className="text-normal text-gray-300 hover:text-gray-400 cursor-pointer"><span className="border-b border-dashed border-gray-500 pb-1">{profile.title}</span></div>
                        <div className="text-normal text-gray-300 hover:text-gray-400 cursor-pointer pt-3"><p className="text-sm">{content.email}</p></div>
                        <div className="text-normal text-gray-300 hover:text-gray-400 cursor-pointer pt-3"><p className="text-sm">{content.phoneNumber}</p></div>

                        <div className="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">
                          Favorite Food:
                          {' '}
                          <b>{profile.food}</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )}
            </div>
            {isError && <p>{error}</p>}
          </div>
        </div>
      ) : navigate('/profile')}
    </>
  );
};

export default New;
