import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// 1. TUS CREDENCIALES (Pegá las tuyas aquí)
const firebaseConfig = {
  apiKey: "AIzaSyAl6ZdVCa8Ap72iDILZKIFPCy27OYbkj5o",
  authDomain: "parque-dinamico.firebaseapp.com",
  projectId: "parque-dinamico",
  storageBucket: "parque-dinamico.firebasestorage.app",
  messagingSenderId: "456982047866",
  appId: "1:456982047866:web:da4a0caaaa87d5dbd11fc3",
  measurementId: "G-9CB6FV4X7V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 2. FUNCIÓN PARA CREAR LA CONFIGURACIÓN (BLOQUE 1)
async function inicializarConfiguracion() {
    try {
        await setDoc(doc(db, "config", "settings"), {
            capacidad_parque: 80,
            capacidad_laser: 20,
            precio_base_parque: 5000,
            precio_base_laser: 3000,
            duracion_min_parque: 60,
            duracion_min_laser: 30,
            intervalo_minutos: 30
        });
        alert("✅ Configuración guardada con éxito en Firestore");
    } catch (error) {
        console.error("Error al guardar:", error);
        alert("❌ Error al guardar. Revisá la consola.");
    }
}

// Hacer la función accesible desde el HTML
window.inicializarConfiguracion = inicializarConfiguracion;