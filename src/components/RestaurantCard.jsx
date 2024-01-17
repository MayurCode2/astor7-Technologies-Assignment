import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  // Check if location is present and has the location_address property
  const locationAddress = restaurant.location && restaurant.location.location_address;

  return (
    <div className="border p-4 mb-4 cursor-pointer hover:shadow-md">
      <h2 className="text-lg font-semibold">{restaurant.restaurant_name}</h2>
      
      {/* Check if location_address is available before displaying */}
      {locationAddress && <p>Location: {locationAddress}</p>}
      
      <p>Cuisine: {restaurant.cuisines.map(cuisine => cuisine.cuisine_name).join(', ')}</p>
      
      {/* Check if images array is not empty before accessing the first image */}
      {restaurant.images.length > 0 && (
        <img src={restaurant.images[0]?.url} alt={restaurant.restaurant_name} className="mb-2 rounded-md" />
      )}
      
      <p>Rating: {restaurant.rating.restaurant_avg_rating}</p>
    </div>
  );
};

export default RestaurantCard;
