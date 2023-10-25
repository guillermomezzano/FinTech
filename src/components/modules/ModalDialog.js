import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import GlobalContext from "../../context/global-context";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const ModalDialog = () => {
  const { ui } = useContext(GlobalContext);
  const history = useHistory();

  const handleClose = async () => {
    ui.setDialog({ title: "", body: "", btnText: "", open: false });

    if (ui.dialog.callback) await ui.dialog.callback();

    if (ui.dialog.redirectionContent?.redirectTo)
      return (window.location.href = ui.dialog.redirectionContent.redirectTo);

    if (ui.dialog.redirectTo)
      history.push({
        pathname: ui.dialog.redirectTo,
        state: { redirectionContent: ui.dialog.redirectionContent },
      });
  };

  return (
    <Dialog
      open={ui.dialog.open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <ReactMarkdown className="text-center">{ui.dialog.title}</ReactMarkdown>
      </DialogTitle>
      <DialogContent>
        <div id="alert-dialog-description">
          <ReactMarkdown>{ui.dialog.body}</ReactMarkdown>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {ui.dialog.btnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ModalDialog;
