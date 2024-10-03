import { apiClient } from "./ApiClient";

export const executeJwtAuthenticationService = (email, password) => 
    apiClient.post('/authenticate', { email, password });

// export const fetchUserDetailsService = (email) => 
//     apiClient.get(`/${email}`);