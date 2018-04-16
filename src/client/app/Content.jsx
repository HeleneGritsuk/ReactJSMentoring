import React from 'react';

class Content extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {list:['React.createElement', 'React.Component', 'React.PureComponent', 'functional components']}
  }

  render() {
    return (
      <div>
        <p>React components can be created in different ways, using:</p>
        {this.state.list.map((elem, index) => <li key={index}>{elem}</li>)}
      </div>
    );
  }

}

export default Content;
