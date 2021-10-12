import "./App.css";
import ChatFrame from "./components/chat-frame/ChatFrame";
import Sidebar from "./components/sidebar-frame/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <ChatFrame />
    </div>
  );
}

export default App;
