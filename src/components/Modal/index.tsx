import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function FeatureModal({
  width = 500,
  open,
  onClose,
  children,
}: {
  width?: number;
  open: boolean;
  onClose: () => void;
  children: React.ReactElement;
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: width,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
}
