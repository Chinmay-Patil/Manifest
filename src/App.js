import logo from './logo.svg';
import './Styles/Style.css'
import './Components/ChatWin'
import Chatwin from './Components/ChatWin';
import ChatContextProvider from './Components/Chat';
import ChatDisplay from './Components/ChatDisplay';
import UserInput from './Components/UserInput'

function App() {
  return (
    <div className="App">
      <div className="app_body" >
        <ChatContextProvider>
          <Chatwin />
          <ChatDisplay />
          <UserInput />
        </ChatContextProvider>

      </div>

    </div>
  );
}

export default App;
