import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const WhiteAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'white',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
}));

const PageContent = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8), // Adjust the spacing as needed
  // Add any additional styles for the page content here
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <WhiteAppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color={"red"} component="div" sx={{ flexGrow: 1 }}>
            Bulletin
          </Typography>

          {/* Logged-in Avatar */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleClick}
            sx={{ ml: 2 }}
          >
            <Avatar src="/path-to-avatar.png" alt="User Avatar" />
          </IconButton>

          {/* Menu */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleClose}>Subscribe</MenuItem>
          </Menu>
        </Toolbar>
      </WhiteAppBar>
      <PageContent>
        
      </PageContent>
    </React.Fragment>
  );
};

export default Navbar;
