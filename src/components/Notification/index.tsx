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
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isNotification}
        onClose={() =>
          dispatch(
            toggleNotification({
              isNotification: false,
              severity: 'success',
            })
          )
        }
        message={`${message} is successful`}
        key={'topright'}
      >
        <Alert
          onClose={() =>
            dispatch(
              toggleNotification({ isNotification: false, severity: 'success' })
            )
          }
          severity={`${severity}`}
          sx={{ width: '100%' }}
        >
          {`${message} is ${severity}`}
        </Alert>
      </Snackbar>
    </>
  );
};
