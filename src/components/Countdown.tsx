"use client";

import React from "react";
import Countdown from "react-countdown";
import { Container, Box, Typography } from "@mui/material";
const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return (
        <Typography className="text-primary-1 text-4xl mt-3 font-cormorant md:text-6xl">
          {"¡Es hoy!"}
        </Typography>
      );
    } else {
      return (
        <Container className="p-4 m-0 mb-40 flex flex-col items-center gap-5 md:max-w-full">
          <Typography className="text-primary-1 text-4xl mt-3 font-cormorant md:text-6xl">
            Faltan
          </Typography>
          <Box className="flex gap-7 md:gap-12">
            <Box className="flex flex-col gap-2 items-center">
              <Typography className="text-primary-1 text-2xl md:text-4xl mt-3 font-cormorant">
                {days}
              </Typography>
              <Typography className="text-primary-1 text-xl md:text-2xl font-cormorant">
                Días
              </Typography>
            </Box>
            <Box className="flex flex-col gap-2 items-center">
              <Typography className="text-primary-1 text-2xl md:text-4xl mt-3 font-cormorant">
                {hours}
              </Typography>
              <Typography className="text-primary-1 text-xl md:text-2xl font-cormorant">
                Horas
              </Typography>
            </Box>
            <Box className="flex flex-col gap-2 items-center">
              <Typography className="text-primary-1 text-2xl md:text-4xl mt-3 font-cormorant">
                {minutes}
              </Typography>
              <Typography className="text-primary-1 text-xl md:text-2xl font-cormorant">
                Minutos
              </Typography>
            </Box>
            <Box className="flex flex-col gap-2 items-center">
              <Typography className="text-primary-1 text-2xl md:text-4xl mt-3 font-cormorant">
                {seconds}
              </Typography>
              <Typography className="text-primary-1 text-xl md:text-2xl font-cormorant">
                Segundos
              </Typography>
            </Box>
          </Box>
        </Container>
      );
    }
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
