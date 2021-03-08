const signUp = async (newUser) => {
    return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClIoDEhEv0j8UrjlJ5Z2Ka7MH1dIKus4I', 
        {
            method: 'POST',
            body: JSON.stringify(newUser)
        }
    )
    .then(data => data.json());
}

const signIn = async (existUser) => {
    return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClIoDEhEv0j8UrjlJ5Z2Ka7MH1dIKus4I', 
        {
            method: 'POST',
            body: JSON.stringify(existUser)
        }
    )
    .then(data => data.json());
}

export {
    signUp,
    signIn
}