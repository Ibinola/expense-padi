import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../../components/CustomButton';

function LogOut() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    // Implement your logout logic here
    console.log('Logging out...');
    navigate('/login');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="bg-white mt-10 border rounded-2xl p-6 max-w-sm mx-auto font-codec-pro">
      <h2 className="text-xl font-bold mb-4  text-center">Log Out</h2>
      <p className="text-gray-600 mb-6">
        Are you certain you wish to log out of this session? You'll need to log
        in again afterwards.
      </p>
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleLogOut}
          className=" py-1 px-1 md:py-2 border w-36 text-sm rounded-md cursor-pointer bg-[#0553C7] text-white"
        >
          Log out
        </button>

        <button
          onClick={handleCancel}
          className=" py-1 px-1 md:py-2 border w-36 text-sm rounded-md cursor-pointer bg-[#E9E9E9] text-[#B3B6B5]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default LogOut;
