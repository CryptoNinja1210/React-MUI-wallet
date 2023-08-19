import { Box, Typography } from "@mui/material";

interface AddType {
  addrInfo: string;
}

const AfterConnect = ({ addrInfo }: AddType) => {
  return (
    <Box 
      sx={{
        background: 'linear-gradient(138deg, rgba(156, 252, 0, 0.90) 0%, rgba(0, 252, 146, 0.90) 100%)',
        backdropFilter: 'blur(32px)',
      }}
      className={` mx-12 ${addrInfo? 'flex' : 'hidden'} flex-col md:flex-row justify-around items-center rounded-xl py-12 mx-8 space-y-5 md:space-y-0 space-x-5 p-5`}
    >
      <img src="images/ellipse.svg" style={{width: '105px', height:'105px'}}/>
      <Typography 
        sx={{
          color: '#000',
          fontFamily: 'Montserrat-SemiBold',
          fontSize: '28px',   
          lineHeight: '24px',
          textAlign: 'center'
        }}
      >
        Connected with {addrInfo && addrInfo.slice(0, 7) + ' ...'}
      </Typography>
      <Box sx={{width:{xs:'90%', md:'45%'}, marginX:{xs:'25px'}, height:'100px', display:'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', px:'40px', borderRadius:'12px', background:'#060607', py:'10px'}}>
        <Box sx={{display:'flex', flexDirection: 'column', alignItems:'start'}}>
          <Typography sx={{ fontFamily: 'Montserrat-Medium', fontSize: '15px', lineHeight: '16.568px'}}>$0</Typography>
          <Typography sx={{color:'#8699B0', fontSize:'12px', fontFamily:'Montserrat-Medium', letterSpacing:'-0.12px'}}>to collect</Typography>
        </Box>
        <Box className='hover:bg-[#00FC65] hover:text-[#060607] hover:font-bold' sx={{ background:'none', color:'#00FC65', borderRadius:'20px', border:'1px solid #00FC65', px:'33px', py:'10px', fontSize:'14px', fontFamily:'Syne-Bold', letterSpacing: '0.5px', lineHeight:'20px', leadingTrim:'both'}}>Buy Token</Box>
      </Box>
    </Box>
  )
}

export default AfterConnect;
