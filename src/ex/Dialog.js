import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AlertDialog from "./dialog/AlertDialog";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
export default function DialogExample() {
  const classes = useStyles();
  const [alertDialogOpen, setAlertDialogOpen] = React.useState(false);
  const title = "다이얼로그의 타이틀입니다";
  const content = "다이얼로그의 내용입니다";

  const handleClickOpen = () => {
    setAlertDialogOpen(true);
  };

  const handleClose = () => {
    setAlertDialogOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        open alert dialog
      </Button>
      <AlertDialog
        open={alertDialogOpen}
        onDisagree={handleClose}
        onAgree={handleClose}
        title={title}
        content={content}
      />
    </div>
  );
}
