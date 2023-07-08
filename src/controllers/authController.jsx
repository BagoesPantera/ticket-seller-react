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
            localStorage.setItem("signin", true);
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

export async function handleRegister(email, password, username){
    let back
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
        return firebase.auth().currentUser.updateProfile({
          displayName: username
        }).then(()=>{
            back = true
            localStorage.setItem("signin", true);
        }).catch((error) => {
            console.log(error);
        });
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

export async function handleForgotPass(email) {
    let back
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        back = true
    }).catch((error) => {
        back = false
    });
    return back
}

export function handleLogout() {
    firebase.auth().signOut().then(() => {
        //success
        localStorage.removeItem("signin");
    }).catch((error) => {
        //error
    });
    // this is so baaaaad
    window.location.replace('/');
}