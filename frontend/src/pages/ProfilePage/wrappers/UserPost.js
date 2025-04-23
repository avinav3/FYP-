import styled, { keyframes } from "styled-components";

// Add keyframe animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const floatIcon = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  animation: ${fadeIn} 0.8s ease-in;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  .posts {
    position: relative;
    width: 85%;
    height: 85%;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
      transform: translateY(-5px);
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        transparent 70%,
        rgba(0, 0, 0, 0.7)
      );
      z-index: 1;
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    &:hover::before {
      opacity: 1;
    }

    & > .post-container {
      width: 100%;
      height: 100%;

      & > .post {
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
        transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        position: relative;
        overflow: hidden;

        &:hover {
          transform: scale(1.08);

          & > .icon {
            right: 8%;
            transform: rotate(0deg);
            animation: ${floatIcon} 2s infinite ease-in-out;
          }

          & > .video-player,
          & > .music-player {
            filter: brightness(1.1) contrast(1.05);
          }

          &::after {
            opacity: 1;
          }
        }

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(
            90deg,
            #ff6b6b,
            #feca57,
            #1dd1a1,
            #48dbfb
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        & > .video-player {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
        }

        & > .music-player {
          width: 100%;
          height: 100%;
          transition: all 0.5s ease;
        }

        & > .icon {
          font-size: 1.8rem;
          position: absolute;
          top: 10%;
          right: -30px;
          color: var(--white-color);
          transition: all 0.4s ease;
          z-index: 5;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 8px;
          border-radius: 50%;
          transform: rotate(-45deg);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .post-title {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 15px;
          color: white;
          font-weight: bold;
          z-index: 2;
          transform: translateY(100%);
          transition: transform 0.4s ease;
        }

        &:hover .post-title {
          transform: translateY(0);
        }
      }
    }

    &:nth-child(odd) {
      animation: ${pulse} 3s infinite ease-in-out;
      animation-delay: 0.5s;
    }
  }

  & > .yomodel {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} 0.3s ease-in;

    & > .modely {
      position: relative !important;
      width: 90%;
      max-width: 900px;
      max-height: 90vh;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
      transform: scale(0.9);
      opacity: 0;
      animation: ${fadeIn} 0.5s ease-out forwards,
        ${pulse} 0.5s ease-out forwards;
      animation-delay: 0.1s;
    }

    .close-button {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.2);
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      z-index: 1001;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.4);
        transform: rotate(90deg);
      }
    }
  }
`;

export default Wrapper;
