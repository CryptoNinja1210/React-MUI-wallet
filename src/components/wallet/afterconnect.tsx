import { Box, Typography } from "@mui/material";

interface AddType {
  addrInfo: string;
}

const AfterConnect = ({ addrInfo }: AddType) => {
  // console.log(netInfo)
  return (
    <Box 
      sx={{ 
        marginTop: '100px', 
        marginX: 'auto',
        display: addrInfo? 'flex' : 'none',
        flexDirection: 'row',
        width: '85%',
        padding:'49px 40px',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '56px',
        borderRadius: '12px',
        background: 'linear-gradient(138deg, rgba(156, 252, 0, 0.90) 0%, rgba(0, 252, 146, 0.90) 100%)',
        backdropFilter: 'blur(32px)',
      }}>
        <img src="images/ellipse.svg" style={{width: '105px', height:'105px'}}/>
        <Typography 
          sx={{
            color: '#000',
            fontFamily: 'Montserrat',
            fontSize: '28px',   
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '24px', /* 85.714% */
            // whiteSpace: 'none'
          }}
        >
          Connected with {addrInfo && addrInfo.slice(0, 7) + ' ...'}
        </Typography>
        <Box sx={{width:'45%',height:'100px', display:'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', px:'40px', borderRadius:'12px', background:'#060607', py:'10px'}}>
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
