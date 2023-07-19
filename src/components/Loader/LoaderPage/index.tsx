import { color } from '@/styles/root';
import styled from 'styled-components';

const LoaderPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.primary};
  .bg {
    padding: 20px;
    border-radius: 10px;
    background-color:${color.primary};
    --base-color: ${color.primary};
    /*use your base color*/
  }

  .loader {
    width: 60px;
    height: 40px;
    position: relative;
    display: inline-block;
    background-color: ${color.primary};
  }

  .loader::before {
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #fff;
    background-image: radial-gradient(
        circle 8px at 18px 18px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 18px 0px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 0px 18px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 36px 18px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 18px 36px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 30px 5px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 30px 5px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 30px 30px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 5px 30px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 5px 5px,
        ${color.primary} 100%,
        transparent 0
      );
    background-repeat: no-repeat;
    box-sizing: border-box;
    animation: rotationBack 3s linear infinite;
  }

  .loader::after {
    content: '';
    left: 35px;
    top: 15px;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #fff;
    background-image: radial-gradient(
        circle 5px at 12px 12px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 12px 0px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 0px 12px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 24px 12px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 12px 24px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 20px 3px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 20px 3px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 20px 20px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 3px 20px,
        ${color.primary} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 3px 3px,
        ${color.primary} 100%,
        transparent 0
      );
    background-repeat: no-repeat;
    box-sizing: border-box;
    animation: rotationBack 4s linear infinite reverse;
  }

  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }
`;

const LoaderPage = (): JSX.Element => {
  return (
    <LoaderPageStyled>
      <div className="bg">
        <div className="loader"></div>
      </div>
    </LoaderPageStyled>
  );
};

export default LoaderPage;