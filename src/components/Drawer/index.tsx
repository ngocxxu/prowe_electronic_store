import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/configStore';
import { toggleDrawer } from 'src/redux/reducers/otherReducer';

export const TemporaryDrawer = memo(() => {
  const { isDrawer } = useSelector((state: RootState) => state.otherReducer);
  const dispatch = useDispatch();

  return (
    <>
      <Drawer
        anchor='right'
        // open={isDrawer}
        // onClick={() => dispatch(toggleDrawer(false))}
      >
        <Box
          sx={{ width: 400 }}
          role='presentation'
          // onClick={() => dispatch(toggleDrawer(true))}
          // onKeyDown={() => setState(false)}
        >
          <Button>Click</Button>
          hello Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          earum expedita, ipsa quas nisi pariatur quis nulla deserunt voluptatum
          aut adipisci quod quae doloribus natus ullam numquam itaque molestiae
          asperiores atque quasi! Corrupti odit earum itaque vitae quae, ducimus
          excepturi blanditiis aliquam. A laborum error praesentium neque
          tenetur exercitationem officia autem quia nesciunt. Dolor illo cum
          quidem nulla aperiam dignissimos eligendi, in a aut ducimus.
          Consequuntur nemo iusto qui ipsa, dolor repellendus pariatur iste
          labore officia modi optio rem odio debitis tempore nihil. Ipsa,
          molestias! Cumque saepe, illum dolore, impedit blanditiis repellat
          iste officiis voluptatibus illo quos rerum! Minima, nemo!
        </Box>
      </Drawer>
    </>
  );
});
