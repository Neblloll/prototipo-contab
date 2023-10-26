import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes/router';

export default function App() {
  
  return (

    <>

      <Routes/>

      <StatusBar backgroundColor = '#000' translucent style = 'inverted' />

    </>

  );

}
