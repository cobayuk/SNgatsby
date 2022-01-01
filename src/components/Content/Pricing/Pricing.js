import React from "react";
import  {
  Box,
  Grid,
  useTheme,
  Container,
  Typography,
  CardContent,
  makeStyles,
  useMediaQuery
}
from '@material-ui/core';

import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";

import { COLORS } from "@styles/constants";
import ChecklistIcon from "@assets/ornaments/checklist.svg";
import * as Style from '@components/Content/Pricing/PricingStyled';
import "./Pricing.css";

const sliderParams = {
  slidesPerView: 'auto',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
    clickable: true
  },
  loop: true
}

const useStyles = makeStyles(() => ({
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
  }
}));

const packages = [
  {
    title: 'Silver',
    price: '69',
    discount: 'Diskon 40%',
    discountPrice: '173.000',
    description: [
      'Responsive Layout',
      'Desain Template',
      'Penghitung Waktu Mundur',
      'Navigasi Peta',
      'Quotes/Qur’an Verse',
      // 'Belum Termasuk Domain'
    ]
  },
  {
    title: 'Platinum',
    price: '149',
    discount: 'Diskon 50%',
    discountPrice: '298.000',
    description: [
      'Responsive Layout',
      'Desain Template',
      'Penghitung Waktu Mundur',
      'Navigasi Peta',
      'Quotes/Qur’an Verse',
      'Protokol Kesehatan',
      // 'Audio Musik',
      'Galeri Foto',
      // 'Facebook Comment',
      'Amplop Digital',
      // 'Sudah Termasuk Domain'
    ]
  },
  {
    title: 'Gold',
    price: '99',
    discount: 'Diskon 45%',
    discountPrice: '220.000',
    description: [
      'Responsive Layout',
      'Desain Template',
      'Penghitung Waktu Mundur',
      'Navigasi Peta',
      'Quotes/Qur’an Verse',
      'Protokol Kesehatan',
      'Amplop Digital',
      // 'Audio Musik',
      // 'Galeri Foto',
      // 'Facebook Comment',
      // 'Belum Termasuk Domain'
    ]
  },

];

const PricingPrice = () => {

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Style.WrapperPricing id="pricing">
      <Container
        maxWidth="md"
        component="main"
      >
        <Style.HeadingFirstTitle
          component="h1"
          variant="h1"
          align="center"
          color="textPrimary"
        >
          Pilihan Paket
        </Style.HeadingFirstTitle>
        <Style.HeadingPricing
          component="h1"
          variant="h1"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Fitur suka-suka kamu.
        </Style.HeadingPricing>
        <Style.CaptionPricing
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Dengan 3 pilihan paket, kamu bebas pilih fitur manapun suka-suka kamu.
          Nikmati fitur sesuai dengan kebutuhan kamu dengan pelayanan yang tetap nomor satu.
        </Style.CaptionPricing>
      </Container>
      {isMobile ? (
        <Swiper {...sliderParams}>
          {packages.map((tier, key) => (
            <Grid
              key={key}
              item
              xs={12}
              md={12}
            >
              <Style.CardsContentAreaMobile title={tier.title}>
                <Style.CardHeaderTierMobile title={tier.title}>
                  <Style.HeadingTierPackages
                    component="span"
                  >
                    {tier.title}
                  </Style.HeadingTierPackages>
                </Style.CardHeaderTierMobile>
                <CardContent>
                  <Style.BoxDiscount>
                    <Typography
                      className={tier.title === 'Platinum' ? classes.buttonBoxDiscountGold : classes.buttonBoxDiscount}
                      component="span"
                    >
                      {tier.discount}
                    </Typography>
                  </Style.BoxDiscount>
                  <Style.BoxDiscountPrice>
                    <Style.HeadingDiscountPrice
                      component="span"
                    >
                      {tier.discountPrice}
                    </Style.HeadingDiscountPrice>
                  </Style.BoxDiscountPrice>
                  <Style.CardPricing>
                    <Style.HeadingPriceSeparator
                      component="span"
                      variant="h6"
                      color="textSecondary"
                    >
                      Rp
                    </Style.HeadingPriceSeparator>
                    <Style.HeadingPrice
                      component="h2"
                      variant="h2"
                      color="textPrimary"
                    >
                      {tier.price}
                    </Style.HeadingPrice>
                    <Style.HeadingPricingSuffix
                      variant="h6"
                      color="textSecondary"
                    >
                      ribu
                    </Style.HeadingPricingSuffix>
                  </Style.CardPricing>
                  <Style.ListPricingOrder>
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
                  </Style.ListPricingOrder>
                </CardContent>
              </Style.CardsContentAreaMobile>
            </Grid>
          ))}
        </Swiper>
      ) : (
        <Style.BoxOuterPricing
          maxWidth="lg"
        >
          <Grid
            container
            alignItems="flex-start"
          >
            {packages.map((tier, key) => (
              <Grid
                key={key}
                item
                xs={12}
                sm={tier.title === 'Gold' ? 12 : 4}
                md={4}
              >
                <Style.CardsContentArea title={tier.title}>
                  <Style.CardHeaderTier title={tier.title}>
                    <Style.HeadingTierPackages
                      component="span"
                    >
                      {tier.title}
                    </Style.HeadingTierPackages>
                  </Style.CardHeaderTier>
                  <CardContent>
                    <Style.BoxDiscount>
                      <Typography
                        className={tier.title === 'Platinum' ? classes.buttonBoxDiscountGold : classes.buttonBoxDiscount}
                        component="span"
                      >
                        {tier.discount}
                      </Typography>
                    </Style.BoxDiscount>
                    <Style.BoxDiscountPrice>
                      <Style.HeadingDiscountPrice
                        component="span"
                      >
                        {tier.discountPrice}
                      </Style.HeadingDiscountPrice>
                    </Style.BoxDiscountPrice>
                    <Style.CardPricing>
                      <Style.HeadingPriceSeparator
                        component="span"
                        variant="h6"
                        color="textSecondary"
                      >
                        Rp
                      </Style.HeadingPriceSeparator>
                      <Style.HeadingPrice
                        component="h2"
                        variant="h2"
                        color="textPrimary"
                      >
                        {tier.price}
                      </Style.HeadingPrice>
                      <Style.HeadingPricingSuffix
                        variant="h6"
                        color="textSecondary"
                      >
                        ribu
                      </Style.HeadingPricingSuffix>
                    </Style.CardPricing>
                    <Style.ListPricingOrder>
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
                    </Style.ListPricingOrder>
                  </CardContent>
                </Style.CardsContentArea>
              </Grid>
            ))}
          </Grid>
        </Style.BoxOuterPricing>
      )}
    </Style.WrapperPricing>
  );
}

export default PricingPrice;

