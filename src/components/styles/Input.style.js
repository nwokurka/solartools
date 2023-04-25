import styled from "styled-components";

export const Input = styled.input`
    background-color: ${({ theme }) => theme.colors.inputBackground};
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    color: ${({ theme }) => theme.colors.primaryText};
    padding: 6px;
    width: 100%;

    :focus {
        outline: 1px solid ${({ theme }) => theme.colors.highlight};
    }
`;
