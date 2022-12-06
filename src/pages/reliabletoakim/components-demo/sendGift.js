import React, { useEffect, useState } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import * as Style from "@styles/temporary/reliabletoakim/sendGiftStyle";
// import SampleQRCode from "@assets/e-wallet/qr-code-example.png";
// import MandiriLogo from "@assets/e-wallet/mandiri-logo.png";
import GiftIcon from "@assets/icons/ic_gift.svg";
import BCALogo from "@assets/e-wallet/bca-logo.png";
import AOS from 'aos'
import 'aos/dist/aos.css';

import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const SendGift = () =>  {

    const [alertOpenFirst, setAlertOpenFirst] = useState(false);
    const [alertOpenSecond, setAlertOpenSecond] = useState(false);
    const [openGift, setOpenGift] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1200, // values from 0 to 3000, with step 50ms
            once: false, // whether animation should happen only once - while scrolling down
          });
    }, []);

    const handleOpenGift = () => {
        setOpenGift(true);
    }

    const handleCloseGift = () => {
        setOpenGift(false);
    }

    const GiftModal = () => (
      <Style.ModalContainer
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openGift}
        onClose={handleCloseGift}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openGift}>
          <Style.ModalWrapper>
              <Style.InnerModal>
                <Style.BankLogo src={BCALogo} alt="mandiri-logo" width="70"/>
                <Style.AccountNumber>5710065006</Style.AccountNumber>
                <Style.PersonTitle>atas nama</Style.PersonTitle>
                <Style.PersonName>Mustakim Maulana</Style.PersonName>
                <Style.CopyToClipboardButton
                    onClick={() => {
                    {navigator.clipboard.writeText("5710065006")}
                    setOpenGift(false)
                    setAlertOpenFirst(true)
                    }}
                >
                    Salin Nomor Rekening
                </Style.CopyToClipboardButton>

                <Style.SeparatorContainer>
                  <Style.LineSeparator/><Style.WordSeparator>atau</Style.WordSeparator><Style.LineSeparator/>
                </Style.SeparatorContainer>

                <Style.BankLogo src={BCALogo} alt="BCA-logo" width="70"/>
                <Style.AccountNumber>6041170988</Style.AccountNumber>
                <Style.PersonTitle>atas nama</Style.PersonTitle>
                <Style.PersonName>Nasrifatul Aulia</Style.PersonName>
                <Style.CopyToClipboardButton
                    onClick={() => {
                    {navigator.clipboard.writeText("6041170988")}
                    setOpenGift(false)
                    setAlertOpenSecond(true)
                    }}
                >
                    Salin Nomor Rekening
                </Style.CopyToClipboardButton>


              </Style.InnerModal>
          </Style.ModalWrapper>
        </Fade>
      </Style.ModalContainer>
    )

    const GroomSnackbar = () => (
      <Snackbar
          open={alertOpenFirst}
          autoHideDuration={3000}
          onClose={() => setAlertOpenFirst(false)}
          anchorOrigin={{
          vertical: "top",
          horizontal: "center"
          }}
      >
          <Alert
          onClose={() => setAlertOpenFirst(false)}
          severity="success"
          variant="filled"
          >
              Nomor rekening Mustakim Maulana Berhasil disalin
          </Alert>
      </Snackbar>
    )

    const BrideSnackbar = () => (
      <Snackbar
          open={alertOpenSecond}
          autoHideDuration={3000}
          onClose={() => setAlertOpenSecond(false)}
          anchorOrigin={{
          vertical: "top",
          horizontal: "center"
          }}
      >
          <Alert
          onClose={() => setAlertOpenSecond(false)}
          severity="success"
          variant="filled"
          >
              Nomor rekening Maftuhatul Amanah Berhasil disalin
          </Alert>
      </Snackbar>
    )

    return (
        <>
            <Style.SectionGift>
                <div data-aos="fade-in">
                    <Style.CashlessTitle>Kirim Hadiah</Style.CashlessTitle>
                    <Style.CashlessDescription>Bagi yang ingin memberikan tanda kasih, dapat mengirimkan melalui fitur dibawah ini:</Style.CashlessDescription>
                </div>

                <Style.GiftContainer data-aos="fade-up">
                  <Style.OpenGift onClick={handleOpenGift}>
                    <Style.GiftIcon src={GiftIcon} alt="gift-icon" />
                    <span>Kirim Hadiah</span>
                  </Style.OpenGift>
                </Style.GiftContainer>

                <GiftModal />

                <GroomSnackbar />
                <BrideSnackbar />
            </Style.SectionGift>
        </>
    )
}

export default SendGift;
