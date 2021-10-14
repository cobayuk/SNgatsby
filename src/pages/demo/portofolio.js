import React from 'react';
import { navigate } from "@reach/router";
import {
  Card,
  Grid,
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  CssBaseline,
  CardMedia,
  CardContent,
  CardActions,

} from '@material-ui/core';
import Footer from "@components/footer";
import CameraIcon from '@material-ui/icons/PhotoCamera';
import useStyles from "@pages/demo/portofolioStyle";

const DemoPortofolio = () => {
  const classes = useStyles();
  const cards = [1, 2, 3, 4 ];

  const redirectTemplate = (url) => {
    navigate(url);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Sungnikah
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Pilih Desain Undangan Kamu
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Kini lebih mudah hanya sekali klik dan order desain undangan kesukaan kamu, boleh lihat - lihat dahulu,
              jika ada yang kaka ingin tanyakan bisa langsung hubungi kami ya, dengan cara klik tombol dibawah ini
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Bantuan Chat
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Email Customer Service
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => redirectTemplate('/theme/first')}>
                      LIHAT DESAIN
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer/>
    </React.Fragment>
  );

}

export default DemoPortofolio;
