import { FC, useEffect, useState } from "react";
import { object, number, date } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Resolver } from "react-hook-form";
import { useTranslation } from "react-i18next";
import "react-datepicker/dist/react-datepicker.css";

import * as Styled from "./styled";
import { ILitter } from "../../modules";
import { useUserContext } from "../../../application/context";
import { useUpdateProfile } from "../../../application/hooks";
import { convertFirestoreTimestampToDate } from "../../helpers";
import SaveButton from "./SaveButton";

const Litter: FC = () => {
  const { t } = useTranslation();
  const { userFromDB, setUserFromDB } = useUserContext();
  const [data, setData] = useState<ILitter | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    convertFirestoreTimestampToDate(userFromDB?.petLitter.birthDate) || null
  );
  const { profile, error, isPending } = useUpdateProfile(
    data,
    userFromDB?.id,
    "petLitter"
  );

  useEffect(() => {
    if (profile) {
      setUserFromDB(profile);
    }
  }, [profile, setUserFromDB]);

  const schema = object({
    puppies: number().optional(),
    birthDate: date(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema) as Resolver<ILitter>,
  });

  const onFormSubmit = (data: ILitter) => {
    setData({
      birthDate: selectedDate,
      puppies: data.puppies,
    });
    reset();
  };

  return (
    <Styled.Form onSubmit={handleSubmit(onFormSubmit)} typeForm="petLitter">
      <Styled.Wrapper>
        <Styled.Title>{t("petLitter")}</Styled.Title>
        <Styled.Label>
          <p>{t("numberOfPuppies")}</p>
          <Styled.Input
            type="number"
            id="puppies"
            defaultValue={userFromDB?.petLitter.puppies || 0}
            {...register("puppies")}
          />
          {errors.puppies && (
            <Styled.Error>{errors.puppies.message}</Styled.Error>
          )}
        </Styled.Label>

        <Styled.Label>
          <p>{t("birthdayOfLitter")}</p>
          <Styled.DateInput
            id="birthDate"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date as Date)}
          />
          {errors.birthDate && (
            <Styled.Error>{errors.birthDate.message}</Styled.Error>
          )}
        </Styled.Label>
      </Styled.Wrapper>

      <SaveButton isPending={isPending} typeForm="petLitter" error={error} />
    </Styled.Form>
  );
};

export default Litter;
