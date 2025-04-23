import styled, { css, keyframes } from "styled-components";

// Animation keyframes
const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
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

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Create a more interesting grid layout
function createCSS() {
  let styles = "";

  // Feature specific items with different span sizes
  styles += `
    &:nth-child(3) {
      grid-row: auto / span 2;
      grid-column: auto / span 1;
    }
    &:nth-child(7) {
      grid-row: auto / span 2;
      grid-column: auto / span 2;
    }
    &:nth-child(10) {
      grid-row: auto / span 1;
      grid-column: auto / span 2;
    }
    &:nth-child(13) {
      grid-row: auto / span 2;
      grid-column: auto / span 1;
    }
    &:nth-child(17) {
      grid-row: auto / span 2;
      grid-column: auto / span 2;
    }
  `;

  return css`
    ${styles}
  `;
}

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1600px;
  margin: 0 auto;

  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: #3498db;
    animation: ${spin} 1s linear infinite;
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 300px;
    gap: 20px;
    position: relative;
    margin-top: 30px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }

    & > .post {
      position: relative;
      height: 100%;
      width: 100%;
      border-radius: 15px;
      overflow: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

      ${createCSS()}

      &.hovered {
        z-index: 10;
      }

      & > .post-container {
        height: 100%;
        width: 100%;
        cursor: pointer;
        position: relative;

        &:hover {
          & > img,
          & > .video-container {
            transform: scale(1.05);
          }
        }

        & > img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          backdrop-filter: blur(50px);
        }

        & > .video-container {
          position: relative;
          background-color: whitesmoke;
          height: 100%;
          width: 100%;
          transition: transform 0.5s ease;

          & > .play-icon {
            position: absolute;
            top: 10px;
            right: 10px;
            color: white;
            font-size: 1.8em;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;

            &:hover {
              transform: scale(1.2);
              background: rgba(0, 0, 0, 0.7);
            }
          }

          & > .post-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

      &:nth-child(4n + 1) {
        animation: ${float} 6s ease-in-out infinite;
      }

      &:nth-child(4n + 2) {
        animation: ${pulse} 5s ease-in-out infinite;
      }

      &:nth-child(4n + 3) {
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #ff9966, #ff5e62, #ff9966);
          background-size: 200% 100%;
          animation: ${shimmer} 3s infinite linear;
        }
      }

      .post-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;

        .view-post {
          background: white;
          color: black;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: bold;
          transform: translateY(10px);
          transition: transform 0.3s ease;

          &:hover {
            transform: translateY(0);
          }
        }
      }
    }
  }

  .model-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.3s ease;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export default Wrapper;
