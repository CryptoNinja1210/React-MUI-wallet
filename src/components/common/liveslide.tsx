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
        gap: '13px', 
        width: '287px', 
        height: '121px', 
        background: '#18191C', 
        borderRadius: '12px', 
        py:'24px', 
        px:'16px' 
      }}
    >
      <img className='brand' src={brand} alt="diamond" />
      <Box>      
        <Typography 
          sx={{
            fontSize: '15px',
            fontWeight: '400',
            fontFamily: "montserrat",
            lineHeight: '20px',
            textAlign: 'left',
            letterSpacing:'0.07rem',
        }}>
          {title}
        </Typography>
        <Box sx={{ mt: '15px', display:'flex', flexDirection:'row', alignItems: 'center'}}>
          <Box sx={{display:'flex', flexDirection:'column', mr:'1.5rem'}}>
            <Typography 
              sx={{
                fontSize: '11px',
                fontWeight: '400',
                fontFamily: "montserrat",
                lineHeight: '15px',
                letterSpacing: '-0.01em',
                color: '#8699B0',
            }}>
              {ending}
            </Typography>
            <Typography
              sx={{
                fontSize: '13px',
                fontFamily: "montserrat",
                lineHeight: '17px',
                letterSpacing:'0.07rem',
            }}>
              {deadline}
            </Typography>
          </Box>
          <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', mx:'10px'}}>
            <img src={person} alt="person" />
            <span style={{fontSize:'13px', marginLeft:'5px'}}>{count}</span>
          </Box>
        </Box>
    </Box>
  </Box>
  );
};

export default LiveSlide;