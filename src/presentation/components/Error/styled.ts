import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const Image = styled.img`
  width: 400px;
  height: 250px;
  border-radius: 10%;
  margin-top: 36px;

  @media screen and (max-width: 767px) {
    width: 200px;
    height: 120px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.red.default};

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
