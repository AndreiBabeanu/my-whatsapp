import "./App.css";
import ChatFrame from "./components/chat-frame/ChatFrame";
import Sidebar from "./components/sidebar-frame/Sidebar";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";

export const Context = createContext();

function App() {
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [currentGroupId, setCurrentGroupId] = useState(0);
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Context.Provider
      value={{
        showCreateGroup,
        setShowCreateGroup,
        currentGroupId,
        setCurrentGroupId,
      }}
    >
      <div className="app">
        <Router>
          <Switch>
            <Route path="/chat">
              <Sidebar />
              <ChatFrame />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
