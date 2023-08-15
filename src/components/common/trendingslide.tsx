import { Box, Typography } from '@mui/material';

interface TrendingSlideProps {
  trendbac: string;
  title: string;
  description: string;
}

const TrendingSlide: React.FC<TrendingSlideProps> = ({
  trendbac,
  title,
  description,
}) => {
  return (
    <div className='group'>
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          alignItems: 'start', 
          backgroundColor: `${trendbac}`,
          width: '398px',
          height: '250px',
          px: '40px',
          py: '40px',
          overflow: 'hidden',
          borderRadius: '10px',
        }}
        className="hover:drop-shadow-md shadow-inner hover:shadow-white"
      >
        <Box sx={{hover:"filter: 'drop-shadow(0px 4px 16px rgba(176, 255, 47, 0.30))'"}} >
          <img
            src="icons/electrical-plug2.svg"
            style={{
              width: '36px',
              height: '36px',
              padding: '9px',
              borderRadius: '9px',
              backgroundColor: 'white',
            }}
          />
        </Box>
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '24px',
            fontWeight: '800',
            lineHeight: '27px',
            paddingTop: '20px',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            overflow: 'hidden',
            color: '#fff',
            textOverflow: 'ellipsis',
            fontFamily: 'Montserrat',
            fontSize: '14px',
            fontWeight: '100',
            lineHeight: '18px',
            paddingTop: '15px',
          }}
          className='z-50'
        >
          {description}
        </Typography>
        <Box>
          <img
            src="images/Glossy.png"
            style={{
              position: 'absolute',
              width: '152px',
              height: '150px',
              right: '10px',
              top:'50px',
            }}
            className='opacity-40 group-hover:scale-[170%] group-hover:rotate-[30deg] transition-transform duration-100 ease-in-out'
          />
        </Box>
      </Box>
    </div>
  )
};

export default TrendingSlide;
