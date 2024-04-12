import { FC } from "react";
import { object, string, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Resolver } from "react-hook-form";

import * as Styled from "./styled";
import { resources } from "../../../i18n/translate";
import { currentLanguage } from "../../helpers";
import { IPetProfile } from "../../modules";

const PetProfile: FC = () => {
  const initialValues = {
    petName: "",
    specie: "",
    age: 0,
    gender: "Male",
    color: "",
    weight: 0,
  };
  const genders = ["Male", "Female"];
  const species: string[] = resources[currentLanguage()].translation.pets;

  const schema = object({
    petName: string().min(2).required(),
    specie: string().min(1, "Please select at least one specie").required(),
    age: number().required(),
    gender: string().oneOf(genders).required(),
    color: string().min(2).required(),
    weight: number().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema) as Resolver<IPetProfile>,
    defaultValues: initialValues,
  });

  const onFormSubmit = (data: IPetProfile) => {
    console.log(data);
    reset();
  };

  return (
    <Styled.ContainerItem>
      <Styled.Title>Pet Common Info</Styled.Title>
      <Styled.Form onSubmit={handleSubmit(onFormSubmit)}>
        <Styled.Label>
          <p>Pet Name</p>
          <Styled.Input
            type="text"
            id="petName"
            {...register("petName")}
            defaultValue=""
          />
          {errors.petName && (
            <Styled.Error>{errors.petName.message}</Styled.Error>
          )}
        </Styled.Label>

        <Styled.Label>
          <p>Specie</p>
          <Styled.Select {...register("specie")}>
            {species.map((specie, index) => (
              <option key={index} value={specie}>
                {specie}
              </option>
            ))}
          </Styled.Select>
          {errors.specie && (
            <Styled.Error>{errors.specie.message}</Styled.Error>
          )}
        </Styled.Label>

        <Styled.Label>
          <p>Age (years)</p>
          <Styled.Input type="number" id="age" {...register("age")} />
          {errors.age && <Styled.Error>{errors.age.message}</Styled.Error>}
        </Styled.Label>

        <Styled.Label>
          <p>Gender</p>
          <Styled.Select {...register("gender")}>
            {genders.map((gender, index) => (
              <option key={index} value={gender}>
                {gender}
              </option>
            ))}
          </Styled.Select>
          {errors.gender && (
            <Styled.Error>{errors.gender.message}</Styled.Error>
          )}
        </Styled.Label>

        <Styled.Label>
          <p>Weight (kg)</p>
          <Styled.Input type="number" id="weight" {...register("weight")} />
          {errors.weight && (
            <Styled.Error>{errors.weight.message}</Styled.Error>
          )}
        </Styled.Label>

        <Styled.Button type="submit">Save</Styled.Button>
      </Styled.Form>
    </Styled.ContainerItem>
  );
};

export default PetProfile;
