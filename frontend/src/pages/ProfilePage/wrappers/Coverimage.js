import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  margin-bottom: 20px;

  &:hover {
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
  }

  .cover-container {
    position: relative;
    overflow: hidden;
  }

  .overlay-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    z-index: 1;
    pointer-events: none;
  }

  .coverimg {
    height: 240px;
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
    transform: scale(1);
    transition: transform 0.6s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .cover-loader {
    height: 240px;
    width: 100%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 15px;
  }

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  & > .foll {
    position: absolute;
    bottom: 20px;
    left: 5%;
    display: flex;
    gap: 20px;
    z-index: 2;
    text-transform: capitalize;
    animation: fadeInUp 0.6s ease-out;

    .glassmorphism {
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 12px 24px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      transition: all 0.4s ease;
    }

    & > .followers,
    & > .following {
      text-align: center;
      color: var(--blue-900);
      cursor: pointer;
      transition: transform 0.3s ease, background-color 0.3s ease;
      font-size: 1rem;
      position: relative;

      & > h2 {
        color: #1a365d;
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0;
        margin-bottom: 4px;
      }

      & > p {
        margin: 0;
        font-size: 0.9rem;
        color: #4a5568;
      }

      &.active {
        border: 2px solid var(--blue-900);
        background-color: rgba(255, 255, 255, 0.9);
        transform: translateY(-5px);
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.95);
        transform: translateY(-5px);
      }
    }
  }

  & > .btns {
    position: absolute;
    bottom: 20px;
    right: 5%;
    display: flex;
    gap: 10px;
    z-index: 5;
    animation: fadeInUp 0.6s ease-out;

    & > button,
    & > .btn-edit {
      background-color: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(10px);
      border: none;
      padding: 0 20px;
      height: 40px;
      border-radius: 30px;
      transition: all 0.3s ease;
      font-size: 0.9rem;
      cursor: pointer;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 100px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }

      &.btn-edit {
        color: #3182ce;
        border: 1px solid rgba(49, 130, 206, 0.3);

        &:hover {
          background-color: rgba(49, 130, 206, 0.1);
        }
      }

      &.btn-cancel {
        color: #e53e3e;
        border: 1px solid rgba(229, 62, 62, 0.3);

        &:hover {
          background-color: rgba(229, 62, 62, 0.1);
        }
      }

      &.btn-save {
        color: #38a169;
        border: 1px solid rgba(56, 161, 105, 0.3);

        &:hover {
          background-color: rgba(56, 161, 105, 0.1);
        }
      }
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    border-radius: 15px;

    .coverimg {
      height: 200px;
    }

    & > .foll {
      left: 4%;
      bottom: 15px;
      gap: 12px;

      & > .followers,
      & > .following {
        padding: 10px 18px;

        & > h2 {
          font-size: 1.1rem;
        }

        & > p {
          font-size: 0.8rem;
        }
      }
    }

    & > .btns {
      bottom: 15px;
      right: 4%;

      & > button,
      & > .btn-edit {
        height: 36px;
        min-width: 80px;
        padding: 0 15px;
        font-size: 0.85rem;
      }
    }
  }
`;

export default Wrapper;
