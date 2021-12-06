import React, { useEffect } from "react";
import * as Style from "@styles/platinum/amplopCashlessStyle";
import AllWallet from "@assets/e-wallet/e-wallet.png";
import WomanAvatar from "@assets/e-wallet/girl-marry.png";
import ManAvatar from "@assets/e-wallet/man-marry.png";
import SampleQRCode from "@assets/e-wallet/qr-code-example.png";
import AOS from 'aos'
import 'aos/dist/aos.css';

const AmplopCashless = () =>  {

    useEffect(() => {
        AOS.init({
            duration: 1200, // values from 0 to 3000, with step 50ms
            once: false, // whether animation should happen only once - while scrolling down
          });
    }, []);
    
    return(
        <>
            <Style.SectionCashless>
                <Style.CashlessTitle data-aos="fade-in">Amplop Cashless</Style.CashlessTitle>
                <Style.CashlessDescription data-aos="fade-in">Kami menerima amplop cashless melalui</Style.CashlessDescription>
                <Style.AllEwallet data-aos="fade-in" src={AllWallet} alt="e-wallet" width="330" height="32"/>
                <Style.CashlessDescription data-aos="fade-in">dan seluruh aplikasi yang mendukung QRIS</Style.CashlessDescription>
                <Style.SectionBarcode>
                    <p>Scan kode QR melalui e-wallet favorit Kamu</p>
                    <Style.InnerBarcode>
                        <Style.GirlAvatar src={WomanAvatar} alt="woman-avatar"/>
                        <Style.SquareBarcode>
                            <Style.QRCode src={SampleQRCode} alt="qr-code"/>
                            <Style.PersonTitle>Atas Nama</Style.PersonTitle>
                            <Style.PersonName>Reni Fitria</Style.PersonName>
                        </Style.SquareBarcode>
                        <Style.ManAvatar src={ManAvatar} alt="woman-avatar"/>
                    </Style.InnerBarcode>
                    
                </Style.SectionBarcode>
            </Style.SectionCashless>
        </>
    )
}

export default AmplopCashless;