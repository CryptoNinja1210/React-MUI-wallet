import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ethers, providers } from "ethers";
import Web3Modal from "web3modal";
import ChainDropdown from "../wallet/chaindropdown.tsx";
import DropDown from './dropdown.tsx';
import ConnectWallet from "../wallet/connectwallet.tsx";
import DisconnectWallet from "../wallet/disconnectwallet.tsx";
import PopOverTSX from './popover.tsx';
import "../../App.css";

//ant design components
import { HappyProvider } from '@ant-design/happy-work-theme';
import { Button as Button_Antd, ConfigProvider } from 'antd';
import ChattingBox from "./chatting/chattingBox.tsx";

interface NetworkInfo {
  icon: string;
  name: string;
  chainId: string;
  nativeCurrency: {
    name: string;
    decimals: number;
    symbol: string;
  };
  rpcUrls: string;
}

interface SetInfoType {
  netInfoState: NetworkInfo;
  setNetInfoState: (netInfoState: NetworkInfo) => void;
  addrInfo: string;
  setAddrInfo: (addr: string) => void;
}

const navDropProps = [
  {
    label: "Prediction",
    menulist: ['Recent Prediction', 'Upcoming Prediction', 'Create Prediction']
  },
  {
    label: 'Trending Project',
    menulist: ['See all trending projects', 'Create Project'],
  },
  {
    label: 'How It Works',
    menulist: ['See Video', 'Create demo video'],
  },
  {
    label: 'Features',
    menulist: ['See all features', 'Create Feature'],
  },
]

