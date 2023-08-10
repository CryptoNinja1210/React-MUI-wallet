import * as React from 'react';
import { Button, Box, MenuItem, ButtonGroup, ClickAwayListener, Grow, Paper, Popper, MenuList } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface NetworkInfo {
  icon: string;
  name: string;
  chainId: string;
  nativeCurrency: { name: string, decimals: 18, symbol: string };
  rpcUrls: string;
}

interface ChainDropwdonwProps {
  onNetworkChange: (netinfo: NetworkInfo) => void
}


export const networkOptions: NetworkInfo[] = [
  {
    icon: 'icons/ether.svg', name: 'Ethereum Mainnet', chainId: "0x1",
    nativeCurrency: { name: 'ether', decimals: 18, symbol: 'eth' },
    rpcUrls: 'https://mainnet.infura.io/v3/'
  },
  {
    icon: '/icons/bnb-smart.svg', name: 'BNB Smart Chain', chainId: "0x38",
    nativeCurrency: { name: 'BNB', decimals: 18, symbol: 'BNB' },
    rpcUrls: 'https://bsc-dataseed.binance.org/'
  },
  {
    icon: '/icons/arbitrum.svg', name: 'Arbitrum One', chainId: "0xa4b1",
    nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
    rpcUrls: 'https://arbitrum-mainnet.infura.io'
  },
  {
    icon: '/icons/polygon.svg', name: 'Polygon', chainId: "0x89",
    nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
    rpcUrls: 'https://polygon-rpc.com/'
  },
]


export default function ChainDropdown(props: ChainDropwdonwProps) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  React.useEffect(() => {
    if (typeof props.onNetworkChange == "function") {
      props.onNetworkChange(networkOptions[selectedIndex])
    }
  }, [props, selectedIndex]);
  const handleClick = () => {
    console.info(`You clicked ${networkOptions[selectedIndex]}`);
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="text" ref={anchorRef}>
        <Button
          sx={{
            fontFamily: 'arial',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '20px',
            letterSpacing: '0.035em',
            textAlign: 'center',
            textTransform: 'none',
            background: '#212125 !important',
            color: '#00FC65',
            borderRadius: '30px',
            px: '1.5rem',
            ml: '0.8rem',
            '&:hover': {
              backgroundColor: '#212125',
            }
          }}
          onClick={handleClick}>
          <img style={{ width: '30px', height: '30px', paddingRight: '10px' }} src={networkOptions[selectedIndex].icon}></img>
          <Box sx={{ display: {xs: 'none', md:'block' }}}>{networkOptions[selectedIndex].name}</Box>
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {networkOptions.map((option, index) => (
                    <MenuItem
                      key={option.chainId}
                      selected={index === selectedIndex}
                      onClick={() => handleMenuItemClick(index)}
                    >
                      <img src={option.icon} style={{ width: '30px', height: '30px', paddingRight: '10px' }} alt="" />{option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}