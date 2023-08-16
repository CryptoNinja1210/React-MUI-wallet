import { useEffect, useRef } from 'react';
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
  const slideNum = window.innerWidth > 1536 ? 4.6 : (window.innerWidth - 64) / 323;
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
            filter: 'blur(297.25469970703125px)',
            background: {xs:'none', md: '#8218EA80'},
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
          className="pl-8 max-w-[1536px] w-full mt-[-470px] mx-auto text-center"
        >
          <span className='inline upcoming leading-normal'>Upcoming Predictions</span>
          <Carousel 
            className='carousel' 
            show={slideNum}
            slide={4}
            swiping={true}
            transition={0.5}
            swipeOn={1} 
            useArrowKeys={true} 
            rightArrow={(
              <Box
                sx={{
                  backgroundImage:'url("icons/arrow-right.svg")',
                  width:'70px',
                  height:'70px',
                  filter: 'drop-shadow(0px 4px 16px rgba(176, 255, 47, 0.30))',
                  backgroundSize:'cover',
                  cursor:'pointer',
                  position: 'absolute',
                }}
                className='-translate-x-[100px] translate-y-[150px]'
              >
              </Box>
            )}
            leftArrow={(
              <Box
                sx={{
                  backgroundImage:'url("icons/arrow-right.svg")',
                  width:'70px',
                  height:'70px',
                  rotate: '180deg',
                  filter: 'drop-shadow(0px 4px 16px rgba(176, 255, 47, 0.30))',
                  backgroundSize:'cover',
                  cursor:'pointer',
                  position: 'absolute',
                  zIndex: 999999,
                }}
                className='-translate-y-[130px] translate-x-[35px]'
              >
              </Box>
            )}
          >
            {upcomingslides.map((item) => (
              <UpcomingSlide {...item} key={item.title} />
            ))}
          </Carousel>
        </Box>
        <div className='w-full flex justify-center'>
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
            {Array(5).fill('').map(() => (
              <Box sx={{width:'100vw', paddingTop:'30px', marginTop:'6rem', backgroundColor:'#BFF960', py:'22px', color:'#000000', paddingX: '100px'}}>
                <Box sx={{ maxWidth: '90vw', scale: {xs: '0.8', md: '1'}, display:'flex', flexDirection:'row', justifyContent:'center', gap:{xs:'3rem', md:'1.5rem'}, alignItems:'center'}}>
                  <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center', gap:'8px' }}>
                    <img src='icons/Ellipse 38.png' className='w-5 lg:w-7'></img>
                    <Typography sx={{ fontFamily:'Inter'}} className='text-md lg:text-xl'>RBT</Typography>
                    <Typography sx={{ fontFamily:'Inter'}} className='text-md lg:text-xl'>$2.38</Typography>
                  </Box>
                  <Box sx={{display:'flex', flexDirection:'row',alignItems:'center', gap:'8px'}}>
                    <img src='icons/Ellipse 39.png' className='w-5 lg:w-7'></img>
                    <Typography sx={{ fontFamily:'Inter'}} className='text-md lg:text-xl'>RBS</Typography>
                    <Typography sx={{ fontFamily:'Inter'}} className='text-md lg:text-xl'>$0.03</Typography>
                  </Box>
                  <Box sx={{display:'flex', flexDirection:'row',alignItems:'center', gap:'8px'}}>
                    <img src='icons/Ellipse 40.png' className='w-5 lg:w-7'></img>
                    <Typography sx={{ fontFamily:'Inter'}} className='text-md lg:text-xl'>BNB</Typography>
                    <Typography sx={{ fontFamily:'Inter'}} className='text-md lg:text-xl'>$241.73</Typography>
                  </Box>
                  <Box sx={{display:'flex', flexDirection:'row',alignItems:'center', gap:'8px'}}>
                    <img src='icons/Ellipse 41.png' className='w-5 lg:w-7'></img>
                    <Typography sx={{ fontFamily:'Inter'}} className='text-md lg:text-xl'>BTC</Typography>
                    <Typography sx={{ fontFamily:'Inter'}} className='text-md lg:text-xl'>$26414</Typography>
                  </Box>
                  <Box sx={{display:'flex', flexDirection:'row',alignItems:'center', gap:'8px'}}>
                    <img src='icons/Ellipse 42.png' className='w-5 lg:w-7'></img>
                    <Typography sx={{ fontFamily:'Inter'}} className='text-md lg:text-xl' >ETH</Typography>
                    <Typography sx={{ fontFamily:'Inter'}} className='text-md lg:text-xl'>$1719.27</Typography>
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