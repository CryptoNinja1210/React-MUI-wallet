import { Button, Stack} from '@mui/material';

// eslint-disable-next-line @typescript-eslint/ban-types
export default function ConnectWallet({ handleConnect } : { handleConnect: () => {} }){
  return(
    <Stack spacing={2} direction='row' mr={'5.6rem'} ml={'0.5rem'}>
      <Button
        variant='text'
        sx={{
          fontFamily: 'arial',
          color:' #0A0A0B',
          fontSize: '14px',
          fontWeight: '700',
          lineHeight: '20px',
          letterSpacing: '0.035em',
          textAlign: 'center',
          backgroundColor: '#00FC65 !important',
          width: '191px',
          height: '41px',
          padding: '16px 32px 16px 32px',
          borderRadius: '30px',
          textTransform:'none',    
          '&:hover': {
            backgroundColor: '#00FC65',
          },       
        }}
        onClick={() => handleConnect()}
      >
        Connect Waller
      </Button>
    </Stack>
  )
}