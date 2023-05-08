import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { SiGithub } from "react-icons/si";

import "swiper/css";
import "swiper/css/effect-cards";

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
  border-radius: 25px;
  justify-content: space-between;
  height: inherit;

  box-shadow: rgba(21, 20, 26, 0.1) 0px 30px 60px -12px,
    rgba(21, 20, 26, 0.2) 0px 18px 36px -18px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CardColor = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 25px 0 25px 0;

  @media (max-width: 900px) {
    border-radius: 0 0 25px 25px;
    display: none;
  }
`;

const Badges = styled.small`
  font-size: 0.75rem;
  font-weight: 300;
`;

export default function SwiperComponent() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide>
        <CardWrapper>
          <div className="flex flex-col items-center md:items-start  md:pl-12 md:pt-20">
            <div className="flex flex-col items-center  md:items-start">
              <h3 className="md:text-4xl text-3xl font-[600] text-center pt-8">
                Speech Blender
              </h3>
              <p className="px-5 md:px-0 py-5 text-xl font-[600] max-w-[40ch]">
                A web app for blending multiple audio recordings into a cohesive
                file, with features for adjusting timing, volume, effects, and
                more. Perfect for podcasters, language learners, and content
                creators.
              </p>
              <div className="flex flex-wrap gap-x-2 px-5">
                <Badges>React.js</Badges>
                <Badges>React-Router v6</Badges>
                <Badges>TailwindCSS</Badges>
                <Badges>Node.js</Badges>
                <Badges>MongoDB</Badges>
                <Badges>AWS</Badges>
              </div>
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
          <div className="flex flex-col items-center md:max-w-[40ch] md:pl-12 md:pt-20">
            <div className="flex flex-col  items-center md:items-start">
              <h3 className="md:text-4xl text-3xl font-[600] text-center pt-8">
                The Fine Art
              </h3>
              <p className="px-5 md:px-0 py-5 text-xl font-[600] max-w-[40ch]">
                Discover inspiring works of art from around the world on the
                Fine Art Website. Featuring music, visual art, and books, this
                platform is a go-to destination for art enthusiasts and
                collectors.
              </p>
              <div className="flex flex-wrap gap-x-2 px-5">
                <Badges>React.js</Badges>
                <Badges>React-Router v6</Badges>
                <Badges>TailwindCSS</Badges>
                <Badges>Postgresql</Badges>
                <Badges>Contentful(CMS)</Badges>
                <Badges>Node.js</Badges>
              </div>
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
          <div className="flex flex-col items-center md:max-w-[40ch] md:pl-12 md:pt-20">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="md:text-4xl text-3xl font-[600] text-center pt-8">
                Pokèfight
              </h3>
              <p className="px-5 md:px-0 py-5 text-xl font-[600] max-w-[40ch]">
                Pokéfight is a fun web-based card game featuring Pokémon
                characters and fight animations. Battling your opponents
                confronts you with different pokémons. With leaderboards you can
                show off your skills to other players.
              </p>
              <div className="flex flex-wrap gap-x-2 px-5">
                <Badges>React</Badges>
                <Badges>React-Router v6</Badges>
                <Badges>ChakraUI</Badges>
                <Badges>Framer Motion</Badges>
                <Badges>Node.js</Badges>
                <Badges>Poké API</Badges>
                <Badges>MongoDB</Badges>
              </div>
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
      {/* <SwiperSlide className="card-shadow">
        <CardWrapper>
          <div className="flex flex-col items-center md:max-w-[40ch] md:pl-12 md:pt-20">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-wrap gap-x-2 px-5">
                <Badges>React</Badges>
                <Badges>React-Router v6</Badges>
                <Badges>TailwindCSS</Badges>
                <Badges>AWS</Badges>
              </div>
              <h3 className="md:text-4xl text-3xl font-[600] text-center pt-8">
                Drum Kit
              </h3>
              <p className="px-5 md:px-0 py-5 text-xl font-[600] max-w-[40ch]">
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
      </SwiperSlide> */}
    </Swiper>
  );
}
