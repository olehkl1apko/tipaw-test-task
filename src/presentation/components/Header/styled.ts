import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.light.shadeLighter};
  padding: 12px 24px;

  @media screen and (max-width: 767px) {
    padding: 12px 20px;
    gap: 16px;
  }
`;

export const Logo = styled.div`
  font-size: 18px;
  line-height: 1.4;
  font-weight: 600;
  color: ${({ theme }) => theme.color.dark.tint};
  white-space: nowrap;
`;

export const Navbar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 38px;
  align-items: center;

  @media screen and (max-width: 767px) {
    gap: 16px;
  }
`;

export const Today = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.color.medium.default};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.1;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LanguageButton = styled.button``;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.blue.tint};
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.medium.shade};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.7;
`;

export const UserPhoto = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;
`;

export const UserName = styled.span`
  margin-right: 16px;
  white-space: nowrap;

  @media screen and (max-width: 767px) {
    margin-right: 4px;
  }
`;

export const ChevronButton = styled.button``;

export const Modal = styled.div`
  position: absolute;
  right: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.medium.default};
  color: ${({ theme }) => theme.color.light.default};
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.7;
  gap: 4px;
`;

export const ModalLanguage = styled.div`
  position: absolute;
  top: 80%;
  left: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.green.default};
  padding: 8px;
  gap: 4px;

  @media screen and (max-width: 767px) {
    left: 10%;
  }
`;

export const ModalLanguageBtn = styled.button`
  color: ${({ theme }) => theme.color.light.default};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.7;
`;
