import React from 'react';
import { render } from 'react-dom';
import Content  from './Content.jsx';
import Footer  from './Footer.jsx';
import Header  from './Header.jsx';
import style from "./style.css";
class App extends React.Component {
  render () {
    return(
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
