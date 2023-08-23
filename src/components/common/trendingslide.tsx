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
          width: {md:'398px', xs:'153px'},
          height: {md:'270px', xs:'124px'},
          px: {md:'40px', xs:'15px'},
          py: {md:'40px', xs:'15px'},
          overflow: 'hidden',
          borderRadius: '4px',
        }}
        className="hover:drop-shadow-md shadow-inner hover:shadow-white"
      >
        <Box>
          <Box
            sx={{
              position: 'absolute',
              width: {md:'152px', xs:'58px'},
              height: {md:'150px', xs:'58px'},
              right: '5px',
              top:{md:'60px', xs:'30px'},
            }}
            className='
              mix-blend-screen
              group-hover:scale-[170%] 
              group-hover:rotate-[30deg] 
              transition-transform 
              duration-100 
              ease-in-out
              brightness-150
            '
          >
            <img src='images/Glossy.png' alt=''/> 
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              position: 'absolute',
              width: {md:'152px', xs:'58px'},
              height: {md:'150px', xs:'58px'},
              right: '5px',
              top:{md:'60px', xs:'30px'},
              backgroundRepeat: 'no-repeat',
            }}
            className='
              flex justify-center items-center
              mix-blend-soft-light
              opacity-30
              group-hover:scale-[170%] 
              group-hover:rotate-[30deg] 
              transition-transform 
              duration-100 
              ease-in-out
              brightness-150
            '
          >
            <img src='images/Glossy.png' alt=''/> 
          </Box>
        </Box>
        <Box sx={{display:{md:'block', xs:'none'}}}>
          <Box
            sx={{
              position: 'absolute',
              width: {md:'152px', xs:'58px'},
              height: {md:'150px', xs:'58px'},
              right: '5px',
              top:{md:'60px', xs:'30px'},
              backgroundRepeat: 'no-repeat',
            }}
            className='
              flex justify-center items-center
              mix-blend-soft-light
              group-hover:scale-[170%] 
              group-hover:rotate-[30deg] 
              transition-transform 
              duration-100 
              ease-in-out
              brightness-150
            '
          >
            <img src='images/Glossy_bridge.png' alt=''/> 
          </Box>
        </Box>
        <Box sx={{hover:"filter: 'drop-shadow(0px 4px 16px rgba(176, 255, 47, 0.30))'"}} >
          <Box>
            <img
              className='md:w-9 w-[14px] md:h-9 h-[14px] md:p-[9px] p-[3px] md:rounded-[9px] rounded-[3px] bg-white'
              src="icons/electrical-plug2.svg" />
          </Box>
        </Box>
        <Typography
          sx={{
            fontFamily: 'Montserrat-SemiBold',
            lineHeight: {md:'27px', xs:'normal'},
            paddingTop: {md:'20px', xs:'5px'},
            fontSize:{md:'24px', xs:'12px'}
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
            fontSize: {md:'14px', xs:'9px'},
            lineHeight: {md:'24px', xs:'normal'},
            paddingTop: {md:'15px', xs:'5px'},
            paddingRight:{md:'40px', xs:'5px'}
          }}
          className='z-50'
        >
          {description}
        </Typography>
      </Box>
    </div>
  )
};

export default TrendingSlide;
