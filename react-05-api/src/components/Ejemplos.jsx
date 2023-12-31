// import Button from "@mui/material/Button";
import {
  Alert,
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function Ejemplos() {
  const theme = createTheme({
    spacing: 4,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box component="main">
          <Button href="https://google.com" variant="contained" color="success">
            Click
          </Button>
          <TextField
            error
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            helperText="Incorrect entry."
          />
          <Box>
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              This is a success alert — check it out!
            </Alert>
          </Box>
          <Typography
            variant="h1"
            component="span"
            // sx={{ py: 2, fontSize: "2em", color: "darkcyan" }}
          >
            Lorem ipsum dolor sit.
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}
