import { FC } from "react";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as Styled from "./styled";
import { resources } from "../../../i18n/translate";
import { currentLanguage } from "../../helpers";

const PersonalInfo: FC = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "+380",
    email: "gold@gmail.com",
    occupations: "Another",
  };
  const occupations: string[] =
    resources[currentLanguage()].translation.occupations;

  const schema = object({
    firstName: string().min(2).required(),
    lastName: string().min(2).required(),
    phoneNumber: string().required(),
    email: string().email(),
    occupations: string()
      .min(1, "Please select at least one occupation")
      .required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  const onFormSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Styled.ContainerItem>
      <Styled.Title>Personal Info</Styled.Title>
      <Styled.Form onSubmit={handleSubmit(onFormSubmit)}>
        <Styled.Label>
          <p>First Name</p>
          <Styled.Input
            type="text"
            id="firstName"
            {...register("firstName")}
            defaultValue=""
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </Styled.Label>

        <Styled.Label>
          <p>Last Name</p>
          <Styled.Input type="text" id="lastName" {...register("lastName")} />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </Styled.Label>

        <Styled.Label>
          <p>Phone Number</p>
          <Styled.Input
            type="text"
            id="phoneNumber"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
        </Styled.Label>

        <Styled.Label>
          <p>Email (read only)</p>
          <Styled.Input
            type="email"
            id="email"
            {...register("email")}
            readOnly
          />
        </Styled.Label>

        <Styled.Label>
          <p>Occupation</p>
          <Styled.Select {...register("occupations")}>
            {occupations.map((occupation, index) => (
              <option key={index} value={occupation}>
                {occupation}
              </option>
            ))}
          </Styled.Select>
          {errors.occupations && <p>{errors.occupations.message}</p>}
        </Styled.Label>

        <Styled.Button type="submit">Save</Styled.Button>
      </Styled.Form>
    </Styled.ContainerItem>
  );
};

export default PersonalInfo;
