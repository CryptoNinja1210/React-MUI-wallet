import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ethers, providers } from "ethers";
import Web3Modal from "web3modal";
// import WalletConnectProvider from '@walletconnect/web3-provider';
// import Fortmatic from 'fortmatic';
import ChainDropdown from "../wallet/chaindropdown.tsx";
import ConnectWallet from "../wallet/connectwallet.tsx";
import DisconnectWallet from "../wallet/disconnectwallet.tsx";
import "../../App.css";

// "use strict";

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

const pages = ["Prediction", "Trending Project", "Features", "How It Works"];
// let selectedAccount: string;
// let web3Modal: Web3Modal;
function Header({
  addrInfo,
  setAddrInfo,
  netInfoState,
  setNetInfoState,
}: SetInfoType) {
  //
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [provider, setProvider] = React.useState<providers.Web3Provider | null>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const onNetworkChange = (netInfo: NetworkInfo) => {
    console.log(netInfo.chainId);
    switchNetwork(netInfo);
    setNetInfoState(netInfo);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSetting = () => {};

  const handleMessage = () => {};

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
                rpcUrls: netinfo.rpcUrls,
              },
            ],
          });
        }
      }
    }
  }
  React.useEffect(() => {
    connetWallet();
    // disconnectWallet();
  }, []);
  // React.useEffect(() => {
  //   disconnectWallet();
  // },[]);

  // const providerOptions = {
  //   walletconnect: {
  //     package: WalletConnectProvider,
  //     options: {
  //       // Mikko's test key - don't copy as your mileage may vary
  //       infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
  //     }
  //   },

  //   fortmatic: {
  //     package: Fortmatic,
  //     options: {
  //       // Mikko's TESTNET api key
  //       key: "pk_test_391E26A3B43A3350"
  //     }
  //   }
  // };

  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: false,
    // providerOptions,
    // disableInjectedProvider: false,
  });
  async function connetWallet() {
    await window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
    const connection = await web3Modal.connect();
    // console.log(connection);

    const pv = new ethers.providers.Web3Provider(connection);
    setProvider(pv);
    const signer = pv.getSigner();
    const addr = await signer.getAddress();
    setAddrInfo(addr);
  }
  async function disconnectWallet() {
    console.log("Killing the wallet connection", provider);
    setAddrInfo("");
    setProvider(null);
  }

  return (
    <AppBar position="static" sx={{ background: "none", zIndex: "999" }}>
      <Container maxWidth="xl" sx={{ bgcolor: "" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <img src="/images/image 1356.png" alt="logo" className="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  color: "#8699B0",
                  fontFamily: "arial",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "24px" /* 171.429% */,
                  textTransform: "none",
                  pt: "20px",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <img
              onClick={handleSetting}
              style={{ cursor: "pointer" }}
              src="/icons/setting.svg"
            />
            <img
              onClick={handleMessage}
              style={{ marginLeft: "0.8rem", cursor: "pointer" }}
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
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography>{netInfoState.name.slice(0, 3)}</Typography>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
