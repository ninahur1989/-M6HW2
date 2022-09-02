import {Route, Routes} from 'react-router-dom'
import {Navigation} from './components/Navigation'
import Realeze from './http/additionalFetches'


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <Realeze /> } />
      </Routes>
    </>
  )
}

export default App;
