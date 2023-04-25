import React from "react";
import styled from "styled-components";

const LoadingWheelStyle = styled.div`
  .loader {
  border: 0.3rem solid #f3f3f3; /* Light grey */
  border-top: 0.3rem solid ${({ theme }) => theme.colors.highlight};; /* Blue */
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 2s ease-in-out infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export default function Logo(props: any) {
  return (
    <LoadingWheelStyle>
      <div className="loader"></div>
    </LoadingWheelStyle>
  );
}
