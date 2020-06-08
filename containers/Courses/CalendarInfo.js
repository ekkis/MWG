
import Section from 'components/Section'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true
}

const CALENDAR_ITEMS = [
  {
    title: 'More than a gun',
    description: `Be more than just the weapons you carry.  Get know-how too.
    Learn to care for your custom gun and when and how to use it
    safely.  We create a safe, comfortable space for both new and
    seasoned shooters to practice armorer, combat and safety skills
    hands-on.  Courses happen in person at our Culver City showroom
    and workshop in Los Angeles`,
    linkTitle: 'see calendar'
  },
  {
    title: 'Combat & certifications',
    description: ` Not just a piece of paper.  Being certified at Modern Warrior
    Guns means fully knowing a skill, whether it's being able to
    discreetly conceal carry your Warrior Series custom gun or
    wield a knife.  (We'll still give out the piece of paper)`,
    linkTitle: 'see calendar'
  },
  {
    title: 'armorer & cleaning',
    description: `Learn armorer skills first hand (from vetted expert armorers).
    Practice and perfect gun cleaning and maintenance, using MWG-selected
    tools and cleaning supplies`,
    linkTitle: 'see calendar'
  },
  {
    title: 'more about gun cleaning and maintenance',
    description: `Lorem ipsum`,
    linkTitle: 'Custom gun guide'
  }
]

const CalendarInfo = () => {
  return (
    <>
      {
        CALENDAR_ITEMS.map((item, index) => (
          <Section key={index}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <a href=''>{item.linkTitle}</a>
          </Section>
        ))
      }
    </>
  )
}

export default CalendarInfo;
