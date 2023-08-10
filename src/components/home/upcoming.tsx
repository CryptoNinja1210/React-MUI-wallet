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
  const x = window.innerWidth;
  return(
    <div>
      <Box sx={{ background: '#0A0A0B', mt:'-10px'}}>
        <Box 
          sx={{
            backgroundImage: 'url("backgrounds/vector2.svg")',
            width: '820.528px',
            height: '1195.159px',
            transform: 'rotate(-162.478deg)',
            flexShrink: '0',
            marginLeft: '-35%',
            fill: 'rgba(130, 24, 234, 0.50)',
            filter: 'blur(297.25469970703125px)',
            background:'#8218EA80',
          }}
        >
        </Box>
        <Box 
          sx={{
            backgroundImage: 'url("backgrounds/vector5.svg")',
            width: '275.127px',
            height: '547.043px',
            transform: 'rotate(39.402deg)',
            flexShrink: '0',
            marginLeft: '90%',
            marginTop: '-1240px',
            fill: 'rgba(138, 26, 238, 0.50)',
            filter: 'blur(100px)',
            background:'#8A1AEE80',
          }}
        >
        </Box>
        <Box sx={{mt:"-480px", width: '100vw', overflowX: 'hidden'}}>
          <span className='upcoming'>Upcoming Predictions</span>
          {
            x > 768 ? (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginTop: '40px',
                  paddingLeft: { xs:'1rem', md:'100px'},
                  position: 'relative'
                }}
              >
                <Carousel 
                  className='carousel' 
                  show={5.2} 
                  slide={2} 
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
                        transform: 'translate(-70px, 150px)',
                        backgroundSize:'cover',
                        cursor:'pointer'
                      }}
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
                        transform: 'translateY(-150px)',
                        cursor:'pointer'
                      }}
                    >
                    </Box>
                  )}
                >
                  {upcomingslides.map((item) => (
                    <UpcomingSlide {...item} key={item.title} />
                  ))}
                </Carousel>
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginTop: '40px',
                  paddingLeft:'2rem',
                  position: 'relative'
                }}
              >
                <Carousel 
                  className='carousel' 
                  show={5.2} 
                  slide={2} 
                  swiping={true} 
                  transition={0.5} 
                  swipeOn={1}
                >
                  {upcomingslides.map((item) => (
                    <UpcomingSlide {...item} key={item.title} />
                  ))}
                </Carousel>
              </Box>              
            )          
          }
        </Box>
        <Box sx={{width:'100%', marginTop:'6rem', backgroundColor:'#BFF960', py:'22px', color:'#000000'}}>
          <Box sx={{ display:'flex', scale:{xs:'0.8', md:'1'}, flexDirection:'row', justifyContent:{xs:'left', md:'center'}, gap:{xs:'3rem', md:'1.5rem'}, alignItems:'center'}}>
            <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center', fontSize:'22px', gap:'8px' }}>
              <img src='icons/Ellipse 38.png' style={{width:'27px', height:'27px'}}></img>
              <Typography sx={{ fontFamily:'Inter', fontSize:'22.5px'}}>RBT</Typography>
              <Typography sx={{ fontFamily:'Inter', fontSize:'22.5px'}}>$2.38</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row',alignItems:'center', fontSize:'22px', gap:'8px'}}>
              <img src='icons/Ellipse 39.png' style={{width:'27px', height:'27px'}}></img>
              <Typography sx={{  fontFamily:'Inter', fontSize:'22.5px'}}>RBS</Typography>
              <Typography sx={{ fontFamily:'Inter', fontSize:'22.5px'}}>$0.03</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row',alignItems:'center', fontSize:'22px', gap:'8px'}}>
              <img src='icons/Ellipse 40.png' style={{width:'27px', height:'27px'}}></img>
              <Typography sx={{ fontFamily:'Inter', fontSize:'22.5px'}}>BNB</Typography>
              <Typography sx={{ fontFamily:'Inter', fontSize:'22.5px'}}>$241.73</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row',alignItems:'center', fontSize:'22px', gap:'8px'}}>
              <img src='icons/Ellipse 41.png' style={{width:'27px', height:'27px'}}></img>
              <Typography sx={{ fontFamily:'Inter', fontSize:'22.5px'}}>BTC</Typography>
              <Typography sx={{ fontFamily:'Inter', fontSize:'22.5px'}}>$26414</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row',alignItems:'center', fontSize:'22px', gap:'8px'}}>
              <img src='icons/Ellipse 42.png' style={{width:'27px', height:'27px'}}></img>
              <Typography sx={{ fontFamily:'Inter', fontSize:'22.5px'}}>ETH</Typography>
              <Typography sx={{ fontFamily:'Inter', fontSize:'22.5px'}}>$1719.27</Typography>
            </Box>
          </Box>
        </Box>
      </Box>   
    </div>
  )
}
export default UpComing;