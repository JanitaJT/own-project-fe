import React from "react";
import IconButton from "@mui/material/IconButton";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function AlertMessage(props) {
  const { alertOpen, setAlertOpen, alertOptions } = props;
  return (
    <div>
      <Snackbar
        open={alertOpen}
        onClose={setAlertOpen}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={alertOptions.severity}
          sx={{
            "& .MuiAlert-icon": {
              fontSize: "50px",
            },
            "& 	.MuiAlert-message": {
              alignSelf: "center",
              width: "350px",
            },
          }}
          elevation={24}
          action={
            <IconButton
              sx={{ alignSelf: "center" }}
              aria-label="close"
              color="inherit"
              onClick={() => {
                setAlertOpen(false);
              }}
            >
              <CloseIcon sx={{ fontSize: "30px" }} />
            </IconButton>
          }
        >
          <AlertTitle>
            <strong>{alertOptions.title}</strong>
          </AlertTitle>
          {alertOptions.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
