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
  return(
    <Box sx={{ background: '#0A0A0B'}}>
      <Box sx={{pt:'120px'}}>
        <span className='upcoming'>Trending Predictions</span>
      </Box>
      <Box 
        sx={{   
          flexShrink: '0',
          justifyContent: 'start',
          marginTop: '40px',
          marginLeft: '100px',
        }}
      >
        <Carousel 
          className='carousel' 
          show={4.2} 
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