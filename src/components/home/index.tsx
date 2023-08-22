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
  const slideNum = window.innerWidth < 900 ? (window.innerWidth - 32) / 198 : window.innerWidth > 1536 ? 4.8 : (window.innerWidth - 32) / 306.9;
  return(
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        pt:{md:'200px', xs:'100px'},
        transform: 'translateY(0)'
      }}
      // className='h-[100vh] 2xl:h-full'
    >
      <Box 
        sx={{
          marginX: 'auto',
          maxWidth: '1536px', 
          width: '100%',
          flexShrink: '0',
        }}
      >
        <Box sx={{
          zIndex:'-1',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100vw',
          height: '100%',
          backgroundImage: 'url("backgrounds/blockchain-gradient.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          filter: 'grayscale(100%)',
          }}
        />
        <AfterConnect addrInfo={addrInfo}/>
        <Box 
        className={`${addrInfo?`pt-28`:`pt-0`} 2xl:pr-8 sm:pr-0 sm:pl-8`}
          sx={{
            pr:{xs:'0'},
            pl: {xs:'32px'},
          }}
        >
          <span className='prediction'>Live Predictions</span>
          <Carousel 
            className='carousel relative z-50' 
            show={slideNum} 
            slide={1} 
            swiping={true} 
            transition={0.5} 
            swipeOn={0.1} 
            leftArrow={(
              <button ref={leftArrowRef} className='hidden'>left</button>
            )}
            rightArrow={(
              <button ref={rightArrowRef} className='hidden'>right</button>
            )}
          >
            {liveslides.map((item) => (
              <LiveSlide {...item} key={item.title}
              />
            ))}
          </Carousel>
        </Box>
        <Box 
        sx={{
          display:'flex', 
          flexDirection:'column',
           marginBottom:{md:'130px', xs:'50px'}, 
           mx:'15px'
           }}>
          <Box sx={{ mt:{xs:'50px',md:'120px'},display: addrInfo? 'none' : 'block', overflowWrap:'break-word'}}>
            <Typography
              sx={{
                fontFamily: 'Syne-ExtraBold',
                lineHeight: {md:'60px',xs:'36px'},
                fontSize: {md: '50px', xs:'31px'},
                textAlign: 'center',
                textTransform: 'capitalize',
                letterSpacing: '1.75px',
              }}
              className='word-break'
            >
              The Ultimate Decentrailized <span style={{color:"#00FC65"}}>Finance</span> Platform
            </Typography>
          </Box>
          <Typography
            sx={{
              paddingTop: {md:'32px', xs:'10px'},              
              lineHeight: '25px',
              textAlign: 'center',
              zIndex: '100',
              position: 'relative',
              color: '#EBEBEB',
              fontStyle:'normal',
              fontFamily: 'Montserrat',
              display: addrInfo? 'none' : '  block'
            }}
            className='md:text-[16px] text-[11px]'
          >
            "Predict, Stake, and Win: Bonus DeFi Unleashes Instant Utility and Organic Marketing for Any Token!
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default Index;