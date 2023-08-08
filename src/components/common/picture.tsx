import { Box } from "@mui/material";

interface PictureProps {
  square: string;
  bac: string;
}

const Square: React.FC<PictureProps> = ({
  square,
  bac
}) =>{
  return (
    <Box sx={{
      display: 'flex',
      padding: '43px 20px',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{ width:'460px', height:'460px', backgroundImage: `url(${bac})`}}>
        <Box
          sx={{
            width: '420px',
            height: '374px',
            backgroundImage: `url(${square})`
          }}
        />
      </Box>
    </Box>
  )
}

export default Square;


