import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const Wrapper = styled.aside`
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }

  .YourWorkPage {
    display: flex;
    width: 100%;
    column-gap: 5%;
    animation: ${fadeIn} 0.8s ease-out;

    & > .middle-container {
      width: 65%;
      animation: ${fadeIn} 0.6s ease-out;
      transition: all 0.4s ease;

      &:hover {
        transform: translateY(-5px);
      }
    }

    & > .right-container {
      width: 35%;
      position: relative;
      animation: ${slideIn} 0.8s ease-out;
      animation-delay: 0.2s;
      animation-fill-mode: both;
      border-left: 1px solid rgba(0, 0, 0, 0.06);
      padding-left: 2%;

      &:hover {
        animation: ${pulse} 3s infinite ease-in-out;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 0;
        background: linear-gradient(to bottom, #6366f1, #8b5cf6, #ec4899);
        transition: height 0.5s ease;
      }

      &:hover::before {
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .YourWorkPage {
      column-gap: 3%;

      & > .middle-container {
        width: 60%;
      }

      & > .right-container {
        width: 40%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .YourWorkPage {
      column-gap: 2%;

      & > .middle-container {
        width: 55%;
      }

      & > .right-container {
        width: 45%;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .right-container {
      display: none;
    }

    .YourWorkPage {
      & > .middle-container {
        width: 100%;
        transition: all 0.3s ease;
        animation: ${fadeIn} 0.5s ease-out;
      }
    }
  }

  /* Add responsiveness for smaller screens */
  @media screen and (max-width: 480px) {
    padding: 10px;

    .YourWorkPage {
      flex-direction: column;
    }
  }

  /* Add a floating action button for mobile users to access the hidden right container */
  @media screen and (max-width: 640px) {
    .mobile-toggle {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, #6366f1, #ec4899);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      z-index: 100;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.1) rotate(10deg);
      }

      &::before {
        content: "+";
        font-size: 24px;
      }
    }

    .right-container.active {
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      width: 80%;
      height: 100vh;
      background: white;
      z-index: 99;
      box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
      padding: 20px;
      animation: ${slideIn} 0.4s ease-out;
    }
  }
`;

export default Wrapper;
