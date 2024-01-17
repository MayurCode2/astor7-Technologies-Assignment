import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Prepare data in x-www-form-urlencoded format
      const formData = new URLSearchParams();
      formData.append('phone', mobileNumber);
      formData.append('dial_code', '+91');

      // Call the login API with x-www-form-urlencoded data
      const response = await axios.post(
        'https://staging.fastor.in/v1/pwa/user/register',
        formData.toString(), // Convert the data to a string
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      // Check if the API response indicates success
      if (response.data.status === 'Success') {
        // Navigate to OTP verification screen with mobile number as query parameter
        navigate(`/OTPVerification?phone=${mobileNumber}`);
      } else {
        // Handle other cases
        console.error('Login unsuccessful:', response.data.error_message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg">Enter your mobile number</p>
      <p className="text-sm mb-4">We will be sending you the four-digit verification code</p>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-4"
      />
      <button onClick={handleLogin} className="bg-red-400 text-white px-14 py-2 rounded">
        Send Code
      </button>
    </div>
  );
};

export default Login;
