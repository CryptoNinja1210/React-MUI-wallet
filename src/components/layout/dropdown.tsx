import * as React from 'react';
import { Button, MenuItem, ButtonGroup, Grow, Paper, Popper, MenuList } from '@mui/material';

interface dropPropTypes {
  label: string,
  menulist: Array<string>
}

export default function ChainDropdown({label, menulist}: dropPropTypes) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  // const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [hoverSubMenu, setHoverSubMenu] = React.useState(0);
  const handleClick = () => {
    // setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (
    index: number,
  ) => {
    // setSelectedIndex(index);
    setOpen(false);
    console.log(`you clicked ${menulist[index]}`)
  };
  const handleMouseEnter = () => {
    setHoverSubMenu(0);
    setOpen(true);
  }
  const handleMouseLeave = () => {
    setOpen(false);
  }

  const handleSubMouseEnter = () => {
    setHoverSubMenu(0);
    setOpen(true);
  }

  const handleSubMouseLeave = () => {
    setOpen(false);
  }

  const handleHoverSubItem = (index: number) => {
    setHoverSubMenu(index)
  }
  return (
    <React.Fragment>
      <ButtonGroup variant="text" ref={anchorRef}>
        <Button
          sx={{
            mx:'1',
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
                    // selected={index === selectedIndex}
                    onClick={() => handleMenuItemClick(index)}
                    // className={`hover:bg-gray-700 ${index === selectedIndex ? `bg-gray-700` : ``}`}
                    className={`hover:bg-gray-700 ${hoverSubMenu == index ? `bg-gray-700` : ``}`}
                    onMouseEnter={()=>handleHoverSubItem(index)}
                    // onMouseLeave={handleLeaveSubItem}
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