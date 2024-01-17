import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  
  useEffect(() => {
    // Fetch user data from local storage
    const userData = JSON.parse(localStorage.getItem('response'));
    const refreshToken = userData.data.token;

    // Fetch restaurant data from the API using the refresh token
    axios.get('https://staging.fastor.in/v1/m/restaurant?city_id=118', {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    })
      .then(response => setRestaurants(response.data))
      .catch(error => console.error('Error fetching restaurant list:', error));
  }, []);


  
  return (
    <div>
      <h1>Restaurant List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.restaurant_id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
