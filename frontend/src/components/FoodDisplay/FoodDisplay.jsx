import React, { useContext, useState, useEffect } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import { assets } from '../../assets/assets';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (food_list.length > 0) {
            setLoading(false);
        }
    }, [food_list]);

    // Filter food items based on category and search term
    const filteredFoodList = food_list.filter(item => 
        (category === 'All' || category === item.category) && 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='food-display' id='food-display'>
            <div className='display-top'>
                <h2>Top dishes near you.</h2>
                <div className='search-container'>
                    <input 
                        type="text" 
                        className='search-input' 
                        placeholder='Search Item...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <img src={assets.search_icon} alt="Search Icon" />
                </div>
            </div>

            {/* Show spinner while loading */}
            {loading ? (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div className="food-display-list">
                    {filteredFoodList.length > 0 ? (
                        filteredFoodList.map((item, index) => (
                            <FoodItem key={index} item={item} />
                        ))
                    ) : (
                        <div className='notfound-container'>
                            <p className="not-found">No items found</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default FoodDisplay;
