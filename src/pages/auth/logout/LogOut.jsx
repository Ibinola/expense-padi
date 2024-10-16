import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../utils/firebase';
import { showToast } from '../../../utils/toast-config';

function LogOut() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('authToken');
      showToast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      showToast.error('An error occurred during logout');
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="bg-white mt-10 border rounded-2xl p-6 max-w-sm mx-auto font-codec-pro">
      <h2 className="text-xl font-bold mb-4 text-center">Log Out</h2>
      <p className="text-gray-600 mb-6">
        Are you certain you wish to log out of this session? You'll need to log
        in again afterwards.
      </p>
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleLogout}
          className="py-1 px-1 md:py-2 border w-36 text-sm rounded-md cursor-pointer bg-[#0553C7] text-white"
        >
          Log out
        </button>
        <button
          onClick={handleCancel}
          className="py-1 px-1 md:py-2 border w-36 text-sm rounded-md cursor-pointer bg-[#E9E9E9] text-[#B3B6B5]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default LogOut;
