import styled, { keyframes } from "styled-components";
import { WindupChildren, CharWrapper, Pace } from "windups";

const fadeIn = keyframes`
  from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

const Bold = styled.b`
  color: #ef6706;
  animation-name: ${fadeIn};
  animation-duration: 3s;
  animation-iteration-count: 1;
`;

export default function TypewriterComponent({
  translate,
}: {
  translate: Function;
}) {
  const greetings: string = translate("hero.title.greetings");
  const one: string = translate("hero.title.1");
  const luben: string = translate("hero.title.luben");
  const two: string = translate("hero.title.2");
  const webDeveloper: string = translate("hero.title.webDeveloper");

  return (
    <WindupChildren>
      <div className="lg:text-7xl">
        <Pace getPace={(char: string) => 100}>
          <span className="inline-block text-xs lg:text-sm font-semibold  relative bottom-4">
            &lt;h1&gt;
          </span>{" "}
          {greetings}, {one}
          <CharWrapper element={Bold}>{luben}</CharWrapper>
          {two}
          <CharWrapper element={Bold}>{webDeveloper}</CharWrapper>{" "}
          <span className="inline-block text-xs text-[#0D0E13] lg:text-sm font-semibold relative bottom-4">
            &lt;/h1&gt;
          </span>
        </Pace>
      </div>
    </WindupChildren>
  );
}
