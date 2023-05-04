function authenticate_jwt() {
    let jwt = localStorage.getItem('jwt') 
    if (jwt) { return jwt } 
    return false 
}

export default authenticate_jwt