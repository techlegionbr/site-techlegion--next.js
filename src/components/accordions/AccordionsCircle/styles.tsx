import { color, font } from "@/styles/root";
import styled from "styled-components";

export const Accordions = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2rem;
`;

interface IAccordionProps {
  showDescription: 'true' | 'false';
}
export const Accordion = styled.div<IAccordionProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  cursor: pointer;
  .column-icon {
    height: 100%;
    .square-icon {
      width: 45px;
      height: 45px;
      background-color: #171757;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: ${color.third};
      border: 1.2px solid #8594f547;
      font-size: 1.2rem;
    }
  }
  .accordion-content {
    border-radius: 0.6rem;
    background-color: #171757;
    border: 1.2px solid #8594f547;
    .title {
      padding: 0.6rem 1rem 0.6rem 1rem;
      height: 53px;
      display: flex;
      align-items: center;
      position: relative;
      .watch-more {
        position: absolute;
        display: inline-flex;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${({ showDescription }) =>
    showDescription === 'true' ? color.third : '#18183a'};
        border: 1px solid #ffffff2c;
        color: ${color.primary};
        justify-content: center;
        align-items: center;
        right: 0.5rem;
        font-size: 1rem;
        transform: rotate(
          ${({ showDescription }) =>
    showDescription === 'true' ? '180deg' : '0deg'}
        );
        transition: 0.2s;
        display: none;
      }
      h4 {
        color: ${({ showDescription }) =>
    showDescription === 'false' ? '#ffffffb1' : '#fff'};
        line-height: 1rem;
        user-select: none;
        transition: 0.2s;
      }
    }
    .description {
      overflow: hidden;
      padding: 0 1rem;
      height: ${({ showDescription }) =>
    showDescription === 'false' ? '0px' : '180px'};
      transition: 0.2s;
      p {
        margin-top: 0.5rem;
        font-size: calc(${font.size.sm} - .1rem);
        line-height: calc(${font.line_height.sm} - .1rem);
      }
    }
  }
`;