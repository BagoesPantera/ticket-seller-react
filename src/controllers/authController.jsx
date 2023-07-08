import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import fire from '../config/fire';

export async function handleLogin(email, password, rememberMe) {
    let back

    await firebase.auth().setPersistence(rememberMe ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            back = true
          });
    })
    .catch(err => {
        switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
                console.log(err.message);
                back = false
                break;
            case "auth/wrong-password":
                console.log(err.message);
                back = false
                break;
        }
    })
    return back
}

export async function handleRegister(email, password){
    let back
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
        back = true
    }).catch(err => {
        switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
                console.log(err.message);
                back = false
                break;
            case "auth/weak-password":
                console.log(err.message);
                back = false
                break;
        }
    })
    return back
}