import Hero from 'containers/Home/Hero'
import LongGuns from 'containers/Home/LongGuns'
import Specs from 'containers/Home/Specs'
import WarriorSeries from 'containers/Home/WarriorSeries'
import OurWork from 'containers/Home/OurWork'
import JoinUs from 'containers/Home/JoinUs'
import PartsCustom from 'containers/Home/PartsCustom'

export default () => {
  return (
    <>
      <Hero />
      <LongGuns />
      <Specs />
      <WarriorSeries />
      <OurWork />
      <JoinUs />
      <PartsCustom />
    </>
  )
}