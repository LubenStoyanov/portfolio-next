import { Swiper, SwiperSlide } from "swiper/react";
import { SiGithub } from "react-icons/si";

import "swiper/css";
import "swiper/css/effect-cards";
import styled from "styled-components";

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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 25px;
  height: 560px;

  box-shadow: rgba(21, 20, 26, 0.1) 0px 30px 60px -12px,
    rgba(21, 20, 26, 0.2) 0px 18px 36px -18px;
`;

const CardColor = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 200px;
  border-radius: 0 0 25px 25px;
`;

export default function Works({ translate }: { translate: Function }) {
  return (
    <section id="works" className="flex flex-col py-16">
      <div className="bg-[#15141a] text-white pt-16">
        <div className="flex place-items-center place-content-center gap-x-1">
          <span className="text-sm font-bold">&lt;h2&gt; </span>
          <span className="border-t-2 w-20 lg:w-4/12 border-white"></span>
          <h2 className="font-bold lg:text-5xl text-3xl text-center">
            {translate("craft.title")}
          </h2>
          <span className="border-t-2 w-20 lg:w-4/12 border-white"></span>
          <span className="text-sm font-bold">&lt;h2/&gt;</span>
        </div>
        <div className="lg:flex gap-x-5 pt-10">
          <div className="mx-7 pb-16">
            <p className="  lg:max-w-[40ch] ">
              <span className="text-xs font-semibold relative bottom-[2px]">
                &lt;p&gt;
              </span>{" "}
              {translate("craft.1")}
              <b className="text-[#EF6706]">{translate("craft.work")}</b>
              {translate("craft.2")}
              <b className="text-[#EF6706]">{translate("craft.ideas")}</b>
              {translate("craft.3")}
              <b className="text-[#EF6706]">{translate("craft.concepts")}</b>
              {translate("craft.4")}
              <b className="text-[#EF6706]">{translate("craft.exploring")}</b>
              {translate("craft.5")}
              <b className="text-[#EF6706]">{translate("craft.learning")}</b>
              {translate("craft.6")}
              <b className="text-[#EF6706]">{translate("craft.building")}</b>
              {translate("craft.7")}
              <b className="text-[#EF6706]">{translate("craft.creating")}</b>
              {translate("craft.8")}
              <b className="text-[#EF6706]">{translate("craft.thought")}</b>
              {translate("craft.9")}
              <b className="text-[#EF6706]">{translate("craft.ux")}</b>
              {translate("craft.10")}
              <b className="text-[#EF6706]">{translate("craft.intuitive")}</b>
              {translate("craft.11")}{" "}
              <span className="text-xs font-semibold relative bottom-[2px]">
                &lt;/p&gt;
              </span>
            </p>
          </div>
        </div>
      </div>

      <div style={{ zIndex: 100 }} className="pt-16 ">
        <h2 className="lg:text-5xl text-lg text-center">Works</h2>
        <p className="font-[500] text-center text-2xl">
          Some of the good stuff
        </p>
        <Swiper
          spaceBetween={-5}
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={true}
          effect="cards"
          grabCursor={true}
          className="mySwiper"
        >
          <SwiperSlide className="card-shadow bg-white rounded-[25px]">
            <CardWrapper>
              <h3 className="text-center pt-8">Speech Blender</h3>
              <p className="px-5 py-2 text-base font-[500]">
                A web app for blending multiple audio recordings into a cohesive
                file, with features for adjusting timing, volume, effects, and
                more. Perfect for podcasters, language learners, and content
                creators.
              </p>
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
              <CardColor color="#262228" />
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide className="card-shadow bg-white rounded-[25px]">
            <CardWrapper>
              <h3 className="text-center pt-8">The Fine Art</h3>
              <p className="px-5 py-2 text-base font-[500]">
                Discover inspiring works of art from around the world on the
                Fine Art Website. Featuring music, visual art, and books, this
                platform is a go-to destination for art enthusiasts and
                collectors.
              </p>
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
              <CardColor color="#007849" />
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide className="card-shadow bg-white rounded-[25px]">
            <CardWrapper>
              <h3 className="text-center pt-8">Drum Kit</h3>
              <p className="px-5 py-2 text-base font-[500]">
                The Drum Kit web app is an interactive tool that lets users play
                virtual drums with a computer keyboard or by clicking on the
                screen. It&apos;s easy to use and features a variety of drum
                sounds to create unique beats.
              </p>
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
              <CardColor color="#0375b4" />
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide className="card-shadow bg-white rounded-[25px]">
            <CardWrapper>
              <h3 className="text-center pt-8">Pokèfight</h3>
              <p className="px-5 py-2 text-base font-[500]">
                Pokéfight is a fun web-based card game featuring Pokémon
                characters and fight animations. Battling your opponents
                confronts you with different pokémons. With leaderboards you can
                show off your skills to other players.
              </p>
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
              <CardColor color="#ffce00" />
            </CardWrapper>
          </SwiperSlide>
          <span className="hidden">/</span>
        </Swiper>
      </div>
    </section>
  );
}
