import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import {AuthContext} from "../context/AuthContext";

export const Login = () => {
const [username, setUsername] = useState("");
const { login, user, isAuthenticated } =
  useContext(AuthContext);
return (
  <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      bgcolor: "#f4f6f8",
    }}
  >
    <Card sx={{ width: 400, borderRadius: 3 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography
  variant="h4"
  sx={{
    fontWeight: 700,
    textAlign: "center",
  }}
>
  Welcome Back
</Typography>

       <Typography
  variant="h4"
  sx={{
    fontWeight: 700,
    textAlign: "center",
  }}
>
          Sign in to continue
        </Typography>

        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mt: 4 }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, py: 1.5 }}
          onClick={() => login(username)}
        >
          Login
        </Button>
        <Typography sx={{ mt: 2 }}>
  User: {user}
</Typography>

<Typography>
  Authenticated: {isAuthenticated ? "Yes" : "No"}
</Typography>
      </CardContent>
    </Card>
  </Box>
);
};