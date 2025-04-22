import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  .coverimg {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
    transform: scale(1);
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  & > .foll {
    position: absolute;
    bottom: 20px;
    left: 5%;
    display: flex;
    gap: 20px;
    z-index: 1;
    text-transform: capitalize;
    animation: fadeInUp 0.6s ease-out;

    & > .followers,
    & > .following {
      background-color: rgba(255, 255, 255, 0.75);
      padding: 10px 20px;
      text-align: center;
      color: var(--blue-900);
      border-radius: 50px;
      cursor: pointer;
      transition: transform 0.3s ease, background-color 0.3s ease;
      font-size: 1rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      position: relative;

      & > h2 {
        color: black;
        font-size: 1.2rem;
      }

      &.active {
        border: 3px solid var(--blue-900);
        background-color: rgba(0, 0, 255, 0.1);
        transform: scale(1.1);
      }

      &:hover {
        background-color: rgba(0, 0, 255, 0.05);
        transform: scale(1.05);
      }
    }
  }

  & > .btns {
    position: absolute;
    bottom: 10%;
    right: 5%;
    display: flex;
    gap: 10px;
    z-index: 5;
    animation: fadeInUp 0.6s ease-out;

    & > button,
    & > .btn-edit {
      background-color: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(10px);
      border: none;
      width: 120px;
      height: 35px;
      border-radius: 25px;
      transition: all 0.3s ease;
      font-size: 0.9rem;
      cursor: pointer;
      font-weight: bold;
      color: var(--blue-900);

      &:hover {
        background-color: rgba(0, 0, 255, 0.1);
        transform: scale(1.05);
      }

      &.btn-edit {
        padding: 10px 20px;
        text-align: center;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
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
`;

export default Wrapper;
