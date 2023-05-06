function authenticate_jwt() {
    let jwt = localStorage.getItem('jwt') 
    if (jwt) { return jwt } 
    return false 
}

async function RequestResource (token, method, headers, address) {
    let the_token = authenticate_jwt()
    if (!the_token) { return false }
    if (!headers) {
        return await fetch(address, {
            method : method, 
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
    }
}


export default authenticate_jwt