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

  background-color: #15141a;
  color: white;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Works({ translate }: { translate: Function }) {
  return (
    <section id="works" className="flex flex-col py-16">
      <div className="bg-[#15141a] text-white pt-16">
        <div className="flex place-items-center place-content-center gap-x-1">
          <span className="text-sm font-bold">&lt;h2&gt; </span>
          <span className="border-t-2 w-16 border-white"></span>
          <h2 className="font-bold sm:text-5xl text-3xl text-center">
            {translate("works.title")}
          </h2>
          <span className="border-t-2 w-16 border-white"></span>
          <span className="text-sm font-bold">&lt;h2/&gt;</span>
        </div>
        <div className="sm:flex gap-x-5 pt-10">
          <div className="mx-7 pb-16">
            <p className="  sm:max-w-[40ch] ">
              When it comes to my <em className="text-orange-500">work</em>, I
              like to play lego with <em className="text-orange-500">ideas</em>{" "}
              and <em className="text-orange-500">concepts</em> in programming.
              I love <em className="text-orange-500">exploring</em> new tools
              and experimenting with different approaches to find the best
              solutions for my clients. But for me,{" "}
              <em className="text-orange-500">building</em> a great website is
              about more than just the technology. it&apos;s about creating a
              joyful experience for the users of the website. That&apos;s why i
              put a lot of <em className="text-orange-500">thought</em> into the{" "}
              <em className="text-orange-500">user experience</em>, making sure
              that every website i build is{" "}
              <em className="text-orange-500">intuitive</em>, easy to use, and
              exciting to <em className="text-orange-500">interact</em> with.
            </p>
          </div>
        </div>
      </div>

      <div style={{ zIndex: 100 }} className="pt-16 ">
        <h2 className="sm:text-5xl text-lg text-center">Works</h2>
        <p className="font-[500] text-center text-2xl">
          Some of the good stuff
        </p>
        <Swiper
          spaceBetween={-2}
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={true}
          effect="cards"
          grabCursor={true}
          className="mySwiper"
        >
          <SwiperSlide className="card-shadow bg-white min-w-[300px] min-h-[560px] rounded-[25px]">
            <CardWrapper className="flex flex-col items-center">
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
                  <span className="mr-1">VIEW GITHUB</span>
                  <SiGithub className="place-self-center" />
                </a>
              </ViewSiteButton>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide className="card-shadow bg-white min-w-[300px] min-h-[560px] rounded-[25px]">
            <CardWrapper className="flex flex-col items-center">
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
                  <span className="mr-1">VIEW GITHUB</span>
                  <SiGithub className="place-self-center" />
                </a>
              </ViewSiteButton>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide className="card-shadow bg-white min-w-[300px] min-h-[560px] rounded-[25px]">
            <CardWrapper className="flex flex-col items-center">
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
                  <span className="mr-1">VIEW GITHUB</span>
                  <SiGithub className="place-self-center" />
                </a>
              </ViewSiteButton>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide className="card-shadow bg-white min-w-[300px] min-h-[560px] rounded-[25px]">
            <CardWrapper className="flex flex-col items-center">
              <h3 className="text-center pt-8">Pokèfight</h3>
              <p className="px-5 py-2 text-base font-[500]">
                Pokéfight is a fun web-based card game featuring Pokémon
                characters and fight animations. As you battle your opponents in
                the game, you&apos;ll encounter different pokémons. With
                leaderboards you can show off your skills to other players.
              </p>
              <ViewSiteButton>
                <a
                  className="flex flex-row px-5 py-2"
                  href="https://github.com/LubenStoyanov/pokefight-frontend"
                  target="_blank"
                >
                  <span className="mr-1">VIEW GITHUB</span>
                  <SiGithub className="place-self-center" />
                </a>
              </ViewSiteButton>
            </CardWrapper>
          </SwiperSlide>
          <span className="hidden">/</span>
        </Swiper>
      </div>
    </section>
  );
}
