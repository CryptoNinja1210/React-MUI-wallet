import { Box } from "@mui/material";
import '../../App.css'

interface PictureProps {
  square: string;
  bac?: string;
  className?: string
}

const Square: React.FC<PictureProps> = ({
  square,
  bac,
  className,
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
          backgroundImage: `url(${bac})`
        }}
        className={`${className} w-[253px] md:w-[28.75rem] h-[253px] md:h-[28.75rem]`}
      >
        <img className="square" src={square}></img>
      </Box>
    </Box>
  )
}

export default Square;
