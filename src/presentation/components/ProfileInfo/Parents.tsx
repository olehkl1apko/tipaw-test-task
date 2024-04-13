import { FC, useEffect, useState } from "react";
import { object, string, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Resolver } from "react-hook-form";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";
import { IParents } from "../../modules";
import { useUserContext } from "../../../application/context";
import { useUpdateProfile } from "../../../application/hooks";
import SaveButton from "./SaveButton";

const Parents: FC = () => {
  const { t } = useTranslation();
  const { userFromDB, setUserFromDB } = useUserContext();
  const [data, setData] = useState<IParents | null>(null);
  const { profile, error, isPending } = useUpdateProfile(
    data,
    userFromDB?.id,
    "petParents"
  );

  useEffect(() => {
    if (profile) {
      setUserFromDB(profile);
    }
  }, [profile, setUserFromDB]);

  const schema = object({
    father: string().min(2, t("petnamemustbe")).required(),
    fatherAwards: number().optional(),
    mother: string().min(2, t("petnamemustbe")).required(),
    motherAwards: number().optional(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema) as Resolver<IParents>,
  });

  const onFormSubmit = (data: IParents) => {
    setData(data);
    reset();
  };

  return (
    <Styled.Form onSubmit={handleSubmit(onFormSubmit)} typeForm="petParents">
      <Styled.Wrapper>
        <Styled.Title>{t("petparents")}</Styled.Title>
        <Styled.Label>
          <p>{t("fathersPet")}</p>
          <Styled.Input
            type="text"
            id="father"
            {...register("father")}
            defaultValue={userFromDB?.petParents.father || ""}
          />
          {errors.father && (
            <Styled.Error>{errors.father.message}</Styled.Error>
          )}
        </Styled.Label>

        <Styled.Label>
          <p>{t("numberOfAwardsFather")}</p>
          <Styled.Input
            type="number"
            id="fatherAwards"
            defaultValue={userFromDB?.petParents.fatherAwards || 0}
            {...register("fatherAwards")}
          />
          {errors.fatherAwards && (
            <Styled.Error>{errors.fatherAwards.message}</Styled.Error>
          )}
        </Styled.Label>

        <Styled.Label>
          <p>{t("mothersPet")}</p>
          <Styled.Input
            type="text"
            id="mother"
            {...register("mother")}
            defaultValue={userFromDB?.petParents.mother || ""}
          />
          {errors.mother && (
            <Styled.Error>{errors.mother.message}</Styled.Error>
          )}
        </Styled.Label>

        <Styled.Label>
          <p>{t("numberOfAwardsMother")}</p>
          <Styled.Input
            type="number"
            id="motherAwards"
            defaultValue={userFromDB?.petParents.motherAwards || 0}
            {...register("motherAwards")}
          />
          {errors.motherAwards && (
            <Styled.Error>{errors.motherAwards.message}</Styled.Error>
          )}
        </Styled.Label>
      </Styled.Wrapper>

      <SaveButton isPending={isPending} typeForm="petParents" error={error} />
    </Styled.Form>
  );
};

export default Parents;
