import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { Fragment, memo, useState } from 'react';

type Anchor = 'right';

export const TemporaryDrawer = memo(() => {
  const [state, setState] = useState(false);

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <Fragment key={anchor}>
          <Button onClick={() => setState(true)}>Click</Button>
          <Drawer anchor={anchor} open={true} onClose={() => setState(false)}>
            <Box
              sx={{ width: 250 }}
              role='presentation'
              // onClick={() => setState(false)}
              // onKeyDown={() => setState(false)}
            >
              hello
            </Box>
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
});
