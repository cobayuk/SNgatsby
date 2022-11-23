import React from "react";
import styled from 'styled-components';
import Teaser from "@assets/video/akimteaser.mp4";

const WrapperOuter = styled.div`
  position: relative;
  margin-left: 5%;
  margin-right: 5%;
  padding: 5%;
  @media (max-width: 767px) {
    padding: 5% 5% 20% 5%;
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const FirstColumn = styled.div`
  flex-basis: 50%;
  @media (max-width: 767px) {
    flex-basis: 100%;
    margin-bottom: 40px;
    margin: 30% 0;
  }
`;

const Story = styled.h2`
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: normal;
  font-size: 4em;
  text-align: end;
  @media (max-width: 767px) {
    font-size: 2.5em;
    text-align: center;
  }
  line-height: 1em;
  color: #C2A38E;
`;

const Author = styled.span`
  font-family: Crimson Text;
  font-style: italic;
  font-weight: normal;
  font-size: 15px;
  line-height: 15px;
  text-align: end;
  color: #58595B;
  display: block;
  margin-top: 15px;
  @media (max-width: 767px) {
    text-align: center;
  }
`;

const SecondColumn = styled.div`
  flex-basis: 50%;
  @media (max-width: 767px) {
    flex-basis: 100%;
  }
`;

const OuterVideo = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
`;

const VideoWrapper = styled.div`
  position: relative;
`;

const VideoPlayer = styled.video`
  object-fit: cover;
  left: 0px;
  width: 50%;
  max-width: 100%;
  height: 100%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const VideoSection = () => {

  return (
      <WrapperOuter id="video-section">
        <InnerWrapper>
          <FirstColumn>
            <Story>We are most alive <br />when we’re in love.</Story>
            <Author>- John Updike</Author>
          </FirstColumn>
          <SecondColumn>
            <OuterVideo>
              <VideoWrapper>
                <VideoPlayer playsInline preload="none" src={Teaser} autoPlay muted loop></VideoPlayer>
              </VideoWrapper>
            </OuterVideo>
          </SecondColumn>
        </InnerWrapper>
      </WrapperOuter>
  );

}

export default VideoSection;
