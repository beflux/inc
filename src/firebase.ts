import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAHXfHwf4QRBigp_HlbImcXC71qWL9EkSY",
  authDomain: "beflux-inc.firebaseapp.com",
  projectId: "beflux-inc",
  storageBucket: "beflux-inc.firebasestorage.app",
  messagingSenderId: "34957437086",
  appId: "1:34957437086:web:2876919347e31d1e4eb38f",
  measurementId: "G-F0T2GQV957"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
