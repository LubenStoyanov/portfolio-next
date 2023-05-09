import Link from "next/link";
import * as Scroll from "react-scroll";
import { SlArrowUpCircle } from "react-icons/sl";
import styled, { css, keyframes } from "styled-components";
import { useEffect, useState } from "react";

const YEAR = new Date().getFullYear();
const scrollToTop = () => Scroll.animateScroll.scrollToTop();

interface ScrollTop {
  visible: boolean;
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 0;
  /* margin: 0 28px; */
  background-color: #212129;
  color: white;
`;

const LinkList = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  /* color: rgb(59 130 246); */
`;

const StyledLink = styled.a`
  text-decoration: underline;
  text-underline-offset: 2px;
`;

const Attribution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  & > small {
    margin-bottom: 8px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  & > small > time {
    margin-right: 4px;
  }
`;

const slidein = keyframes`
  from {
    opacity: 0;
    bottom: -100px;
    transform: translateY(100%);
  }

  to {
    bottom: 24px;
    opacity: 1;
    transform: translateY(0);
  }
`;
const slideout = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(100%);
  }
`;

const ScrollToTopButton = styled.button<ScrollTop>`
  position: fixed;
  right: 24px;
  font-size: 2rem;
  mix-blend-mode: difference;
  z-index: 100;

  animation: ${(props) =>
    props.visible
      ? css`
          ${slidein} 0.3s ease-in-out forwards
        `
      : css`
          ${slideout} 0.3s ease-in-out forwards
        `};
`;

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 4000) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <FooterContainer>
      <div>
        <LinkList>
          <Link
            legacyBehavior
            href="https://www.linkedin.com/in/luben-stoyanov/"
          >
            <StyledLink target="_blank">LinkedIn</StyledLink>
          </Link>
          /
          <Link legacyBehavior href="https://github.com/LubenStoyanov">
            <StyledLink target="_blank">GitHub</StyledLink>
          </Link>
          /
          <Link legacyBehavior href="https://www.twitter.com/luben_stoyanov">
            <StyledLink target="_blank">Twitter</StyledLink>
          </Link>
        </LinkList>
      </div>
      <Attribution>
        <small>
          Made with ❤ using{" "}
          <StyledLink href="https://www.nextjs.org" target="_blank">
            Next.js
          </StyledLink>{" "}
          and{" "}
          <StyledLink href="https://www.tailwindcss.com" target="_blank">
            TailwindCSS
          </StyledLink>
          .
        </small>
        <small>
          <time>{YEAR}</time> © Luben Stoyanov.
        </small>
      </Attribution>
      <ScrollToTopButton
        aria-label="Scroll to homepage"
        onClick={scrollToTop}
        visible={visible}
      >
        <SlArrowUpCircle />
      </ScrollToTopButton>
    </FooterContainer>
  );
}
