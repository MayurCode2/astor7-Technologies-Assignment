import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const userData = JSON.parse(localStorage.getItem('response'));
  const refreshToken = userData.data.token;

  useEffect(() => {
    // Fetch restaurant details based on restaurantId
    axios.get(`https://staging.fastor.in/v1/m/restaurant/${id}`, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    })
      .then(response => setRestaurant(response.data))
      .catch(error => console.error('Error fetching restaurant details:', error));
  }, [id, refreshToken]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{restaurant.restaurant_name}</h1>
      <p>Location: {restaurant.location.location_address}</p>
      <p>Cuisine: {restaurant.cuisines.map(cuisine => cuisine.cuisine_name).join(', ')}</p>
      <img src={restaurant.images[0]?.url} alt={restaurant.restaurant_name} className="mb-2 rounded-md" />
      <p>Rating: {restaurant.rating.restaurant_avg_rating}</p>
      {/* Display other restaurant details */}
    </div>
  );
};

export default RestaurantDetail;
