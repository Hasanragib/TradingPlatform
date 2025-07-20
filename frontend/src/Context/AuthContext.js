
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null); // To store user data if needed
    const [authLoading, setAuthLoading] = useState(true); // <--- ADDED: State to track initial authentication check loading

    // Function to check login status (e.g., by validating a token/session on the backend)
    // This is crucial for when the user revisits the page or refreshes
    const checkLoginStatus = async () => {
        try {
                // Your backend should have an endpoint to verify authentication status
                // For example, it might return user data if logged in, or an error if not.
            const { data } = await axios.get("http://localhost:3002/verify-user", {
                withCredentials: true    // Important for sending cookies/session
            });
            if (data.success) {
                setIsLoggedIn(true);
                setUser(data.user); // Assuming your backend sends user data
            } else {
                setIsLoggedIn(false);
                setUser(null);
            }
        } catch (error) {
            console.error("Error checking login status:", error);
            setIsLoggedIn(false);
            setUser(null);
        } finally {
            setAuthLoading(false); // <--- Set loading false after check completes (success or failure)
        }
    };

    // Check login status on component mount
    useEffect(() => {
        checkLoginStatus();
    }, []);

    // Function to handle login
    const login = async (email, password) => { // Accept credentials as arguments
        try {
            const response = await axios.post(
                "http://localhost:3002/login",
                { email, password },
                { withCredentials: true }
            );

            if (response.data.success) {
                setIsLoggedIn(true);
                setUser(response.data.user);
                return { success: true, user: response.data.user }; // Return success status
            } else {
                // Backend sent success: false but no error status
                setIsLoggedIn(false);
                setUser(null);
                return { success: false, message: response.data.message || "Login failed" };
            }
        } catch (error) {
            console.error("Login API error:", error);
            setIsLoggedIn(false);
            setUser(null);
            // Return error details for the Login page to display
            return {
                success: false,
                message: error.response?.data?.message || "Network error or unexpected login failure"
            };
        }
    };

    // Function to handle logout
    const logout = async () => {
        try {
            await axios.post("http://localhost:3002/logout", {}, { // Assuming a logout endpoint
                withCredentials: true
            });
            setIsLoggedIn(false);
            setUser(null);
            // Optionally, clear any local storage items related to authentication
        } catch (error) {
            console.error("Error during logout:", error);
            // Even if logout fails on backend, we can still update frontend state
            setIsLoggedIn(false);
            setUser(null);
        }
    };

    // <--- ADDED: Conditional rendering based on authLoading ---
    if (authLoading) {
        return <div>Loading authentication status...</div>; // You can put a spinner here
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout, checkLoginStatus }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to easily use the auth context
export const useAuth = () => {
    return useContext(AuthContext);
};