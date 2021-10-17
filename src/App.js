import "./App.css";
import ChatFrame from "./components/chat-frame/ChatFrame";
import Sidebar from "./components/sidebar-frame/Sidebar";
import { createContext, useState } from "react";

export const Context = createContext();

function App() {
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [currentGroupId, setCurrentGroupId] = useState(0);

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
        <Sidebar />
        <ChatFrame />
      </div>
    </Context.Provider>
  );
}

export default App;
