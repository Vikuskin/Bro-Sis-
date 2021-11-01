import { GlobalStyle } from './Components/Style/GlobalStyle'
import { NavBar } from './Components/NavBar/NavBar'
import { Statistics } from './Components/Statistics/Statistics';
import { Buttons } from './Components/Buttons/Buttons';

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Statistics/>
      <Buttons/>
    </>
  );
}

export default App;
