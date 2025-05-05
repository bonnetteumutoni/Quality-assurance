const login = (email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required.');
    }
    
    if (email === 'test@example.com' && password === 'password123') {
        return { success: true, message: 'Login successful.' };
    } else {
        return { success: false, message: 'Invalid credentials.' };
    }
};
const signup = (email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required.');
    }

    return { success: true, message: 'Signup successful.' };
};
module.exports = { login, signup };