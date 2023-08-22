import {useState, useEffect} from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import TrendingSlide from '../common/trendingslide.tsx';
import {Box} from '@mui/material';
import '../../App.css'                                                                  

const trendingslides = [
  {
    title:"Project NO 01",
    description:"Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    trendbac: "#0091FA"
  },
  {
    title:"Project NO 02",
    description:"Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    trendbac: "#426CFF"
  },
  {
    title:"Project NO 03",
    description:"Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    trendbac: "#7E36FF"
  },
  {
    title:"Project NO 04",
    description:"Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    trendbac: "#56B80E"
  },
  {
    title:"Project NO 05",
    description:"Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    trendbac: "#ECA907"
  },
  {
    title:"Project NO 06",
    description:"Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    trendbac: "#ED332D"
  }
]

function Trending(){  
  const [pressedArrow, setPressedArrow] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const show = windowWidth < 900 ? (windowWidth - 32) / 161 : windowWidth > 1536 ? 3.7 : (windowWidth - 32) / 422;

  const slide =  windowWidth < 900 ? 1 : 3;
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
          show={show}
          slide={slide}
          swiping={true}
          transition={0.5}
          swipeOn={0.1}
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