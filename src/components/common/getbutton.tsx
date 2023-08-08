import { Box, Typography } from "@mui/material";

interface GetButtonProps {
  name: string;
}

const GetButton: React.FC<GetButtonProps> = ({
  name
}) =>{
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      padding: '16px 32px',
      justifyContent: 'space-around',
      width:'180px',
      alignItems: 'center',
      gap: '8px',
      borderRadius: '144px',
      background: '#00FC65',
    }}>
      <Typography
        sx={{
          color: '#0A0A0B',
          fontFamily: 'Syne',
          textAlign:'center',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: 'normal',
        }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          width: '18px',
          height: '14px',
          backgroundImage: 'url("icons/arrow2.png")'
        }}
      />
    </Box>
  )
}

export default GetButton;


