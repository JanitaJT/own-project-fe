import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  Divider,
  ListItemButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { format } from "date-fns";
import SingleTaskDialog from "./SingleTaskDialog";

export default function CompletedTaskList(props) {
  const {
    taskList,
    singleTask,
    setSingleTask,
    openDialog,
    setOpenDialog,
    sethoverColor,
  } = props;

  return (
    <div>
      <SingleTaskDialog
        singleTask={singleTask}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
      <Box>
        <nav>
          {taskList.map((value) => {
            if (value.completed === 1) {
              return (
                <List key={value.id}>
                  <ListItem
                    disablePadding
                    sx={{
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <ListItemButton
                      onClick={() => {
                        setSingleTask(value);
                        setOpenDialog(true);
                      }}
                      onMouseEnter={() => sethoverColor("#CFD6D5  ")}
                      onMouseLeave={() => sethoverColor("#FFFFFF ")}
                    >
                      <Grid item md={12} xs={12} padding={2}>
                        <Typography
                          variant="subtitle1"
                          style={{ fontWeight: "bold" }}
                        >
                          Name
                        </Typography>
                        <ListItemText
                          primary={value.name}
                          primaryTypographyProps={{
                            variant: "body2",
                            style: {
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: "70px",
                            },
                          }}
                        ></ListItemText>
                      </Grid>

                      <Grid item md={12} xs={12} padding={2}>
                        <Typography
                          variant="subtitle1"
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          Assigned
                        </Typography>
                        <ListItemText
                          primary={format(
                            new Date(value.assigned),
                            "HH:mm dd.MM"
                          )}
                          primaryTypographyProps={{
                            variant: "body2",
                            style: {
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            },
                          }}
                        ></ListItemText>
                      </Grid>
                      <Grid item md={12} xs={12} padding={2}>
                        <Typography
                          variant="subtitle1"
                          style={{ fontWeight: "bold" }}
                        >
                          Deadline
                        </Typography>
                        <ListItemText
                          primary={format(new Date(value.dl), "HH:mm dd.MM")}
                          primaryTypographyProps={{
                            variant: "body2",
                            style: {
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            },
                          }}
                        ></ListItemText>
                      </Grid>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </List>
              );
            }
          })}
        </nav>
      </Box>
    </div>
  );
}
