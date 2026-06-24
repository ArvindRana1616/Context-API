import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
  Paper,
} from "@mui/material";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f7fb",
      }}
    >
      {/* Header */}
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
            }}
          >
            Auth Dashboard
          </Typography>

          <Button
            variant="contained"
            color="error"
            onClick={logout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 5 }}>
        {/* Welcome Section */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 4,
            mb: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Avatar
              sx={{
                width: 70,
                height: 70,
                fontSize: 28,
              }}
            >
              {user?.charAt(0).toUpperCase()}
            </Avatar>

            <Box>
              <Typography
                variant="h4"
                fontWeight={700}
              >
                Welcome Back {user} 👋
              </Typography>

              <Typography color="text.secondary" sx={{textAlign: "left"}}>
                Authentication successful. You are logged in.
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Stats Cards */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography color="text.secondary">
                  Total Users
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={700}
                >
                  1,245
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography color="text.secondary">
                  Projects
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={700}
                >
                  18
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography color="text.secondary">
                  Reports
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={700}
                >
                  86
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Activity Panel */}
        <Paper
          elevation={2}
          sx={{
            p: 4,
            mt: 4,
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            gutterBottom
          >
            Recent Activity
          </Typography>

          <Typography sx={{ mb: 1 }}>
            ✅ Login Successful
          </Typography>

          <Typography sx={{ mb: 1 }}>
            ✅ Context API Connected
          </Typography>

          <Typography sx={{ mb: 1 }}>
            ✅ Authentication Active
          </Typography>

          <Typography>
            ✅ Dashboard Loaded Successfully
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}