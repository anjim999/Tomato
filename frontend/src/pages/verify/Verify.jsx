import React, { useContext, useEffect, useState } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";

function Verify() {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const verifyPayment = async () => {
    try {
        console.log("Sending request to:", `${url}/api/order/verify`);
        console.log("Payload:", { orderId, success });

        const response = await axios.post(`${url}/api/order/verify`, {
            orderId,
            success: success === "true",  // Convert to boolean
        });

        console.log("Server response:", response.data);

        if (response.data.success) {
            navigate('/myorders');
        } else {
            navigate("/");
        }
    } catch (error) {
        console.error("Payment verification failed:", error.response?.data || error.message);
        navigate("/");
    }
};


    useEffect(() => {
        if (success && orderId) {
            verifyPayment();
        }
    }, [success, orderId]);

    return (
        <div className='verify'>
            {loading ? <div className="spinner"></div> : <h2>Redirecting...</h2>}
        </div>
    );
}

export default Verify;
