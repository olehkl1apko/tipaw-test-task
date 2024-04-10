import { FC } from "react";
import { object, string, mixed } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as Styled from "./styled";
import { resources } from "../../../i18n/translate";
import { currentLanguage } from "../../helpers";
import { PersonalData } from "../modules";

const PersonalInfo: FC = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "+380",
    email: "gold@gmail.com",
    occupation: "Another",
    avatar: null,
  };
  const occupations: string[] =
    resources[currentLanguage()].translation.occupations;

  const schema = object({
    firstName: string().min(2).required(),
    lastName: string().min(2).required(),
    phoneNumber: string().required(),
    email: string().email(),
    occupation: string()
      .min(1, "Please select at least one occupation")
      .required(),
    avatar: mixed().test({
      name: "fileSize",
      message: "Avatar file size must be less than 1 Mb",
      test: (value) => {
        if (value instanceof FileList && value.length > 0) {
          return value[0].size <= 1048576;
        }
        return true;
      },
    }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PersonalData>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  const onFormSubmit = (data: PersonalData) => {
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
          {errors.firstName && (
            <Styled.Error>{errors.firstName.message}</Styled.Error>
          )}
        </Styled.Label>

        <Styled.Label>
          <p>Last Name</p>
          <Styled.Input type="text" id="lastName" {...register("lastName")} />
          {errors.lastName && (
            <Styled.Error>{errors.lastName.message}</Styled.Error>
          )}
        </Styled.Label>

        <Styled.Label>
          <p>Phone Number</p>
          <Styled.Input
            type="text"
            id="phoneNumber"
            defaultValue={initialValues.email}
          />
          {errors.phoneNumber && (
            <Styled.Error>{errors.phoneNumber.message}</Styled.Error>
          )}
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
          <Styled.Select {...register("occupation")}>
            {occupations.map((occupation, index) => (
              <option key={index} value={occupation}>
                {occupation}
              </option>
            ))}
          </Styled.Select>
          {errors.occupation && (
            <Styled.Error>{errors.occupation.message}</Styled.Error>
          )}
        </Styled.Label>
        <Styled.Label>
          <p>Avatar:</p>
          <Styled.Input type="file" id="avatar" {...register("avatar")} />
        </Styled.Label>

        <Styled.Button type="submit">Save</Styled.Button>
      </Styled.Form>
    </Styled.ContainerItem>
  );
};

export default PersonalInfo;
