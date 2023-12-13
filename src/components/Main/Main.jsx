import Promo from './Promo/Promo.jsx'; 
import NavTab from './NavTab/NavTab.jsx';
import AboutProject from './AboutProject/AboutProject.jsx';
import Techs from './Techs/Techs.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';

export default function Main() {

  return (
    <>
    <Promo/>
    <NavTab/>
    <AboutProject/>
    <Techs/>
    <AboutMe/>
    <Portfolio/>
    </>
  );
}