import React, { useContext } from 'react';
import GlobalContext from '../../context/global-context';

// Material-ui
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SnackbarMessage = () => {
  const { ui } = useContext(GlobalContext);
  const handleClose = () => {
    ui.setSnackbar({ ...ui.snackbar, message: false });
  };
  return (
    <Snackbar
      open={Boolean(ui.snackbar.message)}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <Alert
        onClose={handleClose}
        elevation={6}
        variant="filled"
        severity={ui.snackbar.severity}>
        {ui.snackbar.message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarMessage;
