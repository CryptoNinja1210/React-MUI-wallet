import {Box, Typography} from '@mui/material';

interface LiveSlideProps {
  brand: string;
  title: string;
  ending: string;
  deadline: string;
  person: string;
  count: number;
}

const LiveSlide: React.FC<LiveSlideProps> = ({
  brand,
  title,
  ending,
  deadline,
  person,
  count
}) =>{
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems:'center', 
        gap: {md:'13px', xs:'5px'}, 
        width: {md:'287px', xs:'190px'}, 
        height: {md:'121px', xs:'76px'}, 
        background: '#18191C', 
        borderRadius: '12px', 
        py:{xs:'5px', md:'24px'}, 
        px:{xs:'5px', md:'16px'} 
      }}
    >
      <img className='brand' src={brand} alt="diamond" />
      <Box>      
        <Typography 
          sx={{
            fontSize: {md:'15px', xs:'11px'},
            fontFamily: "montserrat",
            lineHeight: '20px',
            textAlign: 'left',
            letterSpacing:'0.07rem',
        }}>
          {title}
        </Typography>
        <Box 
          sx={{ 
            mt:{md:'15px', xs:'0'}, 
            display:'flex', 
            flexDirection:'row', 
            alignItems: 'center'
            }}>
          <Box 
            sx={{
              display:'flex', 
              flexDirection:'column', 
              mr:{md:'1.5rem', xs:'5px'}
            }}>
            <Typography 
              sx={{
                fontSize: {md:'11px', xs:'9px'},
                fontFamily: "montserrat",
                lineHeight: '15px',
                letterSpacing: '-0.01em',
                color: '#8699B0',
            }}>
              {ending}
            </Typography>
            <Typography
              sx={{
                fontSize: {md:'13px', xs:'11px'},
                fontFamily: "montserrat",
                lineHeight: '17px',
                letterSpacing:'0.07rem',
            }}>
              {deadline}
            </Typography>
          </Box>
          <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', mx:'10px'}}>
            <Box
              sx={{
                width:{xs:'15px', md:'24px'}
              }}
            >
              <img src={person} alt="person" />
            </Box>
            <Typography 
              style={{ marginLeft:'5px'}}
              sx={{
                fontSize:{md:'13px', xs:'11px'}
              }}
              >
                {count}
            </Typography>
          </Box>
        </Box>
    </Box>
  </Box>
  );
};

export default LiveSlide;