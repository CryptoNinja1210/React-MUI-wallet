import {Box, Typography} from '@mui/material';

function Footer(){  
  return(
    <Box sx={{pt:'30px', background: '#0A0A0B', display:'flex', flexDirection:'column'}}>
      <Box sx={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        gap:'2rem',
        flexWrap:{xs:'wrap', md:'nowrap'},
        mx:{xs:'2rem', md:'100px'},
        alignItems:'flex-start'
      }}>
        <Box
          className='flex flex-row w-full max-w-[1536px] justify-around'
        >
          <Box sx={{ display:'flex', flexDirection:'column'}}>
            <Box
              sx={{
                backgroundImage:'url("images/bonus.png")',
                width: '111px',
                height: '61px',
                marginBottom:'30px'
              }}
            >

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
                width: '356px'
              }}
            >
              Revolutionize your project's success in the DeFi ecosystem and captivate your community with Bonus DeFi's groundbreaking features and organic marketing strategies.
            </Typography>
          </Box>
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
        </Box>
      </Box>
      <hr className='hr' style={{margin:'30px 100px 30px 100px'}}/>
      <Box 
        sx={{
          mx:'auto', 
          mb:'40px', 
          display:'flex', 
          flexDirection:{md:'row',xs:'column-reverse'}, 
          justifyContent:'space-between', 
          alignItems:'center',
          gap:'1rem'
        }}
        className='flex flex-row w-full max-w-[1500px] justify-between'
      >
        <Typography
          sx={{
            color: '#ADA8C3',
            fontFamily: 'Montserrat',
              fontSize: {xs:'12px', md:'18px'}}}>
              Copyright © Bonus Defi 2023
        </Typography>
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', gap: { xs:'35px', md:'10px'}}}>
          <Box sx={{width: '24px', height: '24px',backgroundImage:'url("icons/facebook.png")', borderRadius:'8px', border:'1px solid #282D45'}}>            
          </Box>
          <Box sx={{width: '24px', height: '24px',backgroundImage:'url("icons/twitter.png")', borderRadius:'8px', border:'1px solid #282D45'}}>            
          </Box>
          <Box sx={{width: '24px', height: '24px',backgroundImage:'url("icons/linkedin.png")', borderRadius:'8px', border:'1px solid #282D45'}}>            
          </Box>
          <Box sx={{width: '24px', height: '24px',backgroundImage:'url("icons/instagram.png")', borderRadius:'8px', border:'1px solid #282D45'}}>            
          </Box>
        </Box>
      </Box>
    </Box>   
  )
}
export default Footer;