import styled from "styled-components";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

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

const CardColor = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 25px 0 25px 0;
  height: 100%;
  width: 100%;

  @media (max-width: 900px) {
    border-radius: 0 0 25px 25px;
    width: inherit;
    height: 200px;
  }
`;

const Badges = styled.small`
  font-size: 0.875rem;
  font-weight: 500;
`;

const ProjectWrapper = styled(motion.div)`
  box-shadow: rgba(21, 20, 26, 0.1) 0px 30px 60px -12px,
    rgba(21, 20, 26, 0.2) 0px 18px 36px -18px;
  height: 590px;
  @media (max-width: 900px) {
    width: 90vw;
  }
  width: 700px;
  margin: 20px 0;
  border-radius: 25px;
  background-color: white;
`;

export default function Projects() {
  return (
    <>
      <ProjectWrapper
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.3 },
        }}
        viewport={{ once: true }}
        className="flex flex-col items-center md:items-start md:pl-12 md:pt-10 bg-[#f76808]"
      >
        <div className="flex flex-col items-center  md:items-start">
          <h3 className="md:text-4xl text-3xl font-[600] text-center pt-8">
            Speech Blender
          </h3>
          <p className="px-5 md:px-0 py-5 text-base font-[600] md:max-w-[40ch]">
            A web app for blending multiple audio recordings into a cohesive
            file, with features for adjusting timing, volume, effects, and more.
            Perfect for podcasters, language learners, and content creators.
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
              <span className="mr-1">VIEW CODE</span>
              <SiGithub className="place-self-center" />
            </a>
          </ViewSiteButton>
        </div>
        <CardColor className="md:pl-0 md:" color="rgb(0, 140, 255)" />
      </ProjectWrapper>

      <ProjectWrapper
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.3 },
        }}
        viewport={{ once: true }}
        className="flex flex-col items-center md:items-start md:pl-12 md:pt-10"
      >
        <div className="flex flex-col  items-center md:items-start">
          <h3 className="md:text-4xl text-3xl font-[600] text-center pt-8">
            The Fine Art
          </h3>
          <p className="px-5 md:px-0 py-5 text-base font-[600] md:max-w-[40ch]">
            Discover inspiring works of art from around the world on the Fine
            Art Website. Featuring music, visual art, and books, this platform
            is a go-to destination for art enthusiasts and collectors.
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
              <span className="mr-1">VIEW CODE</span>
              <SiGithub className="place-self-center" />
            </a>
          </ViewSiteButton>
        </div>
        <CardColor className="md:pl-0" color="#46a758" />
      </ProjectWrapper>

      <ProjectWrapper
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.3 },
        }}
        viewport={{ once: true }}
        className="flex flex-col items-center md:items-start md:pl-12 md:pt-10"
      >
        <div className="flex flex-col items-center md:items-start">
          <h3 className="md:text-4xl text-3xl font-[600] text-center pt-8">
            Pokèfight
          </h3>
          <p className="px-5 md:px-0 py-5 text-base font-[600] md:max-w-[40ch]">
            Pokéfight is a fun web-based card game featuring Pokémon characters
            and fight animations. Battling your opponents confronts you with
            different pokémons. With leaderboards you can show off your skills
            to other players.
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
              <span className="mr-1">VIEW CODE</span>
              <SiGithub className="place-self-center" />
            </a>
          </ViewSiteButton>
        </div>
        <CardColor className="md:pl-0" color="#f76808" />
      </ProjectWrapper>
    </>
  );
}
