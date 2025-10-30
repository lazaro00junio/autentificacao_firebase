import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
        signOut,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
} from "firebase/auth";


const firebaseConfig = {
        apiKey: "AIzaSyCU68bEZgFNDKBUYvu0G8yFCmIaFYK1Y_A",
        authDomain: "iftm-dsm-aulas-2025.firebaseapp.com",
        projectId: "iftm-dsm-aulas-2025",
        storageBucket: "iftm-dsm-aulas-2025.firebasestorage.app",
        messagingSenderId: "155327941293",
        appId: "1:155327941293:web:7c37839acc2ea5a7ba1424",
        measurementId: "G-90TPFSLYKV"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const registrar = async (email, senha) => {
        try {
                await createUserWithEmailAndPassword(
                        auth,
                        email,
                        senha
                );
                alert("Usuário registrado com sucesso!");
        } catch (error) {
                alert("Erro: " + error.message);
        }
};

export const login = async (email, senha) => {
        try {
                await signInWithEmailAndPassword(auth, email, senha);
                alert("Login realizado!");
        } catch (error) {
                alert("Erro: " + error.message);
        }
};

export const logout = async () => {
        await signOut(auth);
};