import './App.css';
import { collection, addDoc,  } from "firebase/firestore"; 
import { useRef } from "react";
import db from './firebase';

function App() {

  const emailElement = useRef();
  const passwordElement = useRef();

  async function pushData(email, password){
    try {
      const docRef = await addDoc(collection(db, "data"), { email, password,});
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
  }
  } 

  const Input = (e) => {
    e.preventDefault();
    const email = emailElement.current.value;
    const password = passwordElement.current.value;
    pushData(email, password)
  };

  
  return (
    <div className="App">
      <form>
        <label for="email">Enter your email:</label>
        <input type="email" id="email" name="email" ref={emailElement}/>

        <labal>Enter your password</labal>
        <input type="password"  ref={passwordElement}/>
        <button onClick={Input}>Focus Input</button>
      </form>
    </div>
  );
}

export default App;
