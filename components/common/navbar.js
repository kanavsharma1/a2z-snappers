import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import classes from '../../styles/navbar.module.css'


export const Navbar = ()=>{
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ mr: 0 }}
            >
              <img src="/transparent_logo.png"/>  
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <Typography variant="h6" component="div" >
              Services
            </Typography>
            <Typography variant="h6" component="div" >
              About Us
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

