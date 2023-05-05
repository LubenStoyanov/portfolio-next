import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import { SiGithub } from "react-icons/si";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";

const ViewSiteButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  border: 2px solid black;
  border-radius: 25px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #15141a;
  color: white;
`;
const CardWrapper = styled.div`
  display: flex;
  height: 500px;
  border-radius: 25px;
  margin-top: 20px;
  margin-bottom: 80px;
  justify-content: space-between;

  box-shadow: rgba(21, 20, 26, 0.1) 0px 30px 60px -12px,
    rgba(21, 20, 26, 0.2) 0px 18px 36px -18px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    height: 560px;
  }
`;

const CardColor = styled.div`
  background-color: ${(props) => props.color};
  width: 40%;
  border-radius: 25px 0 25px 0;
  margin-top: 40px;

  @media (max-width: 1024px) {
    border-radius: 0 0 25px 25px;
    height: 200px;
    width: 100%;
  }
`;

export default function SwiperComponent() {
  return (
    <Swiper
      slidesPerView={1.3}
      centeredSlides={true}
      loop={true}
      grabCursor={true}
      breakpoints={{
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      effect="coverflow"
      coverflowEffect={{
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow]}
      className="mySwiper"
    >
      <SwiperSlide className="card-shadow ">
        <CardWrapper>
          <div className="flex flex-col items-center lg:items-start lg:max-w-[40ch] lg:pl-12 lg:pt-20">
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="lg:text-4xl lg:font-[500] text-center pt-8">
                Speech Blender
              </h3>
              <p className="px-5 lg:px-0 py-2 text-base font-[500] lg:text-gray-500 ">
                A web app for blending multiple audio recordings into a cohesive
                file, with features for adjusting timing, volume, effects, and
                more. Perfect for podcasters, language learners, and content
                creators.
              </p>
            </div>
            <div>
              <ViewSiteButton>
                <a
                  className="flex flex-row px-5 py-2"
                  href="https://github.com/LubenStoyanov/speech-blender-frontend"
                  target="_blank"
                >
                  <span className="mr-1">VIEW SITE</span>
                  <SiGithub className="place-self-center" />
                </a>
              </ViewSiteButton>
            </div>
          </div>
          <CardColor color="#262228" />
        </CardWrapper>
      </SwiperSlide>
      <SwiperSlide className="card-shadow ">
        <CardWrapper>
          <div className="flex flex-col items-center lg:max-w-[40ch] lg:pl-12 lg:pt-20">
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="lg:text-4xl lg:font-[500] text-center pt-8">
                The Fine Art
              </h3>
              <p className="px-5 lg:px-0 py-2 text-base font-[500] lg:text-gray-500 ">
                Discover inspiring works of art from around the world on the
                Fine Art Website. Featuring music, visual art, and books, this
                platform is a go-to destination for art enthusiasts and
                collectors.
              </p>
            </div>
            <div>
              <ViewSiteButton>
                <a
                  className="flex flex-row px-5 py-2"
                  href="https://github.com/LubenStoyanov/fine-arts-express"
                  target="_blank"
                >
                  <span className="mr-1">VIEW SITE</span>
                  <SiGithub className="place-self-center" />
                </a>
              </ViewSiteButton>
            </div>
          </div>
          <CardColor color="#007849" />
        </CardWrapper>
      </SwiperSlide>
      <SwiperSlide className="card-shadow">
        <CardWrapper>
          <div className="flex flex-col items-center lg:max-w-[40ch] lg:pl-12 lg:pt-20">
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="lg:text-4xl lg:font-[500] text-center pt-8">
                Drum Kit
              </h3>
              <p className="px-5 lg:px-0 py-2 text-base font-[500] lg:text-gray-500 ">
                The Drum Kit web app is an interactive tool that lets users play
                virtual drums with a computer keyboard or by clicking on the
                screen. It&apos;s easy to use and features a variety of drum
                sounds to create unique beats.
              </p>
            </div>
            <div>
              <ViewSiteButton>
                <a
                  className="flex flex-row px-5 py-2"
                  href="https://github.com/LubenStoyanov/drum-kit"
                  target="_blank"
                >
                  <span className="mr-1">VIEW SITE</span>
                  <SiGithub className="place-self-center" />
                </a>
              </ViewSiteButton>
            </div>
          </div>
          <CardColor color="#0375b4" />
        </CardWrapper>
      </SwiperSlide>
      <SwiperSlide className="card-shadow">
        <CardWrapper>
          <div className="flex flex-col items-center lg:max-w-[40ch] lg:pl-12 lg:pt-20">
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="lg:text-4xl lg:font-[500] text-center pt-8">
                Pokèfight
              </h3>
              <p className="px-5 lg:px-0 py-2 text-base font-[500] lg:text-gray-500 ">
                Pokéfight is a fun web-based card game featuring Pokémon
                characters and fight animations. Battling your opponents
                confronts you with different pokémons. With leaderboards you can
                show off your skills to other players.
              </p>
            </div>
            <div>
              <ViewSiteButton>
                <a
                  className="flex flex-row px-5 py-2"
                  href="https://github.com/LubenStoyanov/pokefight-frontend"
                  target="_blank"
                >
                  <span className="mr-1">VIEW SITE</span>
                  <SiGithub className="place-self-center" />
                </a>
              </ViewSiteButton>
            </div>
          </div>
          <CardColor color="#ffce00" />
        </CardWrapper>
      </SwiperSlide>
    </Swiper>
  );
}
