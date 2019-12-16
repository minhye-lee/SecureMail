import React from 'react';
import EmailContainer from "./container/EmailContainer"
import SenderContainer from "./container/SenderContainer"
import PasswordContainer from "./container/PasswordContainer"


import { Route, BrowserRouter } from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Route exact path="/" component={SenderContainer} />
              <Route path="/password" component={PasswordContainer}/>
              <Route path="/email" component={EmailContainer} />


              {/*<MyEditor />*/}
          </div>
      </BrowserRouter>

  );
}
export default App;