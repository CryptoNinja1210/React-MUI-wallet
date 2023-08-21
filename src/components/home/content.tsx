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
  bac:"images/Lovebac.png"
}];

const accountants = [
  [
    {
      type1:"Circulating Supply",
      amount1:"205,682,922"
    },
    {
      type2:"Total supply",
      amount2:"387,756,414" 
    }
  ],
  [
    {
      type1:"Max Supply",
      amount1:"750,000,000"
    },
    {
      type2:"Market cap",
      amount2:"$290 million" 
    }
  ],
  [
    {
      type1:"Burned to date",
      amount1:"868,132,226"
    },
    {
      type2:"Current emissions",
      amount2:"4.55/block" 
    }
  ],
]

function Content(){  
  return(
    <div className='relative'>
      
      <Box
        sx={{
          background: '#0A0A0B',
          overflowX: 'none',
          position: 'relative',
        }}
      >
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
            background: {xs: 'none', md:'#8F00FF4D'},
          }}
        />
        <Box sx={{
          display: {xs:'none', md:'flex', zIndex: 0}
        }}>
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
              background:'#8218EA80'
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
              background:'#8218EA80'
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
                background:'#8A1AEE80'
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
                background:'#8218EA80'
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
                background:'#8218EA80'
              }}
            >
          </Box>
        </Box>
        <Box
          className="w-full max-w-[1536px] mx-auto px-8 lg:pb-4 pb-2 z-50"
        >
          <Box 
            className='pt-[40px] text-center'
            sx={{
              mt:{md:'20px', xs:'0'},
            }}
          >
            <div className='inline feature '>Our Key Features</div><br/>
            <Box 
              sx={{
                fontSize:{md:'16px', xs:'11px'},
                color: '#ADA8C3',
                textAlign: 'center',
                fontFamily: 'Montserrat',
              }}
            >
              Unleashing Limitless Potential in the Dynamic DeFi Universe
            </Box>
          </Box>
          <Box
            sx={{
              display:'flex',
              flexDirection:{ md:'row', xs:'column-reverse'},
              justifyContent:{md:'space-around', xs:'center'},
              mt:{md:'48px', xs:'15px'}
            }}
            className="items-center w-full"
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
              mt:{md:'48px', xs:'10px'}
            }}
            className="items-center w-full"
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
              flexDirection:{ md:'row', xs:'column-reverse'},
              justifyContent:{md:'space-around', xs:'center'},
              mt:{md:'48px', xs:'10px'}
            }}
            className="items-center w-full"
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
            sx={{
              mt:{md:'150px', xs:'50px'}
            }}
            className=' text-center '
          >
            <div className='inline feature'>How it works</div><br/>
            <Box 
              sx={{
                fontSize:{md:'16px', xs:'11px'}
              }}
            >Empowering Users to Predict, Engage, and Earn in a Few Simple Steps</Box>
          </Box>
          <Box 
            sx={{
              px:{xs:'10px', md:'160px'},
              mt:{xs:'30px', md:'96px'}
          }}>
            <img className='flex w-auto mx-auto scale-110' src='images/movie.png'></img>
          </Box>
          <Box 
            sx={{
              display:'flex',
              flexDirection:{ md:'row', xs:'column-reverse'},
              justifyContent:{md:'space-around', xs:'center'},
              mt:{md:'112px', xs:'0'}
            }}
            className="items-center w-full"
          >
            <Box
              sx={{
                ml:{md:'96px', xs:'0'}
              }}
              className='flex flex-col justify-around w-full md:max-w-xl'
            >
              <Description isFinance={true} title={description[3].title} subTitle1={description[3].subTitle1} subTitle2={description[3].subTitle2}/>
              <Box 
                sx={{
                  my:{md:'', xs:'30px'},
                  display:'flex',
                  flexDirection:'row',
                  justifyContent:'flex-start',
                  alignItems:'center'
                }}>
                  <GetButton name={getbutton[3].name}/>
                  <Typography 
                    sx={{
                      color:'#00FC65', 
                      fontFamily:'Syne-SemiBold',
                      marginLeft:'20px', 
                      mr:'5px',
                      fontSize:{md:'14px', xs:'12px'}
                    }}>Learn</Typography>
                  <Box 
                    sx={{
                      backgroundImage:'url("icons/arrow3.png")', width:{md:'18px', xs:'14px'}, 
                      height:{md:'14px', xs:'11px'}
                    }}></Box>
              </Box>
            </Box>
            <Box>
              <Picture square={picture[3].square} bac={picture[3].bac} className={'bg-cover scale-125 pt-16'} />
            </Box>            
          </Box>
          <Box sx={{
            display:{md:'flex', xs:'none'},
            flexDirection:'row',
            justifyContent:'space-around',
          }}>
            <Box 
              sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems: 'center'       
              }}
              className="w-1/3 text-left"
            >
              <Box>
                <Typography
                  sx={{
                    color: '#ADA8C3',
                    fontFamily: 'Montserrat-Medium',
                    fontSize: {xs:'11px', md:'16px'},
                    lineHeight: '25px',
                    textTransform: 'capitalize',
                  }}
                >Circulating Supply</Typography>
                <Typography
                  sx={{
                    color: '#FFF',
                    fontFamily: 'Syne-SemiBold',
                    fontSize: {xs:'18px', md:'28px'},
                    letterSpacing: '0.98px',
                    textTransform: 'capitalize',
                  }}
                >205,682,922</Typography>
              </Box>
            </Box>
            <Box sx={{borderRight:'1px solid #42355B'}}></Box>
            <Box 
              sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems: 'center'       
              }}
              className="w-1/3 text-left"
            >
              <Box>
                <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat-Medium',
                  fontSize: {xs:'11px', md:'16px'},
                  lineHeight: '25px',
                  textTransform: 'capitalize',
                }}
                >Total supply</Typography>
                <Typography
                  sx={{
                    color: '#FFF',
                    fontSize: {xs:'18px', md:'28px'},
                    fontFamily: 'Syne-SemiBold',
                    letterSpacing: '0.98px',
                    textTransform: 'capitalize',
                  }}
                >387,756,414</Typography>
              </Box>
            </Box>
            <Box sx={{borderRight:'1px solid #42355B'}}></Box>
            <Box 
              sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems: 'center'       
              }}
              className="w-1/3 text-left"
            >
              <Box>
                <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat-Medium',
                  fontSize: {xs:'11px', md:'16px'},
                  lineHeight: '25px',
                  textTransform: 'capitalize',
                }}
                >Max Supply</Typography>
                <Typography
                  sx={{
                    color: '#FFF',
                    fontFamily: 'Syne-SemiBold',
                    fontSize: {xs:'18px', md:'28px'},
                    letterSpacing: '0.98px',
                    textTransform: 'capitalize',
                  }}
                >750,000,000</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{
            display:{md:'flex', xs:'none'},
            flexDirection:'row',
            justifyContent:'space-around',
            marginTop:'60px',
            marginBottom:'100px'
            }}>
            <Box 
              sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems: 'center'       
              }}
              className="w-1/3 text-left"
            >
              <Box>
                <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat-Medium',
                  fontSize: {xs:'11px', md:'16px'},
                  lineHeight: '25px',
                  textTransform: 'capitalize',
                }}
                >Market cap</Typography>
                <Typography
                  sx={{
                    color: '#FFF',
                    fontFamily: 'Syne-SemiBold',
                    fontSize: {xs:'18px', md:'28px'},
                    letterSpacing: '0.98px',
                    textTransform: 'capitalize',
                  }}
                >$290 million</Typography>
              </Box>
            </Box>
            <Box sx={{borderRight:'1px solid #42355B'}}></Box>
            <Box 
              sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems: 'center'       
              }}
              className="w-1/3 text-left"
            >
              <Box>
                <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat-Medium',
                  fontSize: {xs:'11px', md:'16px'},
                  lineHeight: '25px',
                  textTransform: 'capitalize',
                }}
                >Burned to date</Typography>
                <Typography
                  sx={{
                    color: '#FFF',
                    fontFamily: 'Syne-SemiBold',
                    fontSize: {xs:'18px', md:'28px'},
                    letterSpacing: '0.98px',
                    textTransform: 'capitalize',
                  }}
                >868,132,226</Typography>
              </Box>
            </Box>
            <Box sx={{borderRight:'1px solid #42355B'}}></Box>
            <Box 
              sx={{
                display:'flex',
                flexDirection:'column',
                alignItems: 'center'       
              }}
              className="w-1/3 text-left"
            >
              <Box>
                <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat-Medium',
                  fontSize: {xs:'11px', md:'16px'},
                  lineHeight: '25px',
                  textTransform: 'capitalize',
                }}
                >Current emissions</Typography>
                <Typography
                  sx={{
                    color: '#FFF',
                    fontFamily: 'Syne-SemiBold',
                    fontSize: {xs:'18px', md:'28px'},
                    letterSpacing: '0.98px',
                    textTransform: 'capitalize',
                  }}
                >4.55/block</Typography>
              </Box>
            </Box>
          </Box>
          {accountants.map((item) => (
            <Box 
              key = {item[0].type1}
              sx={{
                display:{xs:'flex', md:'none'},
                flexDirection:'row',
                justifyContent:'space-between',
                mb:'50px'
            }}>
              <Box 
                sx={{
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems: 'center'       
                }}
                className="w-1/3 text-left"
              >
                <Box>
                  <Typography
                    sx={{
                      color: '#ADA8C3',
                      fontFamily: 'Montserrat-Medium',
                      fontSize: {xs:'11px', md:'16px'},
                      lineHeight: '25px',
                      textTransform: 'capitalize',
                    }}
                  >{item[0].type1}</Typography>
                  <Typography
                    sx={{
                      color: '#FFF',
                      fontFamily: 'Syne-SemiBold',
                      fontSize: {xs:'18px', md:'28px'},
                      letterSpacing: '0.98px',
                      textTransform: 'capitalize',
                    }}
                  >{item[0].amount1}</Typography>
                </Box>
              </Box>
              <Box sx={{borderRight:'1px solid #42355B'}}></Box>
              <Box 
                sx={{
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems: 'center'       
                }}
                className="w-1/3 text-left"
              >
                <Box>
                  <Typography
                  sx={{
                    color: '#ADA8C3',
                    fontFamily: 'Montserrat-Medium',
                    fontSize: {xs:'11px', md:'16px'},
                    lineHeight: '25px',
                    textTransform: 'capitalize',
                  }}
                  >{item[1].type2}</Typography>
                  <Typography
                    sx={{
                      color: '#FFF',
                      fontSize: {xs:'18px', md:'28px'},
                      fontFamily: 'Syne-SemiBold',
                      letterSpacing: '0.98px',
                      textTransform: 'capitalize',
                    }}
                  >{item[1].amount2}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
          <Box
            sx={{
              display: 'flex',
              textAlign:'center',
              width:'auto',
              mt:{md:'150px', xs:'30px'},
              mx:{ xs:'-10px'},
              mb: {md:'100px',xs: '10px'},
              padding:{md:'3rem', xs:'1.5rem'},
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
                fontFamily: 'Syne-Bold',
                lineHeight:{md:'52px', xs:'normal'},
                fontSize: {xs:'18px', md:'48px'},
                letterSpacing: '-0.4px',
                width:{md:'80%', xs:'95%'}
              }}
            >
              Stay Updated, Engage, and Get Support in our Official Telegram Group
            </Typography>
            <Typography 
              sx={{
                color: '#0A0A0B',
                fontFamily: 'Inter-Medium',
                fontSize: {xs:'12px', md:'20px'},
                lineHeight: {md:'32px', xs:'normal'},
                width:{md:'70%', xs:'95%'},
                marginTop: {md:'10px', xs:'0'}
              }}
            >Join the Bonus DeFi Telegram Community and Connect with Fellow Enthusiasts</Typography>
            <Typography
              sx={{
                color: '#0A0A0B',
                fontFamily: 'Syne-Bold',
                fontSize: {md:'14px', xs:'11px'},
                padding: '16px 32px',
                alignItems: 'center',
                borderRadius: '144px',
                background: '#FFF',
                marginTop:{md:'20px', xs:'10px'},
                marginBottom:{xs:'10px'}
              }}
            >Join Telegram</Typography>
          </Box>
        </Box>
      </Box>   
    </div>
  )
}
export default Content;