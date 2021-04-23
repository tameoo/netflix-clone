const apiKey = 'AIzaSyC1cBFg7k7NnbedholwaIUrk0M40OQYzxw';

const signUp = (newUser) => {
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, 
        {
            method: 'POST',
            body: JSON.stringify(newUser)
        }
    ).then(data => data.json());
}

const signIn = (existUser) => {
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, 
        {
            method: 'POST',
            body: JSON.stringify(existUser)
        }
    ).then(data => data.json());
}

export {
    signUp,
    signIn
}