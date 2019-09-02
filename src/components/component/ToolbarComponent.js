import React from 'react';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import { mainListItems } from '../component/listitems';
import PropTypes from 'prop-types';

import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ScrollTop from '../component/ScrollTop';
import HideOnScroll from '../component/HideOnScroll';
import Avatar from '@material-ui/core/Avatar';
import logo from '../../static/img/logo.png';

export default function ToolbarComponent(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(true);
  // const classes = useStyles();
  const handleDrawer = () => {
    setOpen(prevOpen => !prevOpen);
  };
  return (
    <React.Fragment>
      <Toolbar id="back-to-top-anchor" />
      <HideOnScroll>
        <AppBar className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="textPrimary"
              noWrap
              className={classes.title}
            >
              Панель управления
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <Avatar alt="Урфу" src={logo} className={classes.logo} />
          <Typography
            component="p"
            variant="subtitle2"
            color="textPrimary"
            noWrap
            className={classes.title}
          >
            Управление оплатой
          </Typography>
          {/* <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton> */}
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        {/* <List>{secondaryListItems}</List> */}
      </Drawer>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

ToolbarComponent.propTypes = {
  classes: PropTypes.any
};
