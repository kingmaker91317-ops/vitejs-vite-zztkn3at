import { useState } from "react";
import "./App.css";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from './firebase';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(null);

  const register = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(result.user);
      alert("Register Success");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const login = async () => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(result.user);
      alert("Login Success");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div
      style={{
        background: "black",
        minHeight: "100vh",
        color: "orange",
        padding: "30px",
        textAlign: "center",
      }}
    >
      <h1>BAADSHAH FF ARENA</h1>

      {!user ? (
        <>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "10px",
              margin: "10px",
              width: "250px",
            }}
          />

          <br />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              margin: "10px",
              width: "250px",
            }}
          />

          <br />

          <button
            onClick={register}
            style={{
              padding: "10px 20px",
              margin: "10px",
              background: "orange",
              border: "none",
            }}
          >
            Register
          </button>

          <button
            onClick={login}
            style={{
              padding: "10px 20px",
              margin: "10px",
              background: "orange",
              border: "none",
            }}
          >
            Login
          </button>
        </>
      ) : (
        <>
          <h2>Welcome {user.email}</h2>

          <button
            onClick={logout}
            style={{
              padding: "10px 20px",
              background: "red",
              color: "white",
              border: "none",
            }}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default App;