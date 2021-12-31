import React, { Fragment, useState } from "react";
import {
  Box,
  useTheme,
  useMediaQuery,
  CssBaseline
}
from '@material-ui/core';
import * as Style from '@components/Content/Faq/FaqStyled';

const FaqListQuestions = [
  {
    id: 0,
    faqname: 'Apakah bisa di revisi?',
    description: 'Tentu bisa. Kamu dapat revisi desain ataupun informasi lainnya sebanyak 3 kali. Jika melebihi batas tersebut, maka akan dikenakan biaya tambahan sebesar 30rb.'
  },
  {
    id: 1,
    faqname: 'Berapa lama proses revisi selesai?',
    description: 'Proses revisi selesai paling cepat di hari yang sama. Kecuali jika kamu mengajukan revisi di hari libur, maka akan dikerjakan ketika hari kerja.'
  },
  {
    id: 2,
    faqname: 'Apakah jika mengurangi fitur dapat mengurangi harga?',
    description: 'Tidak. Namun kamu dapat mengurangi fitur dari paket yang kamu pilih sesuai yang kamu inginkan.'
  },
  {
    id: 3,
    faqname: 'Berapa lama proses pembuatannya?',
    description: 'Jika data-data sudah lengkap, proses pembuatan hanya membutuhkan waktu 3 hari kerja. Jadi pastikan data kamu sudah lengkap ya.'
  },
  {
    id: 4,
    faqname: 'Jika sewaktu-waktu acaranya mundur apakah jadwal bisa disesuaikan?',
    description: 'Selama kondisi covid-19 saat ini, kami memberikan GARANSI RESCHEDULE atau JADWAL ULANG. Jadi kamu jangan khawatir jika jadwal pernikahan kamu tiba-tiba berubah.'
  },
  {
    id: 5,
    faqname: 'Apakah dapat merubah template yang dipilih setelah melakukan pembayaran?',
    description: 'Bisa, template dapat diganti maupun di upgrade sesuai pricelist yang ada. Tentunya maksimal 3 hari sebelum tanggal undangan ya.'
  },
  {
    id: 6,
    faqname: 'Berapa lama website undangan akan aktif dan dapat di akses?',
    description: 'Undangan website akan aktif sampai H+3 dari tanggal undangan yang ditentukan. Setelah itu website tidak dapat di akses kembali.'
  }
];

const FaqContent = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (panel) => (e, isExpanded) => {
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
          Frequently Ask Questions
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
                <Style.FaqTitle>{value.faqname}</Style.FaqTitle>
              </Style.HeadingAccordionSummary>
              <Style.CustomAccordion>
                <Style.FaqDescriptions>
                  {value.description}
                </Style.FaqDescriptions>
              </Style.CustomAccordion>
            </Style.MenuAccordion>
          ))}
        </Box>
      </Style.ContainerFaq>
    </Fragment>
  );
}

export default FaqContent
