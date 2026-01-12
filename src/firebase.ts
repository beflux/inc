import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDloISTS5y1zLKpopqctmbLzJSAdBsGdWg",
  authDomain: "beflux-admin.firebaseapp.com",
  projectId: "beflux-admin",
  storageBucket: "beflux-admin.firebasestorage.app",
  messagingSenderId: "544614902660",
  appId: "1:544614902660:web:1027a4396a92d23ad04bd1",
  measurementId: "G-09Z20B32LF"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
