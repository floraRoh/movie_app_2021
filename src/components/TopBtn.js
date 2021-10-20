import react, { useEffect, useState } from "react";
import styled from "styled-components";

const TopButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  right: 1.5rem;
  background-color: #000000;
  color: #ffffff;
`;

export default function TopBtn() {
  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <TopButton onClick={moveToTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-chevron-up"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </TopButton>
    </>
  );
}
