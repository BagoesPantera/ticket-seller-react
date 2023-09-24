import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import "firebase/compat/database";

export async function store(nama, emails, hp, lapangan, tanggal, jam) {
    let back
    const errors = {}

    try {
        const dataRef = firebase.database().ref('bookingData');
        const data = {
            nama,
            emails,
            hp,
            lapangan,
            tanggal, 
            jam
        }
        await dataRef.push(data);
        back = true

    } catch (err) {
        errors.err = "Booking gagal! Coba lagi!"
    }

    if (Object.keys(errors).length) {
        throw errors;
    }
    
    
    return back
}