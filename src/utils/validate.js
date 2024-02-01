export const checkValidation = (username,email,password) => {
    const isUsernameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(username)
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
     
    if(!isUsernameValid) return 'Invalid Username'
    if(!isEmailValid) return "Invalid Email ID"
    if(!isPasswordValid) return "Invalid Password"

    return null
}