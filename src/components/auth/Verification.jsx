import React from 'react';
import { Link } from 'react-router-dom';

const Verification = () => (
  <>
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div
        className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
      >
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <p className="mt-6 text-center text-3xl tracking-tight text-gray-900">A verification email has been sent to your inbox. Please check it to activate your account</p>
            </div>
            <Link to="/login">
              <p className="text-center">Login here</p>

            </Link>
          </div>
        </div>

      </div>
    </div>
  </>
);

export default Verification;
