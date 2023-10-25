import { Link } from "react-router-dom";

import { menuItemsDefaults } from "./data/dataModalDialogOptions";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

const ModalDialogOptions = ({ setOpen, open }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll="paper"
      style={{
        backdropFilter: "blur(3px)",
      }}
    >
      <DialogTitle>Atajos</DialogTitle>
      <DialogContent dividers="paper">
        {menuItemsDefaults.map((unMenuItemsDefaults, index) => (
          <ListItem key={index}>
            <Link
              className="flex gap-6 items-center hover:bg-[#4b5563] hover:text-white w-[100%] px-4 py-2 rounded-lg"
              href="tu_link_aqui"
            >
              {unMenuItemsDefaults.icon}
              <Typography variant={unMenuItemsDefaults.variant}>
                {unMenuItemsDefaults.name}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" size="large">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDialogOptions;
