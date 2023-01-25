import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { format } from "date-fns";

export default function TaskList(props) {
  const { taskList } = props;

  return (
    <div>
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
                  <Grid item md={12} xs={6} padding={0.2}>
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
                        "HH:mm dd.MM.yy"
                      )}
                      primaryTypographyProps={{
                        variant: "body2",
                        style: {
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "90px",
                        },
                      }}
                    ></ListItemText>
                  </Grid>

                  <Grid item md={12} xs={8} padding={0.2}>
                    <Typography
                      variant="subtitle1"
                      style={{ fontWeight: "bold" }}
                    >
                      Description
                    </Typography>
                    <ListItemText
                      primary={value.description}
                      primaryTypographyProps={{
                        variant: "body2",
                        style: {
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "100px",
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
                      primary={value.completed}
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
                      primary={format(new Date(value.dl), "HH:mm dd.MM.yy")}
                      primaryTypographyProps={{
                        variant: "body2",
                        style: {
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "90px",
                        },
                      }}
                    ></ListItemText>
                  </Grid>
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
