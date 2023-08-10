import { Box } from "@mui/material";
import '../../App.css'

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
      <Box 
        sx={{ 
          width: {xs:'273px', md:'28.75rem'},
          height: {xs:'251px', md:'28.75rem'},
          backgroundImage: `url(${bac})`}}>
        <img className="square" src={square}></img>
      </Box>
    </Box>
  )
}

export default Square;


