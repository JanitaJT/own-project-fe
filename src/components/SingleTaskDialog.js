import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { format } from "date-fns";

export default function SingleTaskDialog(props) {
  const { singleTask, openDialog, setOpenDialog } = props;

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog open={openDialog} onClose={handleClose}>
      <DialogTitle>Task: {singleTask?.name}</DialogTitle>
      <DialogContent>
        <Grid
          container
          spacing={3}
          column={5}
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          padding={2}
        >
          <Grid item xs={12}>
            <Typography>
              Assigned:&nbsp;
              {format(new Date(singleTask?.assigned), "HH:mm dd.MM")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Description:&nbsp;
              {singleTask?.description}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Completed:&nbsp;
              {singleTask?.completed === 1
                ? "Yes"
                : singleTask?.completed === 0
                ? "No"
                : null}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Deadline:&nbsp;
              {format(new Date(singleTask?.dl), "HH:mm dd.MM")}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
