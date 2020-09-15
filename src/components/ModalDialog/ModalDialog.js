import React from 'react';
import { Dialog } from '@material-ui/core';
import PropTypes from 'prop-types';

const ModalDialog = ({ children, inputProps }) => {
  return (
    <Dialog {...inputProps} >
      {children}
    </Dialog>
  );
};


ModalDialog.defaultProps = {
  children: null,
  inputProps: {},
};

ModalDialog.propTypes = {
  children: PropTypes.node,
  inputProps: PropTypes.object,
};

export default ModalDialog;
