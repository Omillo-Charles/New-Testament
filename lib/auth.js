// Client-side authentication utilities

export const AuthUtils = {
    // Check if user is authenticated
    isAuthenticated() {
        if (typeof window === 'undefined') return false;
        const token = localStorage.getItem('authToken');
        return !!token;
    },

    // Get current user data
    getCurrentUser() {
        if (typeof window === 'undefined') return null;
        const userStr = localStorage.getItem('user');
        try {
            return userStr ? JSON.parse(userStr) : null;
        } catch (error) {
            console.error('Error parsing user data:', error);
            return null;
        }
    },

    // Get auth token
    getToken() {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem('authToken');
    },

    // Sign out user
    signOut() {
        if (typeof window === 'undefined') return;
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        window.location.href = '/auth/signin';
    },

    // Check if token is expired (basic check)
    isTokenExpired() {
        const token = this.getToken();
        if (!token) return true;

        try {
            // Decode JWT payload (basic decode, not verification)
            const payload = JSON.parse(atob(token.split('.')[1]));
            const currentTime = Date.now() / 1000;
            return payload.exp < currentTime;
        } catch (error) {
            console.error('Error checking token expiration:', error);
            return true;
        }
    }
};

// Hook for React components to use authentication
export const useAuth = () => {
    if (typeof window === 'undefined') {
        return {
            isAuthenticated: false,
            user: null,
            token: null,
            signOut: () => { }
        };
    }

    return {
        isAuthenticated: AuthUtils.isAuthenticated(),
        user: AuthUtils.getCurrentUser(),
        token: AuthUtils.getToken(),
        signOut: AuthUtils.signOut
    };
};