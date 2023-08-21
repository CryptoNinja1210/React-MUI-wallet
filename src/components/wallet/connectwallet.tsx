import { HappyProvider } from '@ant-design/happy-work-theme';
import { Stack} from '@mui/material';
import { Button as Button_Antd, ConfigProvider } from 'antd';

// eslint-disable-next-line @typescript-eslint/ban-types
export default function ConnectWallet({ handleConnect, showArr } : { handleConnect: () => void, showArr?: boolean }){
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
            style={{fontFamily:'Syne-Bold', lineHeight:'20px'}}
            className="connect bg-[#00FC65] text-black whitespace-nowrap"
            onClick={() => handleConnect()}
          >
            {`Connect Wallet ${showArr ? '↗' : ''}`}
          </Button_Antd>
        </HappyProvider>
      </ConfigProvider>
    </Stack>
  )
}