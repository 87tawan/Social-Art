"use client"
import { TextField, ThemeProvider, Button, InputLabel } from "@mui/material"
import theme from "../../config/theme"
import Link from "next/link"

export const FormLogin = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex justify-center items-center flex-col space-y-3">
        <TextField
          id="filled-basic"
          variant="standard"
          size="small"
          placeholder="Artist"
          inputProps={{
            sx: {
              color: "#d3d0d0",
            },
          }}
        />
        <TextField
          id="filled-basic"
          variant="standard"
          size="small"
          placeholder="Password"
          type="password"
          inputProps={{
            sx: {
              color: "#d3d0d0",
            },
          }}
        />
        <Link href="/home">
          {" "}
          <Button color="secondary">Entrar</Button>
        </Link>
        <Link href="/register" className="text-blue-400 hover:text-blue-300 transition duration-300">
          <p>Não tenho uma conta</p>
        </Link>
      </div>
    </ThemeProvider>
  )
}

export const FormRegister = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex justify-center items-center flex-col space-y-3">
        <TextField
          id="filled-basic"
          placeholder="Email"
          variant="standard"
          type="email"
          inputProps={{
            sx: {
              color: "#d3d0d0",
            },
          }}
          size="small"
          color="primary"
        />
        <TextField
          id="filled-basic"
          variant="standard"
          placeholder="Artist"
          inputProps={{
            sx: {
              color: "#d3d0d0",
            },
          }}
          size="small"
          color="primary"
        />
        <TextField
          id="filled-basic"
          placeholder="Password"
          variant="standard"
          inputProps={{
            sx: {
              color: "#d3d0d0",
            },
          }}
          size="small"
          color="primary"
          type="password"
        />
        <TextField
          id="filled-basic"
          placeholder="Confirm Password"
          inputProps={{
            sx: {
              color: "#d3d0d0",
            },
          }}
          variant="standard"
          size="small"
          color="primary"
          type="password"
        />
        <Button color="secondary">Sign Up</Button>
        <Link href="/" className="text-blue-400 hover:text-blue-300 transition duration-300">
          <p>I already have a account!</p>
        </Link>
      </div>
    </ThemeProvider>
  )
}
