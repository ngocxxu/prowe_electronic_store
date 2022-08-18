import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Badge, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Fragment, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/configStore';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

type Anchor = 'top' | 'right';

type DrawerAction = {
  direction: 'top' | 'right';
};

export const TemporaryDrawer = memo(({ direction }: { direction: Anchor }) => {
  const { isDrawer } = useSelector((state: RootState) => state.otherReducer);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    right: false,
    top: false
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      // if (
      //   event.type === 'keydown' &&
      //   ((event as React.KeyboardEvent).key === 'Tab' ||
      //     (event as React.KeyboardEvent).key === 'Shift')
      // ) {
      //   return;
      // }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box sx={{ width: anchor === 'top' ? 'auto' : 400 }} role='presentation'>
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div className='my-auto'>
      {(['right', 'top'] as const).map((anchor) => (
        <Fragment key={anchor}>
          <IconButton
            sx={{ color: 'black' }}
            onClick={toggleDrawer(anchor, true)}
          >
            <Badge badgeContent={4} color='success'>
              <LocalMallOutlinedIcon />
            </Badge>
          </IconButton>
          <Drawer
            anchor={direction}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
});
