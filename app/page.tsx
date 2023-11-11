"use client";

import {
  Box,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FolderList from "@/components/FolderList";
import HomeBottomActions from "@/components/HomeBottomActions";
import { useLayoutEffect, useState } from "react";

const FOLDERS = [
  { id: "all", title: "Tất cả", quantity: 16 },
  { id: "1", title: "Ghi chú", quantity: 15 },
  { id: "2", title: "Work", quantity: 1 },
];

export default function Home() {
  const [margin, setMargin] = useState({
    top: 0,
    bottom: 0,
    height: "auto",
  });

  useLayoutEffect(() => {
    const eleTop = document.getElementById("main-title");
    const eleBottom = document.getElementById("bottom-actions");
    const top = eleTop?.offsetHeight || 0;
    const bottom = eleBottom?.offsetHeight || 0;

    setMargin({
      top: eleTop?.offsetHeight || 0,
      bottom: eleBottom?.offsetHeight || 0,
      height: `calc(100% - ${top + bottom}px)`,
    });
  }, []);

  return (
    <Container sx={{ minHeight: "100vh", m: 0, overflow: "hidden" }}>
      <Box
        id="main-title"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          backgroundColor: "common.white",
        }}
      >
        <Stack sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Thư mục
          </Typography>
          <TextField
            sx={{ width: "100%" }}
            placeholder="Tìm kiếm"
            variant="outlined"
            size="medium"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Box>

      {margin.top === 0 ? (
        <div>Loading...</div>
      ) : (
        <Box
          sx={{
            mt: `${margin.top}px`,
            mb: `${margin.bottom}px`,
            height: `${margin.height}`,
          }}
        >
          <FolderList list={FOLDERS} />
        </Box>
      )}

      <HomeBottomActions id="bottom-actions" />
    </Container>
  );
}
