// OTPVerification.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const [otp, setOTP] = useState('');
  const navigate = useNavigate();

  const handleOTPVerification = async () => {
    try {
      // Your OTP verification logic here
      const queryParams = new URLSearchParams(location.search);
      
    
      const phone = queryParams.get('phone'); // Assuming you pass phone number as query parameter
      const expectedOTP = '123456'; // Hardcoded OTP for example
      const dial_code = '+91';

      const formData = new URLSearchParams();
        formData.append('phone', phone);
        formData.append('dial_code', dial_code);
        formData.append('otp', otp);
      
      if (otp === expectedOTP) {
        // Your API call here (using the same API endpoint as login)
        const response = await axios.post(
          'https://staging.fastor.in/v1/pwa/user/login',
          formData.toString()  ,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        // Assuming the API returns some data
        const responseData = response.data;
       

        // Save the response data to local storage
        localStorage.setItem('response', JSON.stringify(responseData));
        navigate('/RestaurantList');

        // After successful verification, you may want to navigate or perform other actions
      } else {
        alert('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error during OTP verification:', error);
      console.error('Error during OTP verification:', error);
  console.error('API response:', error.response); // Log the
    }
  };

  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">OTP Verification</h2>
      <p className="text-sm mb-4">Enter the verification code sent to your mobile number</p>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
        className="border p-2 rounded mb-4"
      />
      <button onClick={handleOTPVerification} className="bg-red-500 text-white px-14 py-2 rounded">
        Verify OTP
      </button>
    </div>
  );
};

export default OTPVerification;
