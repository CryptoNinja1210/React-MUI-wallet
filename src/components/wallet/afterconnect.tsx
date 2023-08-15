import { Box, Typography } from "@mui/material";

interface AddType {
  addrInfo: string;
}

const AfterConnect = ({ addrInfo }: AddType) => {
  return (
    <Box 
      className={`mt-[100px] mx-12 ${addrInfo? 'flex' : 'hidden'} flex-col md:flex-row justify-around items-center rounded-xl backdrop-blur-sm bg-gradient-to-r from-lime-400 via-lime-500 to-green-500 py-12 mx-8 space-y-5 md:space-y-0 space-x-5 p-5`}
    >
      <img src="images/ellipse.svg" style={{width: '105px', height:'105px'}}/>
      <Typography 
        sx={{
          color: '#000',
          fontFamily: 'Montserrat',
          fontSize: '28px',   
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '24px', /* 85.714% */
          textAlign: 'center'
        }}
      >
        Connected with {addrInfo && addrInfo.slice(0, 7) + ' ...'}
      </Typography>
      <Box sx={{width:{xs:'90%', md:'45%'}, marginX:{xs:'25px'}, height:'100px', display:'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', px:'40px', borderRadius:'12px', background:'#060607', py:'10px'}}>
        <Box sx={{display:'flex', flexDirection: 'column', alignItems:'start'}}>
          <Typography sx={{ fontFamily: 'Montserrat', fontSize: '15px', fontWeight: '500', lineHeight: '16.568px'}}>$0</Typography>
          <Typography sx={{color:'#8699B0', fontSize:'12px', fontFamily:'Montserrat', letterSpacing:'-0.12px'}}>to collect</Typography>
        </Box>
        <Box sx={{ background:'none', color:'#00FC65', borderRadius:'20px', border:'1px solid #00FC65', px:'33px', py:'10px', fontSize:'14px', fontFamily:'Syne', letterSpacing: '0.5px', lineHeight:'20px', leadingTrim:'both'}}>Buy Token</Box>
      </Box>
    </Box>
  )
}

export default AfterConnect;
