import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const floatUp = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .video-post {
    margin-top: 15px;
    font-family: var(--inter-font);
    display: flex;
    flex-direction: column;
    padding-inline: max(20px, 3%);
    padding-block: 2.5%;
    border-radius: 20px;
    max-width: 480px; /* Reduced from 560px */
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    align-content: stretch;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #ff9a9e, #fad0c4, #fad0c4, #ff9a9e);
      background-size: 200% auto;
      animation: ${shimmer} 3s linear infinite;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    }

    & > .post-content {
      position: relative;

      & > .post-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
        color: var(--black-color);
        margin-bottom: 10px;
        padding: 3px 0;

        & > .userInfo {
          display: flex;
          gap: 3%;
          align-items: center;
          cursor: pointer;
          padding: 4px;
          border-radius: 20px;
          transition: all 0.3s ease;

          & > .profile-pic-sm {
            width: 35px; /* Reduced from 40px */
            height: 35px; /* Reduced from 40px */
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid transparent;
            background-origin: border-box;
            background-clip: content-box, border-box;
            background-image: linear-gradient(white, white),
              linear-gradient(to right, #ff9a9e, #fad0c4);
            transition: transform 0.3s ease;

            &:hover {
              transform: scale(1.1);
            }
          }

          & > .username-location {
            display: flex;
            flex-direction: column;
            padding-left: 8px;

            & > .username {
              font-weight: 600;
              white-space: nowrap;
              font-size: 0.75rem; /* Slightly reduced */
              transition: color 0.3s ease;

              &:hover {
                color: #007bff;
              }
            }

            & > .location {
              font-size: 0.6rem;
              color: var(--black-500);
              white-space: nowrap;
              transition: all 0.3s ease;

              &:hover {
                color: #555;
              }
            }
          }
        }

        & > .post-edit {
          position: relative;

          & > div > .icon {
            font-size: 1.2rem; /* Reduced from 1.3rem */
            cursor: pointer;
            transition: all 0.3s ease;
            color: #555;

            &:hover {
              color: #000;
            }
          }

          & > .edit-option {
            position: absolute;
            height: auto;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 4px;
            justify-content: center;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            padding: 8px 4px;
            right: 0;
            top: 25px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            z-index: 100;

            & > .list {
              display: flex;
              gap: 6px;
              width: 90px; /* Reduced from 100px */
              padding: 6px 10px;
              cursor: pointer;
              align-items: center;
              border-radius: 6px;
              transition: all 0.2s ease;

              &:hover {
                background-color: rgba(0, 0, 0, 0.05);
              }

              & > .icon {
                font-size: 1.1rem; /* Reduced from 1.2rem */
                cursor: pointer;
                transition: transform 0.2s ease;

                &:hover {
                  transform: scale(1.2);
                }
              }

              & > span {
                font-weight: 500;
                font-size: 0.8rem;
              }
            }
          }
        }
      }

      & > .post-image-section {
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        cursor: pointer;

        &::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 20px;
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
          pointer-events: none;
        }

        & > .post-img {
          width: 100%;
          height: 400px; /* Reduced from 472px */
          border-radius: 20px;
          aspect-ratio: 1/1;
          object-fit: cover;
          transition: transform 0.5s ease;

          &:hover {
            transform: scale(1.03);
          }
        }

        & > .audio-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(45deg, #f3f4f6, #ddd);
          position: relative;
          overflow: hidden;

          &::before {
            content: "";
            position: absolute;
            width: 150%;
            height: 150%;
            background: radial-gradient(
              circle,
              rgba(255, 255, 255, 0.8) 0%,
              rgba(255, 255, 255, 0) 70%
            );
            top: -25%;
            left: -25%;
            animation: ${rotate} 10s linear infinite;
          }

          & > .music-img {
            width: 180px; /* Reduced from 200px */
            height: 180px; /* Reduced from 200px */
            border-radius: 50%;
            margin-bottom: 15px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
            border: 4px solid #fff;
          }

          & > .music-player {
            width: 80%;
            margin-top: 15px;
            border-radius: 25px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
        }

        & > .heart-animation {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 80px; /* Reduced from 100px */
          filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.5));
          z-index: 10;
          pointer-events: none;
        }
      }

      & > .post-description {
        text-align: start;
        padding-left: 2.5%;
        font-size: 0.8rem;
        display: none;
      }

      & > .post-description.absolute {
        display: flex;
        width: 60%;
        position: absolute;
        bottom: 2%;
        left: 2%;
        color: var(--white-color);
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        padding: 8px;
        border-radius: 8px;
      }

      & > .more-less {
        display: none;
      }
    }

    & > .post-option {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 12px;
      padding: 4px 0;

      & > .post-interaction {
        display: flex;
        gap: 12px;

        & > div > .icon {
          font-size: 1.6rem; /* Reduced from 1.8rem */
          color: var(--black-300);
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            color: var(--black-900);
          }
        }

        & > div > .icon.red {
          color: #ff3b5c;
          animation: ${pulse} 0.5s ease;
        }

        & > div > .like-btn:hover {
          color: #ff3b5c;
        }

        & > div > .comment-btn:hover {
          color: #3b82f6;
        }

        & > div > .share-btn:hover {
          color: #10b981;
        }
      }
    }

    & > .like-count {
      font-size: 0.9rem; /* Reduced from 0.95rem */
      color: var(--black-900);
      font-weight: 600;
      margin: 4px 0;
      transition: all 0.3s ease;
    }

    & > .post-description {
      margin: 6px 0;
      line-height: 1.4;

      & > .username {
        color: var(--black-900);
        font-weight: bold;
        margin-right: 4px;
      }

      & > .post-desc {
        text-align: start;
        font-size: 0.85rem; /* Reduced from 0.9rem */
        color: #333;
      }

      & > .more-less {
        color: var(--black-500);
        cursor: pointer;
        font-size: 0.8rem; /* Reduced from 0.85rem */
        margin-left: 4px;
        font-weight: 500;
        transition: all 0.3s ease;

        &:hover {
          color: #007bff;
        }
      }
    }

    .view-comments {
      color: var(--black-500);
      font-size: 0.8rem; /* Reduced from 0.85rem */
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
      display: inline-block;
      margin: 6px 0;

      &:hover {
        color: #007bff;
        transform: translateX(5px);
      }
    }
  }

  .comments-section {
    margin-top: 12px;
    border-radius: 12px;
    width: 100%;
    animation: ${fadeIn} 0.3s ease;
  }

  .d-none {
    display: none;
  }

  /* Glassmorphism effect */
  .glassmorphism {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

export default Wrapper;
