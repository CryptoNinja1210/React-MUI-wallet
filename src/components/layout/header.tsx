import * as React from "react";
import CloseIcon from '@mui/icons-material/Close';
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
  showMessage: boolean;
  setShowMessage: (showMessage: boolean) => void;
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
  showMessage,
  setShowMessage,
  addrInfo,
  setAddrInfo,
  setNetInfoState,
}: SetInfoType) {
  //
  const [provider, setProvider] = React.useState<providers.Web3Provider | null>(
    null
  );
  // const [showMessage, setShowMessage] = React.useState(false);
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
    setShowMessage(!showMessage);
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
    <AppBar position="fixed" sx={{ background: "none", zIndex: "999" }} className="backdrop-blur-xl">
      <Container maxWidth="xl" className="px-8 items-center">
        <Toolbar disableGutters className="flex flex-row justify-between items-center my-4">
          <Box className='flex flex-row place-items-center'>
            <img 
              src="/images/image 1356.png" 
              alt="logo" 
              className="logo"
            />
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
              className='flex flex-row my-auto items-center'
            >
              <img
                onClick={handleSetting}
                style={{ cursor: "pointer" }}
                src="/icons/settings.svg"
                className="setting"
              />
              <img
                onClick={handleMessage}
                style={{ marginLeft: "0.8rem", cursor: "pointer", marginRight: '0.8rem' }}
                src="/icons/message-notif.svg"
                className="notification"
              />
              <ChainDropdown onNetworkChange={onNetworkChange} />
              {addrInfo ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    pl: '10px'
                  }}
                >
                  {/* <Typography>{netInfoState.name.slice(0, 3)}</Typography> */}
                  <Typography sx={{fontSize:'11px', md:'14px'}}>
                    {addrInfo.slice(0, 6) + "..." + addrInfo.slice(-5)}
                  </Typography>
                  <DisconnectWallet handleDisconnect={disconnectWallet} />
                </Box>
              ) : (
                <ConnectWallet handleConnect={connetWallet} />
              )}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: { xs:'end', md:'none'}}}>
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
                    <MenuIcon className="text-white mr-[-20px] md:mr-0"/>
                  </Button_Antd>
                </HappyProvider>
              </ConfigProvider>
            </Box>
          </Box>
        </Toolbar>
      </Container>
      <Box
        id="popOver"
        className={`absolute top-24 max-md:left-0 right-0 mx-auto ${!showPopOver ? 'pointer-events-none' : ''} transition-all duration-500 ease-in-out`}
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
    <Box>
      <div className={`relative opacity-1 w-[372px] h-auto py-20 px-8 flex flex-col justify-start bg-[#0A0A0B] gap-1 rounded-xl transition-all duration-2000 ease-in-out`}>
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
              className="absolute top-7 right-7 w-7 h-7 font-bold flex justify-center items-center border-none "
              onClick={handleClose}
            >
              <CloseIcon sx={{color: 'white', fontSize:'24px'}} />
            </Button_Antd>
          </HappyProvider>
        </ConfigProvider>
        <PopOverTSX handleClose={handleClose} navDropProps={navDropProps}/>
        <div className="flex justify-center items-center my-5 py-3">
          <ConnectWallet handleConnect={connetWallet} showArr={true}/>
        </div>
        <Box className='flex flex-row justify-between items-center mt-2 mx-16'>
          <Box className='rounded-md p-1 border border-[#FFFFFF] '><img src="icons/facebook.svg" className="w-5 h-5" alt=""/></Box>
          <Box className='rounded-md p-1 border border-[#FFFFFF] '><img src="icons/twitter.svg" className="w-5 h-5" alt=""/></Box>
          <Box className='rounded-md p-1 border border-[#FFFFFF] '><img src="icons/linkedin.svg" className="w-5 h-5" alt=""/></Box>
          <Box className='rounded-md p-1 border border-[#FFFFFF] '><img src="icons/instagram.svg" className="w-5 h-5" alt=""/></Box>
        </Box>
      </div>
    </Box>
  )
}

export default Header;
