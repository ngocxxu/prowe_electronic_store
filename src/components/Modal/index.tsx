import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/configStore';
import { toggleOpenModal } from 'src/redux/reducers/otherReducer';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function FeatureModal({
  children,
}: {
  children: React.ReactElement;
}) {
  const dispatch = useDispatch();
  const { isOpenModal } = useSelector((state: RootState) => state.otherReducer);

  return (
    <Modal
      open={isOpenModal}
      onClose={() => dispatch(toggleOpenModal(false))}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}
