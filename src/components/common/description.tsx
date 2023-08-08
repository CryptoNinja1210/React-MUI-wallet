import { Box, Typography } from "@mui/material";

interface DescriptionProps {
  title: string;
  subTitle1: string;
  subTitle2: string;
}

const Description: React.FC<DescriptionProps> = ({
  title,
  subTitle1,
  subTitle2
}) =>{
  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      width:'33rem',
    }}>
      <Typography
        sx={{
          color: '#FFF',
          fontFamily: 'Syne',
          fontSize: '36px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '44px', /* 122.222% */
          textTransform: 'capitalize',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Montserrat',
          marginTop:'30px',
          color: '#ADA8C3',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '25px',
        }}
      >
        {subTitle1}
      </Typography>
      <Typography
        sx={{
          fonFamily: 'Montserrat',
          marginTop:'30px',
          color: '#ADA8C3',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '25px',
        }}
      >
        {subTitle2}
      </Typography>
    </Box>
  )
}

export default Description;


