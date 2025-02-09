import { useState, useEffect, useContext } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

function MyOrders() {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(
                `${url}/api/order/userorders`, 
                {}, 
                { headers: { token } }
            );

            console.log("Response Data:", response.data.data); // Debugging

            if (response.data.success) {
                // Remove duplicates based on `_id`
                const uniqueOrders = response.data.data.filter((order, index, self) =>
                    index === self.findIndex((o) => o._id === order._id)
                );
                setData(uniqueOrders);
            } else {
                console.error("Error:", response.data.message);
            }
        } catch (error) {
            console.error("Fetch Orders Error:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]); // Runs only when `token` changes

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {data.length > 0 ? (
                    data.map((order) => (
                        <div key={order._id} className="my-orders-order">
                            <img src={assets.parcel_icon} alt="Parcel Icon" />
                            <p>
                                {order.items.map((item, index) => 
                                    `${item.name} x ${item.quantity}${index !== order.items.length - 1 ? ", " : ""}`
                                )}
                            </p>
                            <p>${order.amount}.00</p>
                            <p>Items: {order.items.length}</p>
                            <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                            <button onClick={fetchOrders}>Track Order</button>
                        </div>
                    ))
                ) : (
                    <p>No orders found</p>
                )}
            </div>
        </div>
    );
}

export default MyOrders;
