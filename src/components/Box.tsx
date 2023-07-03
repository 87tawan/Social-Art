'use client'
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface BoxingProps {
  children: ReactNode;
}

export default function Boxing({ children }: BoxingProps) {
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        marginTop: '20px',
        gap: '1rem'
    }}>
      {children}
    </Box>
  )
}


