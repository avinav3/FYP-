import styled from "styled-components";

const Wrapper = styled.aside`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(16px);
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 2.5rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 5%;
      width: 90%;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(59, 130, 246, 0.5),
        transparent
      );
    }

    .nav-links {
      display: flex;
      gap: 1.75rem;
      align-items: center;

      .nav-link {
        font-weight: 500;
        color: #333;
        display: flex;
        align-items: center;
        padding: 0.5rem 1.25rem;
        border-radius: 12px;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        position: relative;
        overflow: hidden;

        .icon {
          margin-right: 0.75rem;
          color: #3b82f6;
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        &::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: inherit;
          z-index: -1;
        }

        &.active,
        &:hover {
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);

          .icon {
            color: white;
            transform: scale(1.15);
          }

          &::before {
            opacity: 1;
          }
        }
      }
    }

    .nav-content {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      position: relative;
      border-radius: 16px;
      padding: 0.5rem 1.25rem;
      background: linear-gradient(145deg, #f8faff, #eef2fc);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(59, 130, 246, 0.15);
      }

      .profile-pic-sm {
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 9999px;
        object-fit: cover;
        border: 3px solid #e5e7eb;
        transition: all 0.3s ease;

        &:hover {
          border-color: #3b82f6;
          transform: scale(1.05);
        }
      }

      .icon {
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        color: #3b82f6;
        font-size: 1.3rem;

        &.active {
          transform: rotate(180deg);
        }
      }

      .dropdown-menus {
        position: relative;

        h5 {
          margin: 0;
          font-weight: 600;
          background: linear-gradient(to right, #3b82f6, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dropdown-options {
          position: absolute;
          top: 3.5rem;
          right: 0;
          width: 280px;
          background: linear-gradient(to bottom right, #ffffff, #f5f8ff);
          border-radius: 16px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          z-index: 10;
          animation: slideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 1px solid rgba(59, 130, 246, 0.1);

          &::before {
            content: "";
            position: absolute;
            top: -8px;
            right: 20px;
            width: 16px;
            height: 16px;
            background: white;
            transform: rotate(45deg);
            border-top: 1px solid rgba(59, 130, 246, 0.1);
            border-left: 1px solid rgba(59, 130, 246, 0.1);
          }

          li {
            padding: 1.1rem 1.25rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: 1rem;
            color: #2d3748;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            border-bottom: 1px solid rgba(0, 0, 0, 0.03);

            &:last-child {
              border-bottom: none;
            }

            svg {
              color: #3b82f6;
              font-size: 1.3rem;
              transition: transform 0.3s ease;
            }

            &:hover {
              background-color: #f0f7ff;
              color: #1d4ed8;
              padding-left: 1.75rem;

              svg {
                transform: scale(1.2) rotate(-5deg);
              }

              &::after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 5px;
                background: linear-gradient(to bottom, #3b82f6, #9333ea);
              }
            }
          }
        }
      }
    }
  }

  .notifylst {
    position: absolute;
    top: 4.5rem;
    right: 2rem;
    width: 22rem;
    height: auto;
    max-height: 28rem;
    overflow-y: auto;
    background-color: white;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    z-index: 40;
    animation: slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: 1px solid rgba(59, 130, 246, 0.1);

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f5fd;
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #3b82f6, #9333ea);
      border-radius: 8px;
    }
  }

  @media screen and (max-width: 900px) {
    .navbar {
      flex-direction: column;
      padding: 1rem;
      gap: 1rem;

      .nav-links {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0.5rem 0;
      }

      .nav-content {
        align-self: flex-end;
      }
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
    }
  }
`;

export default Wrapper;
