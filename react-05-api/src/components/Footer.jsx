import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Typography
        variant="h6"
        component="small"
        sx={{ display: "block", textAlign: "center" }}
      >
        Derechos de autor 2023 Mi Aplicación
      </Typography>
    </footer>
  );
}

export default Footer;
