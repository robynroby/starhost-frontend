import { createContext, useContext, useState, useEffect } from "react";
import { apiClient } from "../api/ApiClient";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);
    const [token, setToken] = useState(null);
    const [userDetails, setUserDetails] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await executeJwtAuthenticationService(email, password);
    
            if (response.status === 200) {
                const jwtToken = 'Bearer ' + response.data.access_token;
    
                setAuthenticated(true);
                setUsername(email);
                setToken(jwtToken);
    
                // Save token to local storage
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('email', email);
    
                apiClient.interceptors.request.use((config) => {
                    config.headers.Authorization = jwtToken;
                    return config;
                });
    
                // const userDetailsResponse = await fetchUserDetailsService(email);
                // setUserDetails(userDetailsResponse.data);
    
                return { success: true };
            }
        } catch (error) {
            if (error.response) {
                console.error('Login error:', error.response || error);
                if (error.response.status === 401) {
                    return { success: false, message: 'Invalid email or password' };
                } else if (error.response.status === 403) {
                    return { success: false, message: 'Please verify your email to login' };
                } else if (error.response.status === 400) {
                    return { success: false, message: 'An unexpected error occurred please try again' };
                } else if (error.response.status === 404) {
                    return { success: false, message: 'User not found' };
                }
            }
            return { success: false, message: 'An unexpected error occurred' };
        }
    };

    const logout = () => {
        setAuthenticated(false);
        setToken(null);
        setUsername(null);
        setUserDetails(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedEmail = localStorage.getItem('email');

        if (storedToken && storedEmail) {
            setAuthenticated(true);
            setUsername(storedEmail);
            setToken(storedToken);

            apiClient.interceptors.request.use((config) => {
                config.headers.Authorization = storedToken;
                return config;
            });

            // fetchUserDetailsService(storedEmail)
            //     .then((response) => {
            //         setUserDetails(response.data);
            //     })
            //     .catch(() => {
            //         logout();
            //     });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, username, token, userDetails }}>
            {children}
        </AuthContext.Provider>
    );
}