interface NavDropPropsTypes {
  label: string;
  menulist: string[];
}
function Header({
  addrInfo,
  setAddrInfo,
  // netInfoState,
  setNetInfoState,
}: SetInfoType) {
  //
  const [provider, setProvider] = React.useState<providers.Web3Provider | null>(
    null
  );
  const [showMessage, setShowMessage] = React.useState(false);
  const [showPopOver, setShowPopOver] = React.useState(false);

  const onNetworkChange = (netInfo: NetworkInfo) => {
    switchNetwork(netInfo);
    setNetInfoState(netInfo);
  };

  const handleClose = () => {
    setShowPopOver(false);
  };

  const handleSetting = () => {};

  const handleMessage = () => {
    setShowMessage(prevState => !prevState);
  };

  async function switchNetwork(netinfo: NetworkInfo) {
    if (window.ethereum.networkVersion !== netinfo.chainId) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: netinfo.chainId }],
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        // This error code indicates that the chain has not been added to MetaMask
        if (err.code === 4902) {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainName: netinfo.name,
                chainId: netinfo.chainId,
                nativeCurrency: netinfo.nativeCurrency,
                rpcUrls: [netinfo.rpcUrls],
              },
            ],
          });
        }
      }
    }
  }

  const connetWallet = React.useCallback(async () => {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: false,
    });

    await window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
    const connection = await web3Modal.connect();
  
    const pv = new ethers.providers.Web3Provider(connection);
    setProvider(pv);
    const signer = pv.getSigner();
    const addr = await signer.getAddress();
    setAddrInfo(addr);
  }, [setProvider, setAddrInfo]);
  
  React.useEffect(() => {
    connetWallet();
  }, [connetWallet]);
  
  
  async function disconnectWallet() {
    console.log("Killing the wallet connection", provider);
    setAddrInfo("");
    setProvider(null);
  }

  return (
    <AppBar position="static" sx={{ background: "none", zIndex: "999" }}>
      <ChattingBox showMessage={showMessage} setShowMessage={setShowMessage} />
      <Container maxWidth="xl" className="items-center">
        <Toolbar disableGutters className="flex flex-row justify-between items-center my-4">
          <Box className='flex flex-row place-items-center'>
            <img src="/images/image 1356.png" alt="logo" className="logo" />
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              {navDropProps.map((item) => (
                <DropDown label={item.label} key={item.label} menulist={item.menulist}/>
              ))}
            </Box>
          </Box>
          <Box
            className="flex flex-row items-center"
          >
            <Box
              className='flex flex-row my-auto'
            >
              <img
                onClick={handleSetting}
                style={{ cursor: "pointer" }}
                src="/icons/setting.svg"
              />
              <img
                onClick={handleMessage}
                style={{ marginLeft: "0.8rem", cursor: "pointer", marginRight: '0.8rem' }}
                src="/icons/message-notif.svg"
              />
              <ChainDropdown onNetworkChange={onNetworkChange} />
              {addrInfo ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      pl: "10px",
                      flexDirection: "column",
                      alignItems: "center",
                      display:{xs:'none', md:'flex'}
                    }}
                  >
                    {/* <Typography>{netInfoState.name.slice(0, 3)}</Typography> */}
                    <Typography>
                      {addrInfo.slice(0, 6) + "..." + addrInfo.slice(-5)}
                    </Typography>
                  </Box>
                  <DisconnectWallet handleDisconnect={disconnectWallet} />
                </Box>
              ) : (
                <ConnectWallet handleConnect={connetWallet} />
              )}
            </Box>
            <Box sx={{ display: { xs: "flex", lg: "none" }, justifyContent: { xs:'end', lg:'none'}}}>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: '#ffffff',
                  },
                }}
              >
                <HappyProvider>
                  <Button_Antd
                    shape="circle"
                    size="middle"
                    className="text-black font-bold flex justify-center items-center border-none"
                    onClick={()=>setShowPopOver(prevState => !prevState)}
                  >
                    <MenuIcon className="text-white"/>
                  </Button_Antd>
                </HappyProvider>
              </ConfigProvider>
            </Box>
          </Box>
        </Toolbar>
      </Container>
      <Box
        id="popOver"
        className={`absolute top-24 w-[500px] max-md:left-0 right-0 mx-auto ${!showPopOver ? 'pointer-events-none' : ''} transition-all duration-500 ease-in-out`}
        sx={{
          opacity: {
            xs: showPopOver ? 1 : 0,
            lg: 0
          }
        }}
      >
        <NavMenuContent handleClose={handleClose} navDropProps={navDropProps} connetWallet={connetWallet}/>
      </Box>
    </AppBar>
  );
}
interface NavMenuContentProps {
  handleClose: () => void;
  navDropProps: NavDropPropsTypes[];
  connetWallet: () => void
}

const NavMenuContent = ({ handleClose, navDropProps, connetWallet}: NavMenuContentProps) => {
  return (
    <div className={`w-full mx-auto pt-12 min-h-[768px] justify-around bg-black bg-opacity-90 flex flex-col gap-1 rounded-none transition-all duration-2000 ease-in-out`}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
      >
        <HappyProvider>
          <Button_Antd
            shape="circle"
            size="middle"
            className="absolute top-7 right-14 text-black font-bold flex justify-center items-center border-none"
            onClick={handleClose}
          >
            <img src="/icons/cross.svg" />
          </Button_Antd>
        </HappyProvider>
      </ConfigProvider>
      <PopOverTSX handleClose={handleClose} navDropProps={navDropProps}/>
      <div className="flex justify-center items-center my-auto py-3">
        <ConnectWallet handleConnect={connetWallet} />
      </div>
      <Box className='flex flex-row justify-around items-center gap-x-8 md:gap-x-3 mb-12 mx-20'>
        <Box className='w-6 h-6 bg-[url("icons/facebook.png")] rounded-lg border border-gray-600 '/>
        <Box className='w-6 h-6 bg-[url("icons/twitter.png")] rounded-lg border border-gray-600 '/>
        <Box className='w-6 h-6 bg-[url("icons/linkedin.png")] rounded-lg border border-gray-600 '/>
        <Box className='w-6 h-6 bg-[url("icons/instagram.png")] rounded-lg border border-gray-600 '/>
      </Box>
    </div>
  )
}

export default Header;
