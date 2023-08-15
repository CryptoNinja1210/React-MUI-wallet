import Description from '../common/description';
import GetButton from '../common/getbutton';
import Picture from '../common/picture';
import {Box, Typography} from '@mui/material';
import '../../App.css'                                                                  

const description =[
  {
    title:"Stay Ahead of the Curve with Unparalleled Prediction Accuracy",
    subTitle1:"At Bonus DeFi, we pride ourselves on delivering accurate predictions that give you a competitive edge. Our cutting-edge algorithms and data-driven insights enable you to make informed decisions and maximize your returns.",
    subTitle2:"Trust in our robust prediction engine to guide you towards profitable opportunities in the dynamic world of decentralized finance."
  },
  {
    title:"Explore Limitless Possibilities with a Diverse Range of Projects",
    subTitle1:"Bonus DeFi embraces project diversity like no other platform. From memes to unique ventures and everything in between, we support projects of all types.",
    subTitle2:"Discover a vibrant ecosystem where innovation thrives, and be part of a community that celebrates creativity and uniqueness. With Bonus DeFi, your project can find its perfect niche and unleash its full potential."
  },
  {
    title:"Ignite Organic Growth with Authentic Community Engagement",
    subTitle1:"Say goodbye to forced and ineffective marketing campaigns. Bonus DeFi fosters organic marketing strategies that allow your project to shine authentically. Our platform encourages genuine community engagement, attracting passionate supporters who will organically spread the word about your project.",
    subTitle2:"Join us in cultivating an ecosystem where projects flourish through genuine connections and word-of-mouth promotion."
  },
  {
    title:"The Ultimate Decentralized Finance Platform",
    subTitle1:"Revolutionize your project's success in the DeFi ecosystem and captivate your community with Bonus DeFi's groundbreaking features and organic marketing strategies.",
    subTitle2:""
  },
];

const getbutton = [{
  name: "Get started",
  },
  {
    name: "Get started",
  },
  {
    name: "Get started",
  },
  {
    name: "Buy Token",
  }
];

const picture =[{
  square:"images/NFT3.png",
  bac:"images/bac2.png"
},
{
  square:"images/NFT2.png",
  bac: "images/bac1.png"
},
{
  square:"images/NFT1.png",
  bac:"images/bac3.png"
},
{
  square:"images/love.png",
  bac:"images/bac3.png"
}]

