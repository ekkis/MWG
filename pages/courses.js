
import Typography from '@material-ui/core/Typography'
import LocationOn from '@material-ui/icons/LocationOn'
// import Carousel from 'components/Carousel'
import CalendarInfo from 'containers/Courses/CalendarInfo'

const CarouselItems = [
  {
    caption: 'Yellowstone National Park, United States',
    image: '/img/background/gun-guide-carousel-1.jpg'
  },
  {
    caption: 'Somewhere Beyond, United States',
    image: '/img/background/gun-guide-carousel-2.jpg'
  },
  {
    caption: 'Yellowstone National Park, United States',
    image: '/img/background/gun-guide-carousel-3.jpg'
  }
]

// const CarouselItem = ({item, index}) => (
//   <div key={index}>
//     <img src={item.image} alt='carousel image' className='slick-image' />
//     <div className='slick-caption'>
//       <h4>
//         <LocationOn className='slick-icons' />
//         {item.caption}
//       </h4>
//     </div>
//   </div>
// )

export default () => {
  return (
    <>
      <Typography>
        Course page
      </Typography>
      {/* <Carousel Items={CarouselItems}> */}
        {/* <CarouselItem /> */}
      {/* </Carousel> */}
      {/* <CalendarInfo /> */}
    </>
  )
}
