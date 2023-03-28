import React, { useEffect } from "react";
import LoginPage from "./scenes/LoginPage/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./scenes/global/Header/Header";
import Sidebar from "./scenes/global/Sidebar/Sidebar";
import "./App.css";
import Mail from "./scenes/Mail/Mail";
import EmailList from "./scenes/EmailList/EmailList";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import SendMail from "./components/SendMail/SendMail";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { login, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // the user is logged in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          {user ? (
            <>
              <Header />
              <div className="app_body">
                <Sidebar />
                <Routes>
                  <Route path="/mail" element={<Mail />} />
                  <Route path="/" element={<EmailList />} />
                </Routes>
              </div>
              {sendMessageIsOpen && <SendMail />}
            </>
          ) : (
            <LoginPage />
          )}
        </div>
      </ErrorBoundary>
    </Router>
  );
}
export default App;

/** @
 *
 */
