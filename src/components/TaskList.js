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
import React, { useState } from "react";
import { format } from "date-fns";
import SingleTaskDialog from "./SingleTaskDialog";

export default function TaskList(props) {
  const { taskList } = props;
  const [singleTask, setSingleTask] = useState({
    assigned: Date.parse(new Date()),
    name: null,
    description: null,
    completed: null,
    dl: Date.parse(new Date()),
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [hoverColor, sethoverColor] = useState("#CFD6D5  ");

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
                    <Grid item md={12} xs={5} padding={0.2}>
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

                    <Grid item md={12} xs={7} padding={0.2}>
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
                    <Grid item md={12} xs={7} padding={0.2}>
                      <Typography
                        variant="subtitle1"
                        style={{ fontWeight: "bold" }}
                      >
                        Completed
                      </Typography>
                      <ListItemText
                        primary={
                          value.completed === 1
                            ? "Yes"
                            : value.completed === 0
                            ? "No"
                            : null
                        }
                        primaryTypographyProps={{
                          variant: "body2",
                        }}
                      ></ListItemText>
                    </Grid>

                    <Grid item md={12} xs={7} padding={0.2}>
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
          })}
        </nav>
      </Box>
    </div>
  );
}
