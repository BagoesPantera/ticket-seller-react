import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import fire from '../config/fire';
import { z } from 'zod';

export async function handleLogin(email, password, rememberMe) {
    let back
    const errors = {}

    const validationLoginSchema = z.object({
        email: z.string().email({
            message: "Kayanya itu bukan email 🤔"
        }).nonempty({
            message: "Gaboleh kosong"
        })
    })

    const validationLogin = validationLoginSchema.safeParse({email})
    if (!validationLogin.success){
        throw validationLogin.error.flatten()
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

export async function handleRegister(email, password, username, confirmPass){
    let back
    const errors = {}
    // handling error
    const validationRegisterSchema = z.object({
        email: z.string().email({
            message: "Kayanya itu bukan email 🤔"
        }).nonempty(),
        password: z.string().min(6).nonempty(),
        confirmPass: z.string().min(6).nonempty(),
        username: z.string().nonempty()
    }).refine((data) => data.password === data.confirmPass,{
        message: "Kata Sandi dan Konfirmasi Kata Sandi beda!",
        path: ['confirmPass']
    })
    const validationRegister = validationRegisterSchema.safeParse({email, password, confirmPass, username})
    if (!validationRegister.success){
        throw validationRegister.error.flatten()
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
                errors.firebase = "Aduh, emailnya udah dipakai 😭"
                back = false
                break;
            case "auth/weak-password":
                errors.firebase = "Passwordmu gampang dihack itu. Ganti!"
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
    const errors = {}

    // handling error
    // if (typeof email !== "string" || !email.includes("@")) {
    //     errors.surel = "Kayanya itu bukan email 🤔";
    // }
    // if (Object.keys(errors).length) {
    //     throw errors;
    // }
    const validationForgotPassSchema = z.object({
        email: z.string().email().nonempty()
    })
    const validationForgotPass = validationForgotPassSchema.safeParse({email})
    if (!validationForgotPass.success){
        throw validationForgotPass.error.flatten()
    }

    await firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        back = true
    }).catch(err => {
        switch (err.code) {
            case "auth/invalid-email":
            case 'auth/user-not-found':
                errors.firebase = "Surel mu ga ada!"
                back = false
                break;
        }
    });
    if (Object.keys(errors).length) {
        throw errors;
    }
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