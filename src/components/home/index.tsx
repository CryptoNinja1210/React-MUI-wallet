import { useEffect, useRef } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import LiveSlide from '../common/liveslide.tsx';
import {Box, Typography} from '@mui/material';
import '../../App.css'                                                                  
import AfterConnect from '../wallet/afterconnect.tsx';

const liveslides = [
  {
    brand:"/images/diamond.svg",
    title:"Diamond Club",
    ending:"Ending in",
    deadline:"5d-52m-20s",
    person:"/icons/person.svg",
    count:50
  },
  {
    brand:"/images/memenation.svg",
    title:"Memenation",
    ending:"Ending in",
    deadline:"5d-52m-20s",
    person:"/icons/person.svg",
    count:50
  },
  {
    brand:"/images/tokerr.svg",
    title:"Tokerr",
    ending:"Ending in",
    deadline:"5d-52m-20s",
    person:"/icons/person.svg",
    count:50
  },
  {
    brand:"/images/kindom.svg",
    title:"Ape Kindom",
    ending:"Ending in",
    deadline:"5d-52m-20s",
    person:"/icons/person.svg",
    count:50
  },
  {
    brand:"/images/tradewix.svg",
    title:"TradeWix",
    ending:"Ending in",
    deadline:"5d-52m-20s",
    person:"/icons/person.svg",
    count:50
  },
  {
    brand:"/images/goblin.svg",
    title:"Goblin Inu",
    ending:"Ending in",
    deadline:"5d-52m-20s",
    person:"/icons/person.svg",
    count:50
  },
  {
    brand:"/images/collie.svg",
    title:"Collie Inu",
    ending:"Ending in",
    deadline:"5d-52m-20s",
    person:"/icons/person.svg",
    count:50
  },
  {
    brand:"/images/gamepad.svg",
    title:"Gamepad",
    ending:"Ending in",
    deadline:"5d-52m-20s",
    person:"/icons/person.svg",
    count:50
  },
  {
    brand:"/images/diamond.svg",
    title:"Diamond Club",
    ending:"Ending in",
    deadline:"5d-52m-20s",
    person:"/icons/person.svg",
    count:50
  }
]

interface AddrInfoType {
  addrInfo: string
}

function Index({
  addrInfo
}: AddrInfoType){  
  const leftArrowRef = useRef<HTMLButtonElement>(null);
  const rightArrowRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const myTimeInterval = setInterval(() => {
      rightArrowRef.current!.click();
    }, 1500);
    return () => {
      if (myTimeInterval) {
        clearInterval(myTimeInterval);
      }
    }
  },[]);
  const slideNum = window.innerWidth > 1536 ? 4.8 : (window.innerWidth - 64) / 303;

  return(
    <Box sx={{
      height: 'calc(100vh - 102px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <Box 
        sx={{
          paddingTop: '100px',
          marginX: 'auto',
          maxWidth: '1536px', 
          width: '100%',
          height: '100vh', 
          flexShrink: '0',
          mt: '-102px',
        }}
      >
        <Box sx={{
          zIndex:'-1',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url("backgrounds/blockchain-gradient.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          filter: 'grayscale(100%)',
          }}
        />
        <AfterConnect addrInfo={addrInfo}/>
        <Box 
          className="pt-40 pl-8"
        >
          <span className='prediction'>Live Predictions</span>
          <Carousel 
            className='carousel' 
            show={slideNum} 
            slide={1} 
            swiping={true} 
            transition={0.5} 
            swipeOn={1} 
            leftArrow={(
              <button ref={leftArrowRef} className='hidden'>left</button>
            )}
            rightArrow={(
              <button ref={rightArrowRef} className='hidden'>right</button>
            )}
            // class='transition-transform duration-1000 ease-in-out'
          >
            {liveslides.map((item) => (
              <LiveSlide {...item} key={item.title}
              />
            ))}
          </Carousel>
        </Box>
        <Box sx={{ mt:'40px',  transform: 'rotateX(-55deg)',display: addrInfo? 'none' : 'block' }}>
          <Typography
            sx={{
              fontFamily: 'syne',
              fontSize: '4.3rem',
              lineHeight: '1.3',
              fontWeight: '800',
              textAlign: 'center',
              textTransform: 'capitalize'
            }}
          >
            The Ultimate Decentrailized <br /> <span style={{color:"#00FC65"}}>Finance</span> Platform
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: '15px',
            fontWeight: '100',
            lineHeight: '25px',
            textAlign: 'center',
            color: 'white',
            zIndex: '100',
            position: 'relative',
            display: addrInfo? 'none' : '  block'
          }}
        >
          "Predict, Stake, and Win: Bonus DeFi Unleashes Instant Utility and Organic Marketing for Any Token!
        </Typography>
      </Box>
    </Box>
  )
}
export default Index;