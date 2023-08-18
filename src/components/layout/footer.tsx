import {Box, Typography} from '@mui/material';

function Footer(){  
  return(
    <Box 
      className='py-8 bg-[#15151E] flex flex-col z-50'
      sx={{paddingX:{ xs:'30px', lg:'50px', xl:'15rem'}}}
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
          <Box className='flex flex-col lg:justify-start items-start mb-5' sx={{width:'70%'}}>
            <Box sx={{width:'60%'}}>
              <Box className='mb-5'>
                <img src='images/bonus.png' alt='' className='h-[61px] min-w-[111px] object-cover'/>
              </Box>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '21px',
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
                  fontFamily: 'Syne',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: '32px',
                  letterSpacing: '-0.6px',
                  marginBottom:'30px'

                }}
              >
                Pages
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: '16px'}}
                >
                  Home
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: '16px'}}
                >
                  Prediction
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: '16px'}}
                >
                  Contract Information
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: '16px'}}
                >
                  Features
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: '16px'}}
                >
                  How It Works
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: '16px'}}
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
                  fontFamily: 'Syne',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: '32px',
                  letterSpacing: '-0.6px',
                  marginBottom:'30px'
                  
                }}
              >
                  Legal
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: '16px'}}
                >
                  Privacy Policy
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: '16px'}}
                >
                  Terms of Services
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: '16px'}}
                >
                  About Us
              </Typography>
              <Typography
                sx={{
                  color: '#ADA8C3',
                  fontFamily: 'Montserrat',
                  marginBottom:'10px',
                  fontSize: '16px'}}
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
        className='flex flex-row w-full max-w-[1536px] justify-between'
      >
        <Typography
          sx={{
            color: '#ADA8C3',
            fontFamily: 'Montserrat',
              fontSize: {xs:'12px', md:'18px'}}}>
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