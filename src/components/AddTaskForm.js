import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  DialogActions,
  FormHelperText,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers";

export default function AddTaskForm(props) {
  const { formik, setOpenDialog, openDialog } = props;

  return (
    <Dialog open={openDialog}>
      <DialogTitle>Add new task</DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={3}
            column={5}
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-center"
            padding={2}
          >
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="Assign date and time"
                  name="assigned"
                  value={formik.values.assigned}
                  onChange={(value) => {
                    formik.setFieldValue("assigned", Date.parse(value));
                  }}
                  ampm={false}
                  disablePast={true}
                  inputFormat="HH:mm dd.MM"
                  renderInput={(params) => <TextField {...params} />}
                ></DateTimePicker>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" sx={{ minWidth: "259px" }}>
                <InputLabel>Name</InputLabel>
                <OutlinedInput
                  label="name"
                  name="name"
                  error={
                    formik.touched.name && formik.errors.name ? true : false
                  }
                  value={formik.values.name}
                  onChange={formik.handleChange("name")}
                  onBlur={formik.handleBlur("name")}
                ></OutlinedInput>
                <FormHelperText>
                  {formik.touched.name && formik.errors.name}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" sx={{ minWidth: "259px" }}>
                <Textarea
                  placeholder="Description"
                  minRows={3}
                  maxRows={5}
                  value={formik.values.description}
                  onChange={formik.handleChange("description")}
                  onBlur={formik.handleBlur("description")}
                ></Textarea>
                <FormHelperText>
                  {formik.touched.description && formik.errors.description}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel>Completed</FormLabel>
                <RadioGroup
                  name="completed"
                  value={formik.values.completed}
                  onChange={formik.handleChange("completed")}
                  onBlur={formik.handleBlur("completed")}
                >
                  <FormControlLabel value={0} label="No" control={<Radio />} />
                  <FormControlLabel value={1} label="Yes" control={<Radio />} />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="Deadline"
                  name="dl"
                  value={formik.values.dl}
                  onChange={(valueDl) => {
                    formik.setFieldValue("dl", Date.parse(valueDl));
                  }}
                  ampm={false}
                  disablePast={true}
                  inputFormat="HH:mm dd.MM"
                  renderInput={(params) => <TextField {...params} />}
                ></DateTimePicker>
              </LocalizationProvider>
            </Grid>
          </Grid>
          <DialogActions>
            <Button
              onClick={() => {
                setOpenDialog(false);
                formik.resetForm();
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={() => {
                setOpenDialog(false);
              }}
            >
              Add
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