function Content(){  
  return(
    <Box 
      sx={{
        background: '#0A0A0B',
        overflowX: 'none',
        position: 'relative',
      }}
    >
      <Box sx={{
        display: {xs:'none', md:'flex'}
      }}>
        <Box 
          sx={{
            backgroundImage: 'url("backgrounds/vector1.svg")',
            width: '536.475px',
            height: '1066.688px',
            transform: 'rotate(39.402deg)',
            position:'absolute',
            flexShrink: '0',
            marginLeft: '85%',
            marginTop: '-500px',
            fill: 'rgba(143, 0, 255, 0.30)',
            filter: 'blur(194.99147033691406px)',
            background:'#8F00FF4D',
          }}
          >
        </Box>
        <Box 
          sx={{
            backgroundImage: 'url("backgrounds/vector3.svg")',
            width: '820.528px',
            height: '1195.159px',
            transform: 'rotate(-162.478deg)',
            flexShrink: '0',
            marginLeft: '-30%',
            position:'absolute',
            marginTop: '500px',
            fill: 'rgba(130, 24, 234, 0.50)',
            filter: 'blur(297.25469970703125px)',
            background:'#8218EA80',
          }}
          >          
        </Box>
        <Box 
          sx={{
            backgroundImage: 'url("backgrounds/vector3.svg")',
            width: '820.528px',
            height: '1195.159px',
            flexShrink: '0',
            marginLeft: '90%',
            position:'absolute',
            marginTop: '1200px',
            fill: 'rgba(130, 24, 234, 0.50)',
            filter: 'blur(297.25469970703125px)',
            background:'#8218EA80',
          }}
          >
        </Box>
        <Box 
            sx={{
              backgroundImage: 'url("backgrounds/vector5.svg")',
              position:'absolute',
              width: '465.127px',
              height: '1195.043px',
              transform: 'rotate(39.402deg)',
              flexShrink: '0',
              marginLeft: '-15%',
              marginTop: '2100px',
              fill: 'rgba(138, 26, 238, 0.50)',
              filter: 'blur(297px)',
              background:'#8A1AEE80',
            }}
          >
        </Box>
        <Box 
            sx={{
              backgroundImage: 'url("backgrounds/vector6.svg")',
              position:'absolute',
              width: '1080px',
              height: '1263px',
              transform: 'rotate(-6deg)',
              flexShrink: '0',
              marginLeft: '80%',
              marginTop: '2700px',
              fill: 'rgba(138, 26, 238, 0.50)',
              filter: 'blur(297px)',
              background:'#8218EA80',
            }}
          >
        </Box>
        <Box 
            sx={{
              backgroundImage: 'url("backgrounds/vector3.svg")',
              position:'absolute',
              width: '612px',
              height: '1263px',
              transform: 'rotate(-6deg)',
              flexShrink: '0',
              marginLeft: '-30%',
              marginTop: '3100px',
              fill: 'rgba(138, 26, 238, 0.50)',
              filter: 'blur(297px)',
              background:'#8218EA80',
            }}
          >
        </Box>
      </Box>
      <Box
        className="w-full max-w-[1536px] mx-auto px-8"
      >
        <Box 
          className='mt-[100px] text-center space-y-5'
        >
          <div className='inline feature '>Our Key Features</div><br/>
          <div className='subtitle'>Unleashing Limitless Potential in the Dynamic DeFi Universe</div>
        </Box>
        <Box
          sx={{
            display:'flex',
            flexDirection:{ md:'row', xs:'column-reverse'},
            justifyContent:{md:'space-around', xs:'center'},
          }}
          className="items-center mt-12 w-full"
        >
          <Box
            className='flex flex-col justify-around w-full md:max-w-xl'
          >
            <Description title={description[0].title} subTitle1={description[0].subTitle1} subTitle2={description[0].subTitle2}/>
            <GetButton name={getbutton[0].name}/>
          </Box>
          <Box>
            <Picture square={picture[0].square} bac={picture[0].bac}/>
          </Box>            
        </Box>
        <Box 
          sx={{
            display:'flex',
            flexDirection:{ md:'row', xs:'column'},
            justifyContent:{md:'space-around', xs:'center'},
          }}
          className="items-center mt-12 w-full"
        >
          <Box>
            <Picture square={picture[1].square} bac={picture[1].bac}/>
          </Box> 
          <Box
            className='flex flex-col justify-around w-full md:max-w-xl'
          >
            <Description title={description[1].title} subTitle1={description[1].subTitle1} subTitle2={description[1].subTitle2}/>
            <GetButton name={getbutton[1].name}/>
          </Box>
        </Box>
        <Box 
          sx={{
            display:'flex',
            flexDirection:{ md:'row', xs:'column'},
            justifyContent:{md:'space-around', xs:'center'},
          }}
          className="items-center mt-12 w-full"
        >
          <Box
            className='flex flex-col justify-around w-full md:max-w-xl'
          >
            <Description title={description[2].title} subTitle1={description[2].subTitle1} subTitle2={description[2].subTitle2}/>
            <GetButton name={getbutton[2].name}/>
          </Box>
          <Box>
            <Picture square={picture[2].square} bac={picture[2].bac}/>
          </Box>            
        </Box>
        <Box 
          className='mt-[100px] text-center space-y-5'
        >
          <div className='inline feature '>How it works</div><br/>
          <div className='subtitle'>Empowering Users to Predict, Engage, and Earn in a Few Simple Steps</div>
        </Box>
        <img className='mt-24 flex w-auto mx-auto' src='images/movie.png'></img>
        <Box 
          sx={{
            display:'flex',
            flexDirection:{ md:'row', xs:'column'},
            justifyContent:{md:'space-around', xs:'center'},
          }}
          className="items-center mt-12 w-full"
        >
          <Box
            className='flex flex-col justify-around w-full md:max-w-xl'
          >
            <Description isFinance={true} title={description[3].title} subTitle1={description[3].subTitle1} subTitle2={description[3].subTitle2}/>
            <Box 
              sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'flex-start',
                alignItems:'center'
              }}>
                <GetButton name={getbutton[3].name}/>
                <Typography sx={{color:'#00FC65', marginLeft:'20px', mr:'5px'}}>Learn</Typography>
                <Box sx={{backgroundImage:'url("icons/arrow3.png")', width:'18px', height:'14px'}}></Box>
            </Box>
          </Box>
          <Box>
            <Picture square={picture[3].square} bac={picture[3].bac} className='backdrop-blur-lg'/>
          </Box>            
        </Box>
        <Box sx={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-around',
          marginTop:'100px'
          }}>
          <Box 
            sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-between',       
            }}
            className="w-1/3 text-center"
          >
            <Typography
             sx={{
              color: '#ADA8C3',
              fontFamily: 'Montserrat',
              fontSize: {xs:'11px', md:'16px'},
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '25px',
              textTransform: 'capitalize',
             }}
            >Circulating Supply</Typography>
            <Typography
              sx={{
                color: '#FFF',
                fontFamily: 'Syne',
                fontSize: {xs:'18px', md:'28px'},
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
                letterSpacing: '0.98px',
                textTransform: 'capitalize',
              }}
            >205,682,922</Typography>
          </Box>
          <Box sx={{borderRight:'3px solid #ADA8C3'}}></Box>
          <Box 
            sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-between'            
            }}
            className="w-1/3 text-center"
          >
            <Typography
             sx={{
              color: '#ADA8C3',
              fontFamily: 'Montserrat',
              fontSize: {xs:'11px', md:'16px'},
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '25px',
              textTransform: 'capitalize',
             }}
            >Total supply</Typography>
            <Typography
              sx={{
                color: '#FFF',
                fontSize: {xs:'18px', md:'28px'},
                fontFamily: 'Syne',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
                letterSpacing: '0.98px',
                textTransform: 'capitalize',
              }}
            >387,756,414</Typography>
          </Box>
          <Box sx={{borderRight:'3px solid #ADA8C3'}}></Box>
          <Box 
            sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-between'            
            }}
            className="w-1/3 text-center"
          >
            <Typography
             sx={{
              color: '#ADA8C3',
              fontFamily: 'Montserrat',
              fontSize: {xs:'11px', md:'16px'},
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '25px',
              textTransform: 'capitalize',
             }}
            >Max Supply</Typography>
            <Typography
              sx={{
                color: '#FFF',
                fontFamily: 'Syne',
                fontSize: {xs:'18px', md:'28px'},
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
                letterSpacing: '0.98px',
                textTransform: 'capitalize',
              }}
            >750,000,000</Typography>
          </Box>
        </Box>
        <Box sx={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-around',
          marginTop:'60px',
          marginBottom:'100px'
          }}>
          <Box 
            sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-between'            
            }}
            className="w-1/3 text-center"
          >
            <Typography
             sx={{
              color: '#ADA8C3',
              fontFamily: 'Montserrat',
              fontSize: {xs:'11px', md:'16px'},
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '25px',
              textTransform: 'capitalize',
             }}
            >Market cap</Typography>
            <Typography
              sx={{
                color: '#FFF',
                fontFamily: 'Syne',
                fontSize: {xs:'18px', md:'28px'},
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
                letterSpacing: '0.98px',
                textTransform: 'capitalize',
              }}
            >$290 million</Typography>
          </Box>
          <Box sx={{borderRight:'3px solid #ADA8C3'}}></Box>
          <Box 
            sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-between'            
            }}
            className="w-1/3 text-center"
          >
            <Typography
             sx={{
              color: '#ADA8C3',
              fontFamily: 'Montserrat',
              fontSize: {xs:'11px', md:'16px'},
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '25px',
              textTransform: 'capitalize',
             }}
            >Burned to date</Typography>
            <Typography
              sx={{
                color: '#FFF',
                fontFamily: 'Syne',
                fontSize: {xs:'18px', md:'28px'},
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
                letterSpacing: '0.98px',
                textTransform: 'capitalize',
              }}
            >868,132,226</Typography>
          </Box>
          <Box sx={{borderRight:'3px solid #ADA8C3'}}></Box>
          <Box 
            sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-between'            
            }}
            className="w-1/3 text-center"
          >
            <Typography
             sx={{
              color: '#ADA8C3',
              fontFamily: 'Montserrat',
              fontSize: {xs:'11px', md:'16px'},
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '25px',
              textTransform: 'capitalize',
             }}
            >Current emissions</Typography>
            <Typography
              sx={{
                color: '#FFF',
                fontFamily: 'Syne',
                fontSize: {xs:'18px', md:'28px'},
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
                letterSpacing: '0.98px',
                textTransform: 'capitalize',
              }}
            >4.55/block</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            textAlign:'center',
            width:'auto',
            mt:'50px',
            mb:'100px',
            padding:'2rem',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '24px',
            background: 'linear-gradient(158deg, #9CFC00 0%, #00FC92 100%)',
          }}
        >
          <Typography
            sx={{
              color: '#0A0A0B',
              fontFamily: 'Syne',
              fontSize: {xs:'18px', md:'48px'},
              fontStyle: 'normal',
              fontWeight: '700',
              letterSpacing: '-0.4px',
            }}
            className='leading-normal'
          >
            Stay Updated, Engage, and Get Support in our Official Telegram Group
          </Typography>
          <Typography 
            sx={{
              color: '#0A0A0B',
              fontFamily: 'Montserrat',
              fontSize: {xs:'12px', md:'18px'},
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '32px',
            }}
          >Join the Bonus DeFi Telegram Community and Connect with Fellow Enthusiasts</Typography>
          <Typography
            sx={{
              color: '#0A0A0B',
              fontFamily: 'Syne',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 'normal',
              padding: '16px 32px',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '144px',
              background: '#FFF',
              marginTop:'30px'
            }}
          >Join Telegram</Typography>
        </Box>
      </Box>
    </Box>   
  )
}
export default Content;