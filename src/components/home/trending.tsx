import { Carousel } from '@trendyol-js/react-carousel';
import TrendingSlide from '../common/trendingslide.tsx';
import {Box} from '@mui/material';
import '../../App.css'                                                                  

const trendingslides = [
  {
    title:"Project NO 01",
    description:"Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
    trendbac: "#0091FA"
  },
  {
    title:"Project NO 02",
    description:"Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
    trendbac: "#426CFF"
  },
  {
    title:"Project NO 03",
    description:"Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
    trendbac: "#7E36FF"
  },
  {
    title:"Project NO 04",
    description:"Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
    trendbac: "#56B80E"
  },
  {
    title:"Project NO 05",
    description:"Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
    trendbac: "#ECA907"
  },
  {
    title:"Project NO 06",
    description:"Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
    trendbac: "#ED332D"
  }
]

function Trending(){  
  const slideNum = window.innerWidth > 1536 ? 3.5 : (window.innerWidth - 64) / 423;
  return(
    <Box
      className='flex flex-col justify-center items-center h-[100vh] pb-24 bg-[#0A0A0B]'
    >
      <Box sx={{pt:'120px'}}>
        <span className='trending'>Trending Predictions</span>
      </Box>
      <Box 
        sx={{ 
          flexShrink: '0',
          justifyContent: 'start',
          marginTop: '40px',
          marginLeft: { xs:'2rem', md:'100px'}
        }}
        className="pt-20 pl-8 max-w-[1536px] w-full mt-[40px] mx-auto"
      >
        <Carousel 
          className='carousel' 
          show={slideNum}
          slide={2}
          swiping={true}
          transition={0.5}
          swipeOn={1}
        >
          {trendingslides.map((item)=> (
            <TrendingSlide {...item} key={item.title} />
          ))}
        </Carousel>
      </Box>
    </Box>   
  )
}
export default Trending;