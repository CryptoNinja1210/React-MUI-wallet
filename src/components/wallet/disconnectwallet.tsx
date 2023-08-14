import { Stack} from '@mui/material';
import { HappyProvider } from '@ant-design/happy-work-theme';
import { Button as Button_Antd, ConfigProvider } from 'antd';

// eslint-disable-next-line @typescript-eslint/ban-types
export default function DisconnectWallet({ handleDisconnect } : { handleDisconnect: () => void }){
  return(
    <Stack spacing={2} direction='row' mr={'5.6rem'} ml={'0.5rem'}>
      {/* <Button
        variant='text'
        className='font-[arial] text-[#0A0A0B] text-md font-bold leading-5 tracking-wide text-center bg-[#00FC65] h-[41px] p-4 sm:px-8 rounded-full normal-case hover:bg-[#00FC65] whitespace-nowrap'
        onClick={() => handleDisconnect()}
      >
        <span>Disconnect</span>
      </Button> */}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
      >
        <HappyProvider>
          <Button_Antd
            type="primary"
            shape="round"
            size="middle"
            className="font-[arial] font-bold leading-5 bg-green-500 text-black h-[41px]"
            onClick={() => handleDisconnect()}
          >
            Disconnect
          </Button_Antd>
        </HappyProvider>
      </ConfigProvider>
    </Stack>
  )
}