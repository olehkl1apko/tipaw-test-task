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
  display: flex;
  flex-direction: row;
  gap: 38px;
  align-items: center;

  @media screen and (max-width: 767px) {
    gap: 16px;
  }
`;

export const Weekday = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.color.blue.tint};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.1;

  @media screen and (max-width: 767px) {
    gap: 4px;
  }
`;

export const Nl = styled.span`
  color: ${({ theme }) => theme.color.medium.shade};
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.blue.tint};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
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
