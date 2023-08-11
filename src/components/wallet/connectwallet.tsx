import { Button, Stack} from '@mui/material';

// eslint-disable-next-line @typescript-eslint/ban-types
export default function ConnectWallet({ handleConnect } : { handleConnect: () => {} }){
  return(
    <Stack spacing={2} direction='row' mr='40px' ml={'0.5rem'}>
      <Button
        variant='text'
        className='font-[arial] text-[#0A0A0B] text-md font-bold leading-5 tracking-wide text-center bg-[#00FC65] h-[41px] p-4 sm:px-8 rounded-full normal-case hover:bg-[#00FC65] whitespace-nowrap'
        onClick={() => handleConnect()}
      >
        <span>Connect Wallet</span>
      </Button>
    </Stack>
  )
}