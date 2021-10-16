import React, { useState } from 'react';
import {
  Card,
  Grid,
  Box,
  Button,
  Container,
  Typography,
  CssBaseline,
  CardMedia,
  CardContent,
  CardActions,
}
from '@material-ui/core';
import Header from "@components/Header";
import Layout from "@components/layout";
import GlobalStyle from "@styles/global/globalStyled";
import useStyles from "@pages/demo/portofolioStyle";

const DemoPortofolio = () => {
  const classes = useStyles();

  // TODO : change this data get from API SNanorestfull !
  const [ themes ] = useState([
    {
      id: Math.floor(Math.random() * 100),
      image: 'https://via.placeholder.com/250',
      name: 'SN-01',
      description: 'describe the content',
      url: 'theme/first',
      cta: 'Lihat Desain'
    },
    {
      id: Math.floor(Math.random() * 100),
      image: 'https://via.placeholder.com/250',
      name: 'SN-02',
      description: 'describe the content',
      url: 'theme/second',
      cta: 'Lihat Desain'
    },
    {
      id: Math.floor(Math.random() * 100),
      name: 'SN-03',
      image: 'https://via.placeholder.com/250',
      url: 'theme/first',
      description: 'describe the content',
      cta: 'Lihat Desain'
    },
    {
      id: Math.floor(Math.random() * 100),
      name: 'SN-04',
      image: 'https://via.placeholder.com/250',
      url: 'theme/second',
      description: 'describe the content',
      cta: 'Lihat Desain'
    }
  ]);

  const redirectTemplate = (url) => {
    window.location.href = `/${url}`;
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <CssBaseline />
      <Container maxWidth="lg">
        <Header/>
      </Container>
      <Box className={classes.heroContent}>
        <Typography component="h1" variant="h1" align="center" color="textPrimary" gutterBottom className={classes.headingPorto}>
          Pilih Desain Undangan Kamu
        </Typography>
        <Typography variant="h2" align="center" color="textSecondary" paragraph className={classes.headingDescPorto}>
          Kini lebih mudah hanya sekali klik dan order desain undangan kesukaan kamu,
          boleh lihat - lihat dahulu, jika ada yang kaka ingin tanyakan bisa langsung hubungi kami ya, dengan cara klik tombol dibawah ini
        </Typography>
      </Box>
      <Layout>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {themes.map((value, key) => (
              <Grid item key={key} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={value.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {value.name}
                    </Typography>
                    <Typography>
                      <em>{value.name}</em> {value.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => redirectTemplate(value.url)}>
                      {value.cta}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Layout>
    </React.Fragment>
  );

}

export default DemoPortofolio;
