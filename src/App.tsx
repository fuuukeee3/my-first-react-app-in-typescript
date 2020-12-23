import React from 'react';

interface AppProps {
  message: string
}

const App = (props: AppProps) => {
  return <div>{props.message}</div>;
};

export default App;
