"use client";

import { useState } from "react";

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Stack,
} from "@mui/material";

import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

type HomeBottomActionsProps = React.ComponentProps<"div">;

const HomeBottomActions = ({ id }: HomeBottomActionsProps) => {
  return (
    <Box
      id={id}
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        zIndex: 100,
        backgroundColor: "common.white",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ p: { xs: 2, sm: 3 } }}
      >
        <CreateNewFolderOutlinedIcon sx={{ height: 30, width: 30 }} />
        <CreateOutlinedIcon sx={{ height: 30, width: 30 }} />
      </Stack>
    </Box>
  );
};

export default HomeBottomActions;
