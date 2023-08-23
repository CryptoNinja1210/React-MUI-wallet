import {Box, Typography} from '@mui/material';

function Footer(){  
  return(
    <Box 
      className='py-8 flex flex-col z-50'
      sx={{
        paddingX:{ xs:'30px', lg:'50px', xl:'15rem'},
        background:{md:'#15151E', xs:'#0A0A0B'}
      }}
    >
      <Box 
        sx={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          gap:'2rem',
          flexWrap:{xs:'wrap', md:'nowrap'},
          alignItems:'flex-start'
        }}
        className='w-full'
      >
        <Box
          className='flex flex-col lg:flex-row w-full max-w-[1920px] justify-between mx-auto'
        >
          <Box 
            className='flex flex-col lg:justify-start items-start mb-5' 
            sx={{
              width:{md:'70%', xs:'100%'},
            }}>
            <Box 
              sx={{
                width:{md:'60%', sm:'60%', xs:'100%'}
              }}
            >
              <Box className='mb-5'>
                <img src='images/image 1356.png' alt='' className='h-[45px] w-[52px] md:h-[61px] md:w-[70px] object-cover'/>
              </Box>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  fontSize: {md:'14px', xs:'11px'},
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: {md:'21px', xs:'16px'},
                  textTransform: 'capitalize',
                }}
              >
                Revolutionize your project's success in the DeFi ecosystem and captivate your community with Bonus DeFi's groundbreaking features and organic marketing strategies.
              </Typography>
            </Box>
          </Box>
          <div className='flex flex-row lg:justify-around justify-between w-full items-center '>
            <Box sx={{ display:'flex', flexDirection:'column'}}>
              <Typography
                sx={{
                  color: '#FFF',
                  fontFamily: 'Syne-Bold',
                  fontSize: {md:'20px', xs:'16px'},
                  lineHeight: '32px',
                  letterSpacing: '-0.6px',
                  marginBottom:{md:'30px', xs:'10px'}  

                }}
              >
                Pages
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: {md:'16px', xs:'13px'}
                }}
                >
                  Home
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: {md:'16px', xs:'13px'}
                }}
                >
                  Prediction
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: {md:'16px', xs:'13px'}
                }}
                >
                  Contract Information
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: {md:'16px', xs:'13px'}}}
                >
                  Features
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: {md:'16px', xs:'13px'}}}
                >
                  How It Works
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: {md:'16px', xs:'13px'}}}
                >
                  FAQS
              </Typography>
              
            </Box>
            <Box 
              className='flex flex-col justify-start items-start mt-0 mb-auto'
            >
              <Typography
                sx={{
                  color: '#FFF',
                  fontFamily: 'Syne-Bold',
                  fontSize: {md:'20px', xs:'16px'},
                  lineHeight: '32px',
                  letterSpacing: '-0.6px',
                  marginBottom:{md:'30px', xs:'10px'}                  
                }}
              >
                  Legal
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: {md:'16px', xs:'13px'}}}
                >
                  Privacy Policy
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: {md:'16px', xs:'13px'}}}
                >
                  Terms of Services
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: {md:'16px', xs:'13px'}}}
                >
                  About Us
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: {md:'16px', xs:'13px'}}}
                >
                  Contact Information
              </Typography>
            </Box>
          </div>
        </Box>
      </Box>
      <hr className='hr' style={{margin:'30px 0px 30px 0px', border:'1px solid #282D45'}}/>
      <Box 
        sx={{
          mx:'auto', 
          display:'flex', 
          flexDirection:{md:'row',xs:'column-reverse'}, 
          justifyContent:'space-around ', 
          alignItems:'center',
          gap:'1rem'
        }}
        className=' w-full max-w-[1536px] justify-between'
      >
        <Typography
          sx={{
            color: '#ADA8C3',
            fontFamily: 'Montserrat',
            fontSize: {xs:'12px', md:'18px'}
          }}
          >
              Copyright © Bonus Defi 2023
        </Typography>
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', gap: { xs:'35px', md:'15px'}}}>
          <Box className='p-[5px] rounded-[8px] border border-[#282D45] '>
            <img src='icons/facebook.png' className='w-4 h-4 lg:w-6 lg:h-6'></img>            
          </Box>
          <Box className='p-[5px] rounded-[8px] border border-[#282D45] '>
            <img src='icons/twitter.png' className='w-4 h-4 lg:w-6 lg:h-6 '></img>            
          </Box>
          <Box className='p-[5px] rounded-[8px] border border-[#282D45] '>
            <img src='icons/linkedin.png' className='w-4 h-4 lg:w-6 lg:h-6 '></img>            
          </Box>
          <Box className='p-[5px] rounded-[8px] border border-[#282D45] '>
            <img src='icons/instagram.png' className='w-4 h-4 lg:w-6 lg:h-6 '></img>            
          </Box>        
        </Box>
      </Box>
    </Box>   
  )
}
export default Footer;