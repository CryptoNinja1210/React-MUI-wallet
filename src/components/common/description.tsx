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
      // width:'33rem',
    }}>
      <Typography
        sx={{
          color: '#FFF',
          fontFamily: 'Syne',
          fontSize: {xs:'18px', md:'2.25rem'},
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '2.75rem', /* 122.222% */
          textTransform: 'capitalize',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Inter',
          marginTop:'30px',
          color: '#ADA8C3',
          fontSize: {xs:'11px', md:'1rem'},
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '1.5rem',
        }}
      >
        {subTitle1}
      </Typography>
      <Typography
        sx={{
          fonFamily: 'Inter',
          marginTop:'30px',
          marginBottom:'30px',
          color: '#ADA8C3',
          fontSize: {xs:'11px', md:'1rem'},
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '1.5rem',
        }}
      >
        {subTitle2}
      </Typography>
    </Box>
  )
}

export default Description;


