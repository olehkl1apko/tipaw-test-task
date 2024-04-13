import { FC, useEffect, useState } from "react";
import { object, string, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Resolver } from "react-hook-form";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";
import { resources } from "../../../i18n/translate";
import { currentLanguage } from "../../helpers";
import { IPetProfile } from "../../modules";
import { useUserContext } from "../../../application/context";
import { useUpdateProfile } from "../../../application/hooks";
import SaveButton from "./SaveButton";

const PetProfile: FC = () => {
  const { t } = useTranslation();
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

  const genders = resources[currentLanguage()].translation.genres;
  const species = resources[currentLanguage()].translation.pets;

  const schema = object({
    petName: string().min(2, t("petnamemustbe")).required(),
    specie: string().min(1, t("pleaseSelectSpecies")).required(),
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
    <Styled.Form onSubmit={handleSubmit(onFormSubmit)}>
      <Styled.Wrapper>
        <Styled.Title>{t("petCommonInfo")}</Styled.Title>
        <Styled.Label>
          <p>{t("petName")}</p>
          <Styled.Input
            type="text"
            id="petName"
            {...register("petName")}
            defaultValue={userFromDB?.petCommonInfo.petName || ""}
          />
          {errors.petName && (
            <Styled.Error>{errors.petName.message}</Styled.Error>
          )}
        </Styled.Label>

        <Styled.Label>
          <p>{t("species")}</p>
          <Styled.Select
            {...register("specie")}
            defaultValue={userFromDB?.petCommonInfo.specie}
          >
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
          <p>{t("age")}</p>
          <Styled.Input
            type="number"
            id="age"
            defaultValue={userFromDB?.petCommonInfo.age || 0}
            {...register("age")}
          />
          {errors.age && <Styled.Error>{errors.age.message}</Styled.Error>}
        </Styled.Label>

        <Styled.Label>
          <p>{t("gender")}</p>
          <Styled.Select
            {...register("gender")}
            defaultValue={userFromDB?.petCommonInfo.gender}
          >
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
          <p>{t("color")}</p>
          <Styled.Input
            type="text"
            id="color"
            {...register("color")}
            defaultValue={userFromDB?.petCommonInfo.color || ""}
          />
          {errors.color && <Styled.Error>{errors.color.message}</Styled.Error>}
        </Styled.Label>

        <Styled.Label>
          <p>{t("weight")}</p>
          <Styled.Input
            type="number"
            id="weight"
            defaultValue={userFromDB?.petCommonInfo.weight || 0}
            {...register("weight")}
          />
          {errors.weight && (
            <Styled.Error>{errors.weight.message}</Styled.Error>
          )}
        </Styled.Label>
      </Styled.Wrapper>

      <SaveButton isPending={isPending} error={error} />
    </Styled.Form>
  );
};

export default PetProfile;
