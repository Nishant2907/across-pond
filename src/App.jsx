
import './App.css'
import MainPage from './Components/Mainpage'
import Nav from './Components/Nav'
import FinanceText from './Components/PageTwo/FinanceText'
import OurServices from './Components/PageTwo/OurServices'
import PerformanceExcellence from './Components/PageTwo/PerformanceExcellence'
import RoleOfFinance from './Components/PageTwo/RoleOfFinance'

function App() {

  return (
    <>
     <Nav/>
     <MainPage/>
     <FinanceText/>
     <RoleOfFinance/>
     <PerformanceExcellence/>
     <OurServices/>
    </>
  )
}

export default App
