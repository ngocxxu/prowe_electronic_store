import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/configStore';
import { toggleNotification } from 'src/redux/reducers/otherReducer';

export const Notification = () => {
  const dispatch = useDispatch();
  const {
    notify: { isNotification, severity, message },
  } = useSelector((state: RootState) => state.otherReducer);

  return (
    <>
      <Snackbar
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isNotification}
        onClose={() =>
          dispatch(
            toggleNotification({
              isNotification: false,
            })
          )
        }
        key={'topright'}
      >
        <Alert
          onClose={() =>
            dispatch(toggleNotification({ isNotification: false }))
          }
          severity={severity}
          sx={{ width: '100%' }}
        >
          {`${message}`}
        </Alert>
      </Snackbar>
    </>
  );
};
