import React from "react";
import  {
  Box,
  Grid,
  Card,
  Button,
  Container,
  Typography,
  CardHeader,
  CardContent,
  CardActions,
  makeStyles
}
from '@material-ui/core';
import { COLORS } from "../styles/constants";
import StarIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  wrapperPricing: {
    marginTop: '5em',
    marginBottom: '5em'
  },
  boxOuterPricing: {
    marginTop: '2em'
  },
  headingPricing: {
    fontSize: '40px',
    fontFamily: 'Oxygen',
    marginBottom: '30px',
    fontWeight: 'bold'
  },
  captionPricing: {
    fontSize: '15px',
    fontFamily: 'Oxygen',
    marginBottom: '30px',
  },
  buttonActionPricing: {
    backgroundColor: `${COLORS.golden}`,
    border: '0',
    color: `${COLORS.white}`,
    '&:hover': {
      backgroundColor: `${COLORS.golderDark}`,
      color: `${COLORS.white}`,
      border: '0'
    }
  }
}));

const tiers = [
  {
    title: 'Sung Icip ( NgeCobian )',
    price: '100',
    description: [
      'Responsive Layout',
      'Desain Template',
      'Facebook Comment',
      'Belum Termasuk Domain',
    ],
    buttonText: 'Cobain Aja Dulu',
    buttonVariant: 'outlined',
  },
  {
    title: 'Sung Ngeu ( Ngeunah )',
    subheader: 'Paling Terlaris Boskue',
    price: '250',
    description: [
      'Audio Musik',
      'Responsive Layout',
      'CMS Support',
      'Facebook Comment',
      'Desain Template',
      'Belum Termasuk Domain'
    ],
    buttonText: 'Pesan Sekarang Terlaris',
    buttonVariant: 'contained',
  },
  {
    title: 'Sung Crit ( NgeCrit ) ',
    price: '700',
    description: [
      'Audio Musik',
      'CMS Support',
      'Responsive Layout',
      'Live Streaming Youtube',
      'Facebook Comment',
      'Desain Bisa Custom',
      'Sudah Termasuk Domain'
    ],
    buttonText: 'Pesan Sekarang Nagih',
    buttonVariant: 'outlined',

  }
];

const PricingPrice = () => {

  const classes = useStyles();

  return (
    <Box className={classes.wrapperPricing} id="pricing">
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.headingPricing}>
          Paket Harga Sungnikah
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p" className={classes.captionPricing}>
          Dengan Sungnikah kami akan membantu mengatasi permasalahan anda, tidak hanya pegadaian ya hehehe.... sung pilih paket sesuai kebutuhan kamu dan dompet kamu
          dengan cara klik daftar paket di bawah ini...
        </Typography>
      </Container>
      <Container maxWidth="lg" component="main" classes={classes.boxOuterPricing}>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      Rp{tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /K
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button className={classes.buttonActionPricing} fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default PricingPrice

