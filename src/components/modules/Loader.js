import React, { useContext } from "react";
import GlobalContext from "../../context/global-context";

// Material-ui
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const Loader = () => {
  const { ui } = useContext(GlobalContext);

  return (
    <div>
      {ui.loader.visible && (
        <div>
          <Backdrop sx={{ zIndex: 1600 }} open={true}>
            <div className="py-6 px-12 flex flex-col items-center justify-center">
              <Typography variant="h2" className="text-xl mb-4 text-center">
                {ui.loader.text || "Cargando"}
              </Typography>
              <CircularProgress color="primary" thickness={5} size={60} />
            </div>
          </Backdrop>
        </div>
      )}
    </div>
  );
};

export default Loader;
