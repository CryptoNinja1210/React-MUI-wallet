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
      className={`md:mb-0 mb-[-60px] md:mx-12 mx-6 ${addrInfo? 'flex' : 'hidden'} flex-col md:flex-row justify-around items-center rounded-xl md:py-12 py-6 space-y-5 md:space-y-0`}
    >
      <Box className="flex flex-row items-center justify-between">
        <Box>
          <img src="images/Ellipse 43.svg" className="md:w-[105px] md:h-[105px] w-[49px] h-[49px]"/>
        </Box>
        <Typography
          sx={{
            color: '#000',
            fontFamily: 'Montserrat-SemiBold',
            fontSize: {md:'28px', xs:'16px'},   
            lineHeight: '24px',
            textAlign: 'center'
          }}
        >
          Connected with {addrInfo && addrInfo.slice(0, 7) + ' ...'}
        </Typography>        
      </Box>
      <Box 
        sx={{
          height:{md:'100px', xs:'50px'},
          width:{xs:'85%', md:'45%'}, 
          marginX:{xs:'25px'}, 
          display:'flex', 
          flexDirection:'row', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          px: {md:'40px', xs:'20px'}, 
          borderRadius:'12px', 
          background:'#060607', 
          py:'10px'
          }}>
        <Box sx={{display:'flex', flexDirection: 'column', alignItems:'start'}}>
          <Typography 
            sx={{ 
              fontFamily: 'Montserrat-Medium', 
              fontSize:{md:'15px', xs:'14px'}, 
              lineHeight: '16.568px'
              }}
            >
              $0
            </Typography>
          <Typography 
            sx={{
              color:'#8699B0', 
              fontSize: {md:'12px',xs:'11px'}, 
              fontFamily:'Montserrat-Medium', 
              letterSpacing:'-0.12px'
              }}
            >
              to collect
            </Typography>
        </Box>
        <Box 
          className='hover:bg-[#00FC65] hover:text-[#060607] hover:font-bold' 
          sx={{ 
            background:'none', 
            color:'#00FC65', 
            borderRadius:'20px', 
            border:'1px solid #00FC65', 
            px: {md:'33px', xs:'18px'}, 
            py: {md:'10px', xs:'6px'}, 
            fontSize: {md:'14px', xs:'11px'}, 
            fontFamily:'Syne-Bold', 
            letterSpacing: '0.5px', 
            lineHeight: {md:'20px', xs:'normal'}, 
            leadingTrim:'both'
          }}>
            Buy Token
        </Box>
      </Box>
    </Box>
  )
}

export default AfterConnect;
