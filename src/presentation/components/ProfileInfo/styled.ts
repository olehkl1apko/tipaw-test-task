import styled from "@emotion/styled";
import DatePicker from "react-datepicker";

interface ButtonProps {
  isPending: boolean;
}

interface TypesProps {
  typeForm?: string;
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  padding: 40px;

  @media screen and (max-width: 767px) {
    padding: 20px;
    gap: 40px;
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled.form<TypesProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: calc((100% - 80px) / 2);
  min-width: 340px;
  background-color: ${({ theme, typeForm }) =>
    typeForm ? theme.color.green.glass : theme.color.light.shadeLighter};

  @media screen and (max-width: 767px) {
    width: 500px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.blue.darkerBlue};
`;

export const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.black.default};
`;

export const Input = styled.input`
  width: 100%;
  padding: 4px;
  border-radius: 4px;
  border: none;
  box-shadow: 1px 1px 1px ${({ theme }) => theme.color.medium.default};
`;

export const DateInput = styled(DatePicker)`
  width: 100%;
  padding: 4px;
  border-radius: 4px;
  border: none;
  box-shadow: 1px 1px 1px ${({ theme }) => theme.color.medium.default};
`;

export const Select = styled.select`
  width: 100%;
  padding: 4px;
  border-radius: 4px;
  border: none;
  box-shadow: 1px 1px 1px ${({ theme }) => theme.color.medium.default};
`;

export const Button = styled.button<ButtonProps & TypesProps>`
  width: 70%;
  padding: 12px 16px;
  border-radius: 4px;
  align-self: center;
  justify-self: flex-end;
  border: none;
  background-color: ${({ theme, isPending, typeForm }) =>
    typeForm
      ? isPending
        ? theme.color.green.tint
        : theme.color.green.default
      : isPending
      ? theme.color.blue.default
      : theme.color.blue.darkerBlue};
  color: ${({ theme }) => theme.color.light.default};
  cursor: ${({ isPending }) => (isPending ? "not-allowed" : "pointer")};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
    opacity: 0.9;
  }
`;

export const Error = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.red.default};
`;
