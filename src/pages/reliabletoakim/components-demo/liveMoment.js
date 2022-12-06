import React, { useEffect } from "react";
import * as Style from "@styles/temporary/reliabletoakim/liveMomentStyle";
import AOS from 'aos'
import 'aos/dist/aos.css';

const LiveMoment = () =>  {

    useEffect(() => {
        AOS.init({
            duration: 1200, // values from 0 to 3000, with step 50ms
            once: false, // whether animation should happen only once - while scrolling down
        });
    }, []);

    return(
        <>
            <Style.ContainerMoment>
                <Style.InnerContainer>
                    <Style.IntroMoment data-aos="fade-down">Live Moment</Style.IntroMoment>
                    <Style.SummaryMoment data-aos="fade-up">
                    Bantu kami mengabadikan momen bahagia kami di acara pernikahan kami dengan menandai postingan anda dengan hashtag berikut:
                    </Style.SummaryMoment>

                    <Style.GridContainer container>
                        <Style.GridItem item xs={12} sm={12}>
                          <Style.ExploreContainer data-aos="fade-up">
                            <Style.ExploreMoment href="http://instagram.com/explore/tags/reliabletoakim" target="_blank" rel="noopener noreferrer">
                              <Style.InstagramIcon fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M16,3H8C5.243,3,3,5.243,3,8v8c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V8C21,5.243,18.757,3,16,3z M19,16c0,1.654-1.346,3-3,3H8c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3V16z"/><path d="M12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5S14.757 7 12 7zM12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 15 12 15zM17 6A1 1 0 1 0 17 8 1 1 0 1 0 17 6z"/></Style.InstagramIcon>
                              <span>#reLIAbletoAKIM</span>
                            </Style.ExploreMoment>
                          </Style.ExploreContainer>

                        </Style.GridItem>
                    </Style.GridContainer>



                </Style.InnerContainer>
            </Style.ContainerMoment>
        </>
    )
}

export default LiveMoment;
