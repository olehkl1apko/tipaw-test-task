import { FC, useEffect, useState } from "react";
import { object, string, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Resolver } from "react-hook-form";

import * as Styled from "./styled";
import { resources } from "../../../i18n/translate";
import { currentLanguage } from "../../helpers";
import { IPetProfile } from "../../modules";
import { useUserContext } from "../../../application/context";
import { useUpdateProfile } from "../../../application/hooks";

const PetProfile: FC = () => {
  const { userFromDB, setUserFromDB } = useUserContext();
  const [data, setData] = useState<IPetProfile | null>(null);
  const { profile, error, isPending } = useUpdateProfile(
    data,
    userFromDB?.id,
    "petCommonInfo"
  );

  useEffect(() => {
    if (profile) {
      setUserFromDB(profile);
    }
  }, [profile, setUserFromDB]);

  const genders = ["Male", "Female", "Another"];
  const species: string[] = resources[currentLanguage()].translation.pets;

  const schema = object({
    petName: string()
      .min(2, "Pet name must be 2 characters and more")
      .required(),
    specie: string().min(1, "Please select at least one specie").required(),
    age: number().optional(),
    gender: string().oneOf(genders).optional(),
    color: string().optional(),
    weight: number().optional(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema) as Resolver<IPetProfile>,
  });

  const onFormSubmit = (data: IPetProfile) => {
    setData(data);
    reset();
  };

  return (
    <Styled.ContainerItem>
      <Styled.Title>Pet Common Info</Styled.Title>
      <Styled.Form onSubmit={handleSubmit(onFormSubmit)}>
        <Styled.Label>
          <p>Pet Name</p>
          <Styled.Input type="text" id="petName" {...register("petName")} />
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
          <Styled.Input
            type="number"
            id="age"
            defaultValue={0}
            {...register("age")}
          />
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
          <p>Color</p>
          <Styled.Input
            type="text"
            id="color"
            {...register("color")}
            defaultValue=""
          />
          {errors.color && <Styled.Error>{errors.color.message}</Styled.Error>}
        </Styled.Label>

        <Styled.Label>
          <p>Weight (kg)</p>
          <Styled.Input
            type="number"
            id="weight"
            defaultValue={0}
            {...register("weight")}
          />
          {errors.weight && (
            <Styled.Error>{errors.weight.message}</Styled.Error>
          )}
        </Styled.Label>

        <Styled.Button type="submit" isPending={isPending} disabled={isPending}>
          {isPending ? "Saving..." : "Save"}
          {error && "Sending failed. Repeat"}
        </Styled.Button>
      </Styled.Form>
    </Styled.ContainerItem>
  );
};

export default PetProfile;
