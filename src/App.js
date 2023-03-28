import HomePage from "./scenes/homePage/homePage";
import LoginPage from "./scenes/LoginPage/Login";

import "./App.css";

function App() {
  
  let user = true; 

  return (
    <div className="app">
      {!user ? (
        <LoginPage />
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;

/** @
 *
 */
