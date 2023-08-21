import { Box, Typography } from '@mui/material';

interface UpcomingSlideProps {
  plugincolor: string;
  title: string;
  description: string;
  price: string;
  deadline: string;
  card: string;
}

const UpcomingSlide: React.FC<UpcomingSlideProps> = ({
  plugincolor,
  title,
  deadline,
  description,
  price,
  card,
}) => {

  return (
    <Box
      sx={{
        display: 'flex',
        marginLeft: {md:'0', xs:'-40px'},
        marginTop: {md:'0', xs:'-50px'},
        marginBottom: {md:'0', xs:'-50px'},
        flexDirection: 'column',
        textAlign:'left',
        backgroundImage: `${card}`,
        scale:{md:'1', xs:'0.7'},
        backgroundRepeat: 'no-repeat',
        width:'288px',
        height: '351px',
        px: '24px',
        py: '33px',
        fill: 'var(--neutral-08, #0E0C15)',
        strokeWidth: '1.5px',
        stroke: 'var(--stroke-style-style-3, rgba(255, 255, 255, 0.15))',
      }}
    >
      <Box>
        <img
          src="icons/electrical-plug1.svg"
          style={{
            color:'white',
            width: '36px',
            height: '36px',
            padding: '9px',
            borderRadius: '9px',
            background: 'white',
            backgroundColor: plugincolor
          }}
        />
      </Box>
      <Typography
        sx={{
          color: 'var(--neutral-01100, #FFF)',
          fontFamily: 'Montserrat-SemiBold',
          fontSize: '18px',
          lineHeight: '27px',
          paddingTop: '20px',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          overflow: 'hidden',
          color: 'var(--neutral-03, #ADA8C3)',
          textOverflow: 'ellipsis',
          fontFamily: 'Montserrat',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '100',
          lineHeight: '18px',
          paddingTop: '5px',
          height: '55px',
        }}
      >
        {description}
      </Typography>
      <Box
        sx={{
          mt: '20px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            sx={{
              color: '#999',
              fontFamily: 'Montserrat',
              fontSize: '12.049px',
              fontStyle: 'normal',
              lineHeight: '15.062px',
              letterSpacing: '-0.12px',
            }}
          >
            ETH/BTC
          </Typography>
          <Typography
            sx={{
              color: '#FFF',
              fontFamily: 'Montserrat-Medium',
              fontSize: '13.556px',
              lineHeight: '16.568px',
              pt: '5px',
            }}
          >
            {price}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: '#999',
              textAlign: 'right',
              fontFamily: 'Montserrat',
              fontSize: '12.049px',
              lineHeight: '15.062px',
              letterSpacing: '-0.12px',
              pt: '5px',
            }}
          >
            Ending in
          </Typography>
          <Typography
            sx={{
              color: '#FFF',
              fontFamily: 'Montserrat-Medium',
              fontSize: '13.556px',
              lineHeight: '16.568px',
              pt: '5px',
            }}
          >
            {deadline}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
        <Typography
          sx={{
            color: '#999',
            fontFamily: 'Montserrat',
            fontSize: '12.049px',
            lineHeight: '15.062px',
            letterSpacing: '-0.12px',
            paddingBottom: '5px',
          }}
        >
          Amount
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography
            sx={{
              color: '#999',
              fontFamily: 'Montserrat',
              fontSize: '10px',
              border: '0.845px solid #938AB4',
              background: '#16131E',
              paddingLeft: '10px',
              paddingRight: '31px',
              py: '10px',
              borderRadius: '20px',
            }}
          >
            Put amount
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography
              sx={{
                color: '#00FC65',
                fontFamily: 'Syne-Bold',
                fontSize: '12px',
                lineHeight: '15px',
                letterSpacing: '0.42px',
                margin: 'auto',
              }}
            >
              Prediction Now
            </Typography>
            <img src="icons/chevron-right.svg" style={{ width: '18px' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default UpcomingSlide;