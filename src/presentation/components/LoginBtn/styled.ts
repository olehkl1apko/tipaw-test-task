import styled from "@emotion/styled";

export const Button = styled.button`
  padding: 4px 16px;
  background-color: ${({ theme }) => theme.color.blue.default};
  color: ${({ theme }) => theme.color.light.default};
  border-radius: 16px;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 600;
  white-space: nowrap;

  @media screen and (max-width: 425px) {
    font-size: 12px;
    line-height: 1.5;
    padding: 4px 8px;
  }
`;
