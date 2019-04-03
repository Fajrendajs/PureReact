import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function HelloWorld(props) {
  return <span>{props.song.name}</span>;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<HelloWorld song={{ name: 'Juicy' }} />, rootElement);
