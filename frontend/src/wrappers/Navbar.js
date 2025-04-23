import styled from "styled-components";

const Wrapper = styled.aside`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 2rem;
    background-color: white;
    border-bottom: 1px solid #eaeaea;

    .nav-links {
      display: flex;
      gap: 1.5rem;
      align-items: center;

      .nav-link {
        font-weight: 500;
        color: #333;
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        border-radius: 9999px;
        transition: all 0.3s ease-in-out;
        position: relative;
        overflow: hidden;

        .icon {
          margin-right: 0.5rem;
          color: #3b82f6;
          font-size: 1.2rem;
        }

        &::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #3b82f6, #9333ea);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: inherit;
          z-index: -1;
        }

        &.active,
        &:hover {
          color: white;
          .icon {
            color: white;
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
      border-radius: 0.75rem;
      padding: 0.5rem 1rem;
      background: linear-gradient(145deg, #f5f7fa, #e4e9f0);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);

      .profile-pic-sm {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 9999px;
        object-fit: cover;
        border: 2px solid #e5e7eb;
      }

      .icon {
        transition: transform 0.3s;
        &.active {
          transform: rotate(180deg);
        }
      }

      .dropdown-menus {
        position: relative;

        .dropdown-options {
          position: absolute;
          top: 3rem;
          right: 0;
          width: 260px;
          background: linear-gradient(to bottom right, #ffffff, #f0f4ff);
          border-radius: 0.75rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          z-index: 10;
          animation: fadeIn 0.3s ease-in-out;

          li {
            padding: 1rem 1.25rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1rem;
            color: #2d3748;
            cursor: pointer;
            transition: all 0.25s ease;

            svg {
              color: #3b82f6;
              font-size: 1.2rem;
            }

            &:hover {
              background-color: #dbeafe;
              color: #1d4ed8;
              transform: translateX(5px);
              border-left: 3px solid #3b82f6;
            }
          }
        }
      }
    }
  }

  .notifylst {
    position: absolute;
    top: 4rem;
    right: 1rem;
    width: 20rem;
    height: 24rem;
    overflow-y: auto;
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 0.75rem;
    z-index: 40;
  }

  @media screen and (max-width: 900px) {
    .navbar {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default Wrapper;
