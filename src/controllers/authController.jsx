import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import fire from '../config/fire';

export async function handleLogin(email, password, rememberMe) {
    let back
    const errors = {}

    // handling error
    // why here? not in firebase invalid-email? i just want to make it fast tho...
    if (typeof email !== "string" || !email.includes("@")) {
        errors.surel = "Kayanya itu bukan email 🤔";
    }
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
                errors.firebase = "Astagaa, akunmu dinonaktifkan!";
                back = false
                break;
            case "auth/user-not-found":
            case "auth/wrong-password":
                errors.firebase = "Surel atau Kata Sandi salah!";
                back = false
                break;
        }
    })
    if (Object.keys(errors).length) {
        throw errors;
    }
    return back
}

export async function handleRegister(email, password, confirmPass, username){
    let back
    const errors = {}

    // handling error
    if (typeof email !== "string" || !email.includes("@")) {
        errors.surel = "Kayanya itu bukan email 🤔";
    }
    if (typeof password !== "string" || password.length < 6) {
        errors.password = "Kata sandi harus lebih dari 6 karakter!";
    }
    if (password !== confirmPass) {
        errors.confirm = "Kata Sandi dan Konfirmasi Kata Sandi beda!"
    }
    if (Object.keys(errors).length) {
        throw errors;
    }

    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
        return firebase.auth().currentUser.updateProfile({
          displayName: username
        }).then(()=>{
            back = true
            localStorage.setItem("signin", true);
        }).catch((error) => {
            throw error
        });
    }).catch(err => {
        switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
                errors.surel = "Aduh, emailnya udah dipakai 😭"
                back = false
                break;
            case "auth/weak-password":
                errors.password = "Passwordmu gampang dihack itu. Ganti!"
                back = false
                break;
        }
    })
    if (Object.keys(errors).length) {
        throw errors;
    }
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
        throw error
    });
    // this is so baaaaad
    window.location.replace('/');
}