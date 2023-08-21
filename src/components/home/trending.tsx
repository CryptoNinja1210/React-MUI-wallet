import {useState} from 'react';
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
  const [pressedArrow, setPressedArrow] = useState(true);
  // const slideNum = window.innerWidth > 1536 ? 3.5 : (window.innerWidth - 64) / 420.6;

  const slideNum = window.innerWidth < 900 ? (window.innerWidth - 32) / 165 : window.innerWidth > 1536 ? 3.7 : (window.innerWidth - 32) / 422;
  const handleArrow=()=>{
    setPressedArrow(!pressedArrow);
  }
  return(
    <Box
      className='pl-8 2xl:pr-8 flex flex-col justify-center bg-[#0A0A0B]'
      sx={{
        pb:{md:'96px', xs:'0'},
        alignItems:{md:'center', xs:'flex-start'},
      }}
    >
      <Box 
        sx={{
          pt:{md:'120px', xs:'40px'},
          marginBottom:{md:'0', xs:'-20px'}
        }}
      >
        <span className='trending'>Trending Predictions</span>
      </Box>
      <Box 
        sx={{ 
          flexShrink: '0',
          justifyContent: 'start',
          marginTop: '10px !important',
          marginLeft: { xs:'2rem', md:'100px'},

        }}
        className="max-w-[1536px] w-full mt-[40px] mx-auto"
      >
        <Carousel 
          className='carousel relative z-50' 
          show={slideNum}
          slide={3}
          swiping={true}
          transition={0.5}
          swipeOn={1}
          useArrowKeys={true} 
          rightArrow={(
            <Box
              sx={{
                width:'70px',
                height:'70px',
                filter: 'drop-shadow(0px 4px 16px rgba(176, 255, 47, 0.30))',
                backgroundImage: pressedArrow ? `url(icons/arrow-right.svg)` : `url(icons/arrow-left.svg)`,
                backgroundSize:'cover',
                cursor:'pointer',
                position: 'absolute',
                display: {md:'block', xs:'none'}
              }}
              className={`${pressedArrow?`translate-y-[110px] -translate-x-[70px]`:`rotate-180 translate-y-[100px] -translate-x-[70px] pointer-events-none `}`}
              onClick={handleArrow}
            >
            </Box>
          )}
          leftArrow={(
            <Box
              sx={{
                width:'70px',
                height:'70px',
                filter: 'drop-shadow(0px 4px 16px rgba(176, 255, 47, 0.30))',
                backgroundImage: pressedArrow ? `url(icons/arrow-left.svg)` : `url(icons/arrow-right.svg)`,
                backgroundSize:'cover',
                cursor:'pointer',
                position: 'absolute',
                zIndex: 50,
                display: {md:'block', xs:'none'}
              }}
              className={`${
                pressedArrow
                ? `translate-y-[110px] -translate-x-[35px] pointer-events-none`
                : `rotate-180 translate-y-[103px] -translate-x-[35px]`}`}
              onClick={handleArrow}
            >
            </Box>
          )}
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