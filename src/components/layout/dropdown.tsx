import * as React from 'react';
import { Button, MenuItem, ButtonGroup, Grow, Paper, Popper, MenuList } from '@mui/material';

interface dropPropTypes {
  label: string,
  menulist: Array<string>
}

export default function ChainDropdown({label, menulist}: dropPropTypes) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleClick = () => {
    // console.info(`You clicked`);
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
    console.log(`you clicked ${menulist[index]}`)
  };
  const handleMouseEnter = () => {
    setOpen(true);
  }
  const handleMouseLeave = () => {
    setOpen(false);
  }

  const handleSubMouseEnter = () => {
    setOpen(true);
  }

  const handleSubMouseLeave = () => {
    setOpen(false);
  }

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  // const handleClose = (event: Event) => {
  //   if (
  //     anchorRef.current &&
  //     anchorRef.current.contains(event.target as HTMLElement)
  //   ) {
  //     return;
  //   }
  //   setOpen(false);
  // };

  // console.log(anchorRef.current?.clientWidth)

  return (
    <React.Fragment>
      <ButtonGroup variant="text" ref={anchorRef}>
        <Button
          sx={{
            mt: 2,
            display: "block",
            color: "#8699B0",
            whiteSpace: "nowrap",
            fontFamily: "montserrat",
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "24px" /* 171.429% */,
            textTransform: "none",
            paddingY: '12px',
            '&:hover': {
              textDecoration: 'none',
            },
            '&:active': {
              backgroundColor: "white",
            },
            borderRadius: '10px',
          }}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {label}
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
        placement='bottom-start'
        onMouseEnter={handleSubMouseEnter}
        onMouseLeave={handleSubMouseLeave}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'left top' : 'left bottom',
            }}
            className='bg-zinc-800 text-white rounded-xl mt-1'
          >
            <Paper>
              <MenuList id="split-button-menu" autoFocusItem>
                {menulist.map((listItem, index) => (
                  <MenuItem
                    key={listItem}
                    selected={index === selectedIndex}
                    onClick={() => handleMenuItemClick(index)}
                  >
                    {listItem}
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