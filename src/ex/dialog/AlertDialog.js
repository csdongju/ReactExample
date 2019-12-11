import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog(props) {
  const { open, onDisagree, onAgree, title, content } = props;

  return (
    <Dialog
      open={open}
      onClose={onDisagree}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onDisagree} color="primary">
          취소
        </Button>
        <Button onClick={onAgree} color="primary" autoFocus>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
}

AlertDialog.propTypes = {
  open: PropTypes.bool,
  onDisagree: PropTypes.func,
  onAgree: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string
};
