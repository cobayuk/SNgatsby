import React from "react";
import  {
  Box,
  Grid,
  Card,
  Container,
  Typography,
  CardHeader,
  CardContent,
  makeStyles
}
from '@material-ui/core';
import { COLORS, FONT_FAMILY, FONT_SIZE } from "@styles/constants";
import ChecklistIcon from "@assets/ornaments/checklist.svg";

const useStyles = makeStyles((theme) => ({
  headingPrice: {
    fontWeight: 'bold',
    fontFamily: `${FONT_FAMILY.oxygen}`,
    marginLeft: theme.spacing(1)
  },
  headingPriceSeparator:{
    position: 'relative',
    top: '-32px',
    bottom: 0,
    fontWeight: 'bold',
    fontSize: `${FONT_SIZE.font24}`,
    color: `${COLORS.black}`
  },
  headingPricingSuffix: {
    fontSize: `${FONT_SIZE.font24}`,
    color: `${COLORS.black}`
  },
  boxDiscount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(1)
  },
  boxDiscountPrice: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingDiscountPrice: {
    fontSize: '20px',
    color: `${COLORS.mediumGray}`,
    textDecoration: 'line-through'
  },
  buttonBoxDiscountGold:{
    width: 'auto',
    height: '24px',
    background: `${COLORS.pinky}`,
    borderRadius: '16px',
    color: `${COLORS.white}`,
    textAlign: 'center',
    padding: '3px 11px 26px 15px'
  },
  buttonBoxDiscount:{
    width: 'auto',
    height: '24px',
    background: `${COLORS.softlyGray}`,
    borderRadius: '16px',
    color: `${COLORS.softlyBlack}`,
    textAlign: 'center',
    padding: '3px 11px 26px 15px'
  },
  wrapperCards: {
    width: '100%',
    height: '600px',
    maxHeight: '600px'
  },
  wrapperCardsGold: {
    width: '100%',
    height: '600px'
  },
  cardHeaderTier: {
    fontWeight: 'bold'
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  listPricingOrder: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapperPricing: {
    marginTop: '5em',
    marginBottom: '5em',
    paddingTop: '50px'
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
  headingFirstTitle: {
    fontSize: '20px',
    fontFamily: `${FONT_FAMILY.oxygen}`,
    fontWeight: 'bold',
    color: COLORS.brownSugar,
    textTransform: 'upperCase'
  },
  captionPricing: {
    fontSize: '15px',
    fontFamily: `${FONT_FAMILY.oxygen}`,
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

const packages = [
  {
    title: 'Silver',
    price: '69',
    discount: 'Diskon 30%',
    discountPrice: '99.000',
    description: [
      'Responsive Layout',
      'Desain Template',
      'Penghitung Waktu Mundur',
      'Navigasi Peta',
      'Quotes/Qur’an Verse',
      'Belum Termasuk Domain'
    ]
  },
  {
    title: 'Gold',
    price: '99',
    discount: 'Diskon 35%',
    discountPrice: '149.000',
    description: [
      'Responsive Layout',
      'Desain Template',
      'Penghitung Waktu Mundur',
      'Navigasi Peta',
      'Quotes/Qur’an Verse',
      'Audio Musik',
      'Galeri Foto',
      'Facebook Comment',
      'Belum Termasuk Domain'
    ]
  },
  {
    title: 'Platinum',
    price: '149',
    discount: 'Diskon 25%',
    discountPrice: '199.000',
    description: [
      'Responsive Layout',
      'Desain Template',
      'Penghitung Waktu Mundur',
      'Navigasi Peta',
      'Quotes/Qur’an Verse',
      'Audio Musik',
      'Galeri Foto',
      'Facebook Comment',
      'QR Code Dompet Digital',
      'Sudah Termasuk Domain'
    ]
  }
];

const PricingPrice = () => {

  const classes = useStyles();

  return (
    <Box className={classes.wrapperPricing} id="pricing">
      <Container
        maxWidth="md"
        component="main"
        className={classes.heroContent}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          className={classes.headingFirstTitle}
        >
          Pilihan Paket
        </Typography>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          className={classes.headingPricing}
        >
          Fitur suka-suka kamu.
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
          className={classes.captionPricing}
        >
          Dengan 3 pilihan paket, kamu bebas pilih fitur manapun suka-suka kamu.
          Nikmati fitur sesuai dengan kebutuhan kamu dengan pelayanan yang tetap nomor satu.
        </Typography>
      </Container>
      <Container
        maxWidth="lg"
        component="main"
        className={classes.boxOuterPricing}
      >
        <Grid
          container
          alignItems="flex-end"
        >
          {packages.map((tier, key) => (
            <Grid
              key={key}
              item
              xs={12}
              sm={tier.title === 'Gold' ? 12 : 6}
              md={4}
            >
              <Card className={tier.title === 'Gold' ? classes.wrapperCardsGold: classes.wrapperCards}>
                <CardHeader
                  className={classes.cardHeaderTier}
                  title={tier.title}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  // action={tier.title === 'Gold' ? <StarIcon /> : null}
                />
                <CardContent>
                  <Box className={classes.boxDiscount}>
                    <Typography
                      className={tier.title === 'Gold' ? classes.buttonBoxDiscountGold : classes.buttonBoxDiscount}
                      component="span"
                    >
                      {tier.discount}
                    </Typography>
                  </Box>
                  <Box className={classes.boxDiscountPrice}>
                    <Typography
                      className={classes.headingDiscountPrice}
                      component="span"
                    >
                      {tier.discountPrice}
                    </Typography>
                  </Box>
                  <Box className={classes.cardPricing}>

                    <Typography
                      component="span"
                      variant="h6"
                      color="textSecondary"
                      className={classes.headingPriceSeparator}
                    >
                      Rp
                    </Typography>
                    <Typography
                      className={classes.headingPrice}
                      component="h2"
                      variant="h2"
                      color="textPrimary"
                    >
                      {tier.price}
                    </Typography>
                    <Typography
                      className={classes.headingPricingSuffix}
                      variant="h6"
                      color="textSecondary"
                    >
                      ribu
                    </Typography>
                  </Box>
                  <ul className={classes.listPricingOrder}>
                    {tier.description.map((value, key) => (
                      <Typography
                        key={key}
                        component="li"
                        variant="subtitle1"
                        align="left"
                      >
                        <Box component="span" mr={1}>
                          <img src={ChecklistIcon} alt="checklist"/>
                        </Box>
                        {value}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default PricingPrice;

