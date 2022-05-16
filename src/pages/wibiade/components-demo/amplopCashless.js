import React, { useEffect, useState } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import * as Style from "@styles/demo/platinum/amplopCashlessStyle";
import AllWallet from "@assets/e-wallet/e-wallet.png";
import WomanAvatar from "@assets/e-wallet/girl-marry.png";
import ManAvatar from "@assets/e-wallet/man-marry.png";
import ManAvatarFull from "@assets/e-wallet/man-marry-full.png";
// import SampleQRCode from "@assets/e-wallet/qr-code-example.png";
import MandiriLogo from "@assets/e-wallet/mandiri-logo.png";
import BCALogo from "@assets/e-wallet/bca-logo.png";
import AOS from 'aos'
import 'aos/dist/aos.css';

const AmplopCashless = () =>  {

    const [alertOpenFirst, setAlertOpenFirst] = useState(false);
    const [alertOpenSecond, setAlertOpenSecond] = useState(false);

    const CopyToClipboard = toCopy => {
        const el = document.createElement(`textarea`)
        el.value = toCopy
        el.setAttribute(`readonly`, ``)
        el.style.position = `absolute`
        el.style.left = `-9999px`
        document.body.appendChild(el)
        el.select()
        document.execCommand(`copy`)
        document.body.removeChild(el)
      }

    useEffect(() => {
        AOS.init({
            duration: 1200, // values from 0 to 3000, with step 50ms
            once: false, // whether animation should happen only once - while scrolling down
          });
    }, []);

    return(
        <>
            <Style.SectionCashless>
                <div data-aos="fade-in">
                    <Style.CashlessTitle>Amplop Cashless</Style.CashlessTitle>
                    <Style.CashlessDescription>Kirim hadiah untuk Wibi &#38; Ade melalui</Style.CashlessDescription>
                    <Style.AllEwallet src={AllWallet} alt="e-wallet" width="330" height="32"/>
                </div>

                {/* <Style.CashlessDescription data-aos="fade-in">dan seluruh aplikasi yang mendukung QRIS</Style.CashlessDescription> */}
                <Style.SectionBarcode>
                    {/* <p>Scan kode QR melalui e-wallet favorit Kamu</p> */}
                    <p>Transfer melalui melalui e-wallet atau mobile banking favorit Kamu</p>
                    <Style.InnerBarcode>
                        <Style.GirlAvatar src={WomanAvatar} alt="woman-avatar"/>
                        <Style.SquareBarcode>
                            {/* <Style.QRCode src={SampleQRCode} alt="qr-code"/> */}
                            <div>
                                <Style.BankLogo src={BCALogo} alt="mandiri-logo" width="70"/>
                                <Style.AccountNumber>3100098261</Style.AccountNumber>
                                <Style.PersonTitle>atas nama</Style.PersonTitle>
                                <Style.PersonName>Wibi Agung Prasetyo</Style.PersonName>
                                <Style.CopyToClipboardButton
                                    onClick={() => {
                                    CopyToClipboard("3100098261")
                                    setAlertOpenFirst(true)
                                    }}
                                >
                                    Salin Nomor Rekening
                                </Style.CopyToClipboardButton>

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
                                        Nomor rekening Wibi Agung Prasetyo Berhasil disalin
                                    </Alert>
                                </Snackbar>
                            </div>

                            <Style.SeparatorContainer>
                                <Style.LineSeparator/><Style.WordSeparator>atau</Style.WordSeparator><Style.LineSeparator/>
                            </Style.SeparatorContainer>

                            <div>
                                <Style.BankLogo src={BCALogo} alt="BCA-logo" width="70"/>
                                <Style.AccountNumber>6920257109</Style.AccountNumber>
                                <Style.PersonTitle>atas nama</Style.PersonTitle>
                                <Style.PersonName>Maftuhatul Amanah</Style.PersonName>
                                <Style.CopyToClipboardButton
                                    onClick={() => {
                                    CopyToClipboard("6920257109")
                                    setAlertOpenSecond(true)
                                    }}
                                >
                                    Salin Nomor Rekening
                                </Style.CopyToClipboardButton>

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
                            </div>

                        </Style.SquareBarcode>
                        <Style.ManAvatar src={ManAvatar} alt="woman-avatar"/>
                        <Style.ManAvatarFull src={ManAvatarFull} alt="woman-avatar"/>
                    </Style.InnerBarcode>

                </Style.SectionBarcode>
            </Style.SectionCashless>
        </>
    )
}

export default AmplopCashless;
