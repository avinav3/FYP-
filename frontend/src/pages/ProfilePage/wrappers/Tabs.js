import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(59, 130, 246, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
`;

const Wrapper = styled.div`
  padding: 8px;
  border-radius: 16px;
  background: linear-gradient(145deg, #e6f0ff, #f0f7ff);
  box-shadow: 0 8px 20px rgba(0, 118, 255, 0.1);
  margin: 20px 0;

  .tabs-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding: 5px;
  }

  .tab-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 140px;
    padding: 12px 20px;
    border-radius: 50px;
    border: none;
    background-color: rgba(255, 255, 255, 0.7);
    color: var(--blue-900);
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: capitalize;
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    animation: ${slideIn} 0.5s ease backwards;

    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    &:nth-child(4) {
      animation-delay: 0.4s;
    }
    &:nth-child(5) {
      animation-delay: 0.5s;
    }

    .tab-icon {
      font-size: 1.1rem;
      opacity: 0.8;
      transition: all 0.3s ease;
    }

    .tab-text {
      white-space: nowrap;
      transition: all 0.3s ease;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);

      .tab-icon {
        transform: scale(1.2);
        opacity: 1;
      }
    }

    &.active {
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: white;
      font-weight: 700;
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
      animation: ${pulse} 2s infinite;

      .tab-icon {
        transform: scale(1.2);
        opacity: 1;
      }

      .active-indicator {
        position: absolute;
        bottom: 6px;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 3px;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 10px;
      }
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3),
        0 6px 20px rgba(59, 130, 246, 0.2);
    }
  }

  /* Responsive design */
  @media (max-width: 768px) {
    padding: 6px;

    .tabs-container {
      gap: 8px;
    }

    .tab-button {
      min-width: auto;
      padding: 10px 16px;
      flex-direction: column;
      gap: 4px;

      .tab-icon {
        font-size: 1.2rem;
      }

      .tab-text {
        font-size: 0.8rem;
      }

      &.active .active-indicator {
        bottom: 4px;
        width: 16px;
        height: 2px;
      }
    }
  }

  @media (max-width: 480px) {
    .tabs-container {
      justify-content: flex-start;
      overflow-x: auto;
      padding-bottom: 12px;
      flex-wrap: nowrap;

      &::-webkit-scrollbar {
        height: 4px;
      }

      &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05);
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: rgba(59, 130, 246, 0.3);
        border-radius: 10px;
      }
    }

    .tab-button {
      min-width: 90px;
      flex-shrink: 0;
    }
  }
`;

export default Wrapper;
