import * as React from 'react';
import { Button, Box, MenuItem, ButtonGroup, Grow, Paper, Popper, MenuList } from '@mui/material';

interface NetworkInfo {
  icon: string;
  name: string;
  chainId: string;
  nativeCurrency: { name: string, decimals: number, symbol: string };
  rpcUrls: string;
}

interface ChainDropwdonwProps {
  onNetworkChange: (netinfo: NetworkInfo) => void
}


// eslint-disable-next-line react-refresh/only-export-components
export const networkOptions: NetworkInfo[] = [
  {
    icon: '/icons/bnb-smart.svg', name: 'BNB Smart Chain', chainId: "0x38",
    nativeCurrency: { name: 'BNB', decimals: 18, symbol: 'BNB' },
    rpcUrls: 'https://bsc-dataseed.binance.org/'
  },
  {
    icon: 'icons/ether.svg', name: 'Ethereum', chainId: "0x1",
    nativeCurrency: { name: 'ether', decimals: 18, symbol: 'eth' },
    rpcUrls: 'https://mainnet.infura.io/v3/'
  },
  {
    icon: '/icons/aptos.svg', name: 'Aptos', chainId: "0xa4b1",
    nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
    rpcUrls: 'https://arb1.arbitrum.io/rpc'
  },
]

export default function ChainDropdown(props: ChainDropwdonwProps) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
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

  const handleMouseLeave = () => {
    setOpen(false);
  }

  const handleSubMouseEnter = () => {
    setOpen(true);
  }

  const handleSubMouseLeave = () => {
    setOpen(false);
  }

  console.log(anchorRef.current?.clientWidth)

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
            '&:hover': {
              backgroundColor: '#212125',
            },
            width: {md:'250px'},
          }}
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}
        >
          <img className='w-[30px] h-[30px] pr-[10px]' src={networkOptions[selectedIndex].icon}/>
          <Box className="hidden md:block whitespace-nowrap">{networkOptions[selectedIndex].name}</Box>
          <img src='/icons/Vector 60.svg' alt='' className='mx-3 w-4 h-4'/>
          {/* <VectorIcon /> */}
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
          width: '250px',
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        onMouseEnter={handleSubMouseEnter}
        onMouseLeave={handleSubMouseLeave}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
            className='bg-zinc-800 text-white rounded-xl mt-2'
          >
            <Paper>
                <MenuList id="split-button-menu" autoFocusItem>
                  {networkOptions.map((option, index) => (
                    <MenuItem
                      key={option.chainId}
                      selected={index === selectedIndex}
                      onClick={() => handleMenuItemClick(index)}
                    >
                      <img src={option.icon} className='w-[30px] h-[30px] pr-[10px]' alt="" />{option.name}
                    </MenuItem>
                  ))}
                </MenuList>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}