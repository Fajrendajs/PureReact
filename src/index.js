import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function HelloWorld(props) {
  let isValid = false;
  return (
    <>
      {isValid && 'valid'}
      {!isValid && 'not valid'}
      <Hello /> <World />
    </>
  );
}

function Hello() {
  return <span>Hello</span>;
}

function World() {
  return <span>World</span>;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<HelloWorld song={{ name: 'Juicy' }} />, rootElement);
