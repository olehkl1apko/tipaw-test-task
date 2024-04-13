import styled from "@emotion/styled";

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

export const ContainerItem = styled.div<TypesProps>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  width: calc((100% - 80px) / 2);
  min-width: 340px;
  background-color: ${({ theme, typeForm }) =>
    typeForm ? theme.color.green.glass : theme.color.light.shadeLighter};

  @media screen and (max-width: 767px) {
    width: 500px;
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.blue.darkerBlue};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
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

export const Select = styled.select`
  width: 100%;
  padding: 4px;
  border-radius: 4px;
  border: none;
  box-shadow: 1px 1px 1px ${({ theme }) => theme.color.medium.default};
`;

export const Button = styled.button<ButtonProps & TypesProps>`
  padding: 12px 16px;
  margin-top: 16px;
  border-radius: 4px;
  border: none;
  background-color: ${({ theme, isPending, typeForm }) =>
    typeForm
      ? isPending
        ? theme.color.green.glass
        : theme.color.green.default
      : isPending
      ? theme.color.blue.default
      : theme.color.blue.darkerBlue};
  color: ${({ theme }) => theme.color.light.default};
  cursor: ${({ isPending }) => (isPending ? "not-allowed" : "pointer")};
`;

export const Error = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.red.default};
`;
