import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FolderType } from "@/helpers/types";

type Props = {
  list: FolderType[];
};

const FolderList = ({ list }: Props) => {
  return (
    <Box sx={{ overflow: "scroll" }}>
      <List sx={{ backgroundColor: "grey.300", borderRadius: 2 }}>
        {list.map((folder) => {
          return (
            <ListItem key={folder.id} sx={{ p: 0 }}>
              <ListItemButton>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary={folder.title} />
                <ChevronRightIcon />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default FolderList;
