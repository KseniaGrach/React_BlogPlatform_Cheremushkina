/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material';

const ErrorMessage = ({ serverError }) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (serverError.status === 404) {
      navigate('/notFound', { replace: true });
    }
  }, [navigate, serverError]);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error" sx={{ width: '100%' }}>
          Ошибка: &quot;{serverError.statusText}&quot;
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ErrorMessage;