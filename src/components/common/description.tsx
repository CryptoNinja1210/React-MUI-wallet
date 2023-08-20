import { Box, Typography } from "@mui/material";

interface DescriptionProps {
  title: string;
  subTitle1: string;
  subTitle2: string;
  isFinance?: boolean;
}

const Description: React.FC<DescriptionProps> = ({
  title,
  subTitle1,
  subTitle2,
  isFinance
}) =>{
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Typography
        sx={{
          color: '#FFF',
          fontFamily: 'Syne-SemiBold',
          fontSize: {xs:'18px', md:'2.25rem'},
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '2.75rem',
          textTransform: 'capitalize',
        }}
        className={`${isFinance ? 'hidden' : 'block'}`}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Syne-Bold',
          fontSize: {xs:'18px', md:'2.25rem'},
          lineHeight: '2.75rem',
          textTransform: 'capitalize',
        }}
        className={`${isFinance ? 'block' : 'hidden'}`}
      >
        {`The Ultimate Decentralized `}
        <span className="text-[#00FC65]">Finance</span>
        {` Platform`}
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


