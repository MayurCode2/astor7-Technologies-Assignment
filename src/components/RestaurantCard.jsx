// RestaurantCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  const locationAddress = restaurant.location?.location_address;

  return (
    <div className="border p-4 mb-4 cursor-pointer hover:shadow-md">
      <Link to={`/restaurant/${restaurant.restaurant_id}`}>
        <h2 className="text-lg font-semibold">{restaurant.restaurant_name}</h2>
        {locationAddress && <p>Location: {locationAddress}</p>}
        <p>Cuisine: {restaurant.cuisines.map(cuisine => cuisine.cuisine_name).join(', ')}</p>
        {restaurant.images.length > 0 && (
          <img src={restaurant.images[0]?.url} alt={restaurant.restaurant_name} className="mb-2 rounded-md" />
        )}
        <p>Rating: {restaurant.rating.restaurant_avg_rating}</p>
      </Link>
    </div>
  );
};

export default RestaurantCard;
