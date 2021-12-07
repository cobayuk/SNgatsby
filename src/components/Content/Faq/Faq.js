import React, { Fragment, useState } from "react";
import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  CssBaseline,
  AccordionDetails
}
from '@material-ui/core';
import * as Style from '@components/Content/Faq/FaqStyled';

const FaqListQuestions = [
  {
    id: 0,
    faqname: 'Apakah bisa di revisi?',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 1,
    faqname: 'Berapa lama proses revisi selesai?',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 2,
    faqname: 'Apakah jika mengurangi fitur dapat mengurangi harga?',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 3,
    faqname: 'Berapa lama proses pembuatannya?',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 4,
    faqname: 'Jika sewaktu-waktu acaranya mundur apakah jadwal bisa disesuaikan?',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 5,
    faqname: 'Apakah dapat merubah template yang dipilih setelah melakukan pembayaran?',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 6,
    faqname: 'Berapa lama website undangan akan aktif dan dapat di akses?',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  }
];

console.log(FaqListQuestions);

const FaqContent = () => {
  const [expanded, setExpanded] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Fragment>
      <CssBaseline/>
      <Style.ContainerFaq>
        <Style.HeadingFaqFirst
          component="h1"
          variant="h1"
          align="center"
          color="textPrimary"
        >
          * Frequently Ask Questions
        </Style.HeadingFaqFirst>
        <Style.HeadingFaqSecond
          component="h2"
          variant="h2"
          align="center"
          color="textPrimary"
        >
          Pertanyaan yang Sering diajukan 
        </Style.HeadingFaqSecond>
        <Box mt={isMobile ? 5 : 15}>
          {FaqListQuestions.map((value, key) => (
            <Style.MenuAccordion 
              key={key}
              expanded={expanded === `panel${key}`} 
              onChange={handleChange(`panel${key}`)}
            >
              <Style.HeadingAccordionSummary
                expandIcon={<Style.ArrowFaq/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography>{value.faqname}</Typography>
              </Style.HeadingAccordionSummary>
              <AccordionDetails>
                <Style.FaqDescriptions>
                  {value.description}
                </Style.FaqDescriptions>
              </AccordionDetails>
            </Style.MenuAccordion>
          ))}
        </Box>
      </Style.ContainerFaq>
    </Fragment>
  );
}

export default FaqContent
