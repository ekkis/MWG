
import HomeCarousel from 'containers/Home/Carousel'
import RifleShotgun from 'containers/Home/RifleShotgun'
import Specs from 'containers/Home/Specs'
import CombatElite from 'containers/Home/CombatElite'
import Competition from 'containers/Home/Competition'
import JoinUs from 'containers/Home/JoinUs'
import PartsCustom from 'containers/Home/PartsCustom'

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <RifleShotgun />
      <Specs />
      <CombatElite />
      <Competition />
      <JoinUs />
      <PartsCustom />
    </>
  )
}

export default Home;