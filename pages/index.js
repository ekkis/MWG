import Hero from 'containers/Home/Hero'
import LongGuns from 'containers/Home/LongGuns'
import OurMission from 'containers/Home/OurMission'
import WarriorSeries from 'containers/Home/WarriorSeries'
import OurWork from 'containers/Home/OurWork'
import JoinUs from 'containers/Home/JoinUs'
import PartsCustom from 'containers/Home/PartsCustom'

export default () => {
  return (
    <>
      <Hero />
      <LongGuns />
      <OurMission />
      <WarriorSeries />
      <OurWork />
      <JoinUs />
      <PartsCustom />
    </>
  )
}