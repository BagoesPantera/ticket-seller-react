import {useState, useEffect} from 'react'
import { Navigate, redirect, useNavigate  } from 'react-router-dom'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import fire from '../config/fire';


// dont know whats wrong...
export function handleLogin(email, password, rememberMe) {

    firebase.auth().setPersistence(rememberMe ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            if (user) {
                console.log("success");
                window.location.replace("http://localhost:5173/");
            } else {
                console.log("failed");
            }
          });
    })
    .catch(err => {
        switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
                console.log(err.message);
                break;
            case "auth/wrong-password":
                console.log(err.message);
                break;
        }
    })
}