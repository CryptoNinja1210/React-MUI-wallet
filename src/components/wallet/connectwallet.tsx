import { HappyProvider } from '@ant-design/happy-work-theme';
import { Stack} from '@mui/material';
import { Button as Button_Antd, ConfigProvider } from 'antd';

// eslint-disable-next-line @typescript-eslint/ban-types
export default function ConnectWallet({ handleConnect } : { handleConnect: () => void }){
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
            size="middle"
            className="font-[arial] font-bold leading-5 bg-green-500 text-black h-[41px] whitespace-nowrap"
            onClick={() => handleConnect()}
          >
            Connect Wallet
          </Button_Antd>
        </HappyProvider>
      </ConfigProvider>
    </Stack>
  )
}