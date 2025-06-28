export async function logout() {
    localStorage.removeItem('token');

    return {
        redirect: {
            destination: '/auth/login',
            permanent: false,
        },
    }
};