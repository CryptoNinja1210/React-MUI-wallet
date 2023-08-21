import { useEffect, useRef, useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import UpcomingSlide from '../common/upcomingslide.tsx';
import {Box, Typography} from '@mui/material';
import '../../App.css'                                                                  

const upcomingslides = [
  {
    plugincolor:"#D77DEE",
    title:"Bonus DeFi Prediction 01",
    description:"Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
    price:"0.02180700",
    deadline:"5d-52m-20s",
    card:'url("images/card1.svg")'
  },
  {
    plugincolor:"#7DEE82",
    title:"Bonus DeFi Prediction 02",
    description:"Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
    price:"0.02180700",
    deadline:"5d-52m-20s",
    card:'url("images/card2.svg")'
  },
  {
    plugincolor:"#7DE7EE",
    title:"Bonus DeFi Prediction 03",
    description:"Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
    price:"0.02180700",
    deadline:"5d-52m-20s",
    card:'url("images/card3.svg")'
  },
  {
    plugincolor:"#EECE7D",
    title:"Bonus DeFi Prediction 04",
    description:"Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
    price:"0.02180700",
    deadline:"5d-52m-20s",
    card:'url("images/card4.svg")'
  },
  {
    plugincolor:"#EEB37D",
    title:"Bonus DeFi Prediction 05",
    description:"Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
    price:"0.02180700",
    deadline:"5d-52m-20s",
    card:'url("images/card4.svg")'
  },
  {
    plugincolor:"#A87DEE",
    title:"Bonus DeFi Prediction 06",
    description:"Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
    price:"0.02180700",
    deadline:"5d-52m-20s",
    card:'url("images/card3.svg")'
  },
  {
    plugincolor:"#7D9DEE",
    title:"Bonus DeFi Prediction 07",
    description:"Lorem ipsum dolor sit amet consectetur. Dignissim est enim donec egestas vitae ultrices. Ultrices sed nunc at vitae mi.",
    price:"0.02180700",
    deadline:"5d-52m-20s",
    card:'url("images/card2.svg")'
  }
]

function UpComing(){
  const rightArrowRef = useRef<HTMLDivElement>(null);
  const [pressedArrow, setPressedArrow] = useState(true);

  useEffect(() => {
    const myTimeInterval = setInterval(() => {
      rightArrowRef.current!.click();
    }, 3000);
    return () => {
      if (myTimeInterval) {
        clearInterval(myTimeInterval);
      }
    }
  },[]);

  const handleArrow = () => {
    setPressedArrow(prev=>!prev)
  }
  // const slideNum = window.innerWidth > 1536 ? 4.6 : (window.innerWidth - 64) / 320;
  const slideNum = window.innerWidth < 900 ? (window.innerWidth - 32) / 220 : window.innerWidth > 1536 ? 4.6 : (window.innerWidth - 32) / 320;
  return(
    <div>
      <Box 
        sx={{ 
          background: '#0A0A0B',
        }}
      >
        <Box 
          sx={{
            backgroundImage: {xs: '', md:'url("backgrounds/vector2.svg")'},
            width: '820.528px',
            height: '1195.159px',
            transform: 'rotate(-162.478deg)',
            flexShrink: '0',
            marginLeft: '-35%',
            fill: 'rgba(130, 24, 234, 0.50)',
            filter: 'blur(297px)',
            background: {xs:'none', md: '#8218EA80'},
            position: 'relative',
            zIndex:'10'
          }}
        >
        </Box>
        <Box 
          sx={{
            backgroundImage: {xs: '', md:'url("backgrounds/vector5.svg")'},
            width: '275.127px',
            height: '547.043px',
            transform: 'rotate(39.402deg)',
            flexShrink: '0',
            marginLeft: '90%',
            marginTop: '-1240px',
            fill: 'rgba(138, 26, 238, 0.50)',
            filter: 'blur(100px)',
            background: {xs: 'none', md: '#8A1AEE80'},
          }}
        >
        </Box>
        <Box
          className="pl-8 2xl:pr-8 max-w-[1536px] w-full mx-auto"
          sx={{
            mt:{md:'-470px', xs:'-500px'},
            ml:{md:'0', xs:'-50px'},
            textAlign:{md:'center', xs:'left'}
          }}
        >
          <span className='inline upcoming'>Upcoming Predictions</span>
          <Carousel 
            className='carousel relative z-50' 
            show={slideNum}
            slide={4}
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
                className={`${pressedArrow?`translate-y-[150px] -translate-x-[70px]`:`rotate-180 translate-y-[140px] -translate-x-[70px] pointer-events-none `}`}
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
                  ? `translate-y-[150px] -translate-x-[35px] pointer-events-none`
                  : `rotate-180 translate-y-[143px] -translate-x-[35px]`}`}
                onClick={handleArrow}
              >
              </Box>
            )}
          >
            {upcomingslides.map((item) => (
              <UpcomingSlide {...item} key={item.title} />
            ))}
          </Carousel>
        </Box>
        <div className='w-full flex justify-center relative z-10'>
          <Carousel
            className='carousel' 
            show={1} 
            slide={1} 
            swiping={false} 
            transition={2}
            swipeOn={1} 
            useArrowKeys={true} 
            rightArrow={(
              <Box
                ref={rightArrowRef}
                sx={{
                  backgroundImage:'url("icons/arrow-right.svg")',
                  width:'70px',
                  height:'70px',
                  filter: 'drop-shadow(0px 4px 16px rgba(176, 255, 47, 0.30))',
                  backgroundSize:'cover',
                  cursor:'pointer',
                  position: 'absolute',
                }}
                className='-translate-x-[100px] translate-y-[150px] hidden'
              >
              </Box>
            )}
          >
            {Array(5).fill('').map((_, id) => (
              <Box 
                key={ 'banner_' + id} 
                sx={{
                  width:'100%', 
                  paddingTop:'30px', 
                  marginTop:{md:'6rem', xs:'3rem'}, 
                  backgroundColor:'#BFF960', 
                  py:'22px', 
                  color:'#000000', 
                  paddingX: '100px'
                }}>
                <Box sx={{ maxWidth: '90vw', scale: {xs: '0.8', md: '1'}, display:'flex', flexDirection:'row', justifyContent:'center', gap:{xs:'3rem', md:'2rem'}, alignItems:'center'}}>
                  <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center', gap:'8px' }}>
                    <img src='icons/Ellipse 38.png' className='w-5 lg:w-7'></img>
                    <Typography sx={{ fontFamily:'Inter', fontSize:{md:'20px', lg:'23px'}}}>RBT</Typography>
                    <Typography sx={{ fontFamily:'Inter', fontSize:{md:'20px', lg:'23px'}}}>$2.38</Typography>
                  </Box>
                  <Box sx={{display:'flex', flexDirection:'row',alignItems:'center', gap:'8px'}}>
                    <img src='icons/Ellipse 39.png' className='w-5 lg:w-7'></img>
                    <Typography sx={{ fontFamily:'Inter', fontSize:{md:'20px', lg:'23px'}}}>RBS</Typography>
                    <Typography sx={{ fontFamily:'Inter', fontSize:{md:'20px', lg:'23px'}}}>$0.03</Typography>
                  </Box>
                  <Box sx={{display:'flex', flexDirection:'row',alignItems:'center', gap:'8px'}}>
                    <img src='icons/Ellipse 40.png' className='w-5 lg:w-7'></img>
                    <Typography sx={{ fontFamily:'Inter', fontSize:{md:'20px', lg:'23px'}}}>BNB</Typography>
                    <Typography sx={{ fontFamily:'Inter', fontSize:{md:'20px', lg:'23px'}}}>$241.73</Typography>
                  </Box>
                  <Box sx={{display:'flex', flexDirection:'row',alignItems:'center', gap:'8px'}}>
                    <img src='icons/Ellipse 41.png' className='w-5 lg:w-7'></img>
                    <Typography sx={{ fontFamily:'Inter', fontSize:{md:'20px', lg:'23px'}}}>BTC</Typography>
                    <Typography sx={{ fontFamily:'Inter', fontSize:{md:'20px', lg:'23px'}}}>$26414</Typography>
                  </Box>
                  <Box sx={{display:'flex', flexDirection:'row',alignItems:'center', gap:'8px'}}>
                    <img src='icons/Ellipse 42.png' className='w-5 lg:w-7'></img>
                    <Typography sx={{ fontFamily:'Inter', fontSize:{md:'20px', lg:'23px'}}}>ETH</Typography>
                    <Typography sx={{ fontFamily:'Inter', fontSize:{md:'20px', lg:'23px'}}}>$1719.27</Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Carousel>
        </div>
      </Box>   
    </div>
  )
}
export default UpComing;