import { Box, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(18.25 * 60 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (time) =>
    String(time)
      .padStart(2, "0")
      .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <Stack
        sx={{
          direction: "ltr",
          flexDirection: "row",
          gap: "5px",
        }}
      >
        <Box>{formatTime(hours)}</Box>
        <Box>:</Box>
        <Box>{formatTime(minutes)}</Box>
        <Box>:</Box>
        <Box>{formatTime(seconds)}</Box>
      </Stack>
    </>
  );
};

export default Timer;
