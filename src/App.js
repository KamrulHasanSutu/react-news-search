import React from 'react';
import Header from './components/header';
import {newsCatagory} from './news'

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Header category={newsCatagory.secience}/>
      </div>
    );
  }
}
export default App;
