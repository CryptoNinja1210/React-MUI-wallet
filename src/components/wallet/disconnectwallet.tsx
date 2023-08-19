import { Stack} from '@mui/material';
import { HappyProvider } from '@ant-design/happy-work-theme';
import { Button as Button_Antd, ConfigProvider } from 'antd';

// eslint-disable-next-line @typescript-eslint/ban-types
export default function DisconnectWallet({ handleDisconnect } : { handleDisconnect: () => void }){
  return(
    <Stack spacing={2} direction='row' ml={'0.5rem'}>
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
            style={{fontSize:'14px', lineHeight:'20px', letterSpacing:'0.5px'}}
            className="font-[Syne-Bold] bg-[#00FC65] text-black h-[41px] w-48"
            onClick={() => handleDisconnect()}
          >
            Disconnect
          </Button_Antd>
        </HappyProvider>
      </ConfigProvider>
    </Stack>
  )
}