import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as Styled from "./styled";
import { resources } from "../../../i18n/translate";
import { currentLanguage } from "../../helpers";

const CommonInfo = () => {
  const occupations: string[] =
    resources[currentLanguage()].translation.occupations;

  const schema = object({
    firstName: string().min(2).required(),
    lastName: string().min(2).required(),
    phoneNumber: string().required(),
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
  });

  const onFormSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    //   <Styled.Title></Styled.Title>
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <label htmlFor="firstName">
        <div className="label-name">First Name</div>
        <input type="text" id="firstName" {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </label>

      <label htmlFor="lastName">
        <div className="label-name">Last Name</div>
        <input type="text" id="lastName" {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </label>

      <label htmlFor="phoneNumber">
        <div className="label-name">Phone Number</div>
        <input type="text" id="phoneNumber" {...register("phoneNumber")} />
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      </label>

      <label htmlFor="email">
        <div className="label-name">Email</div>
        <input type="email" id="email" />
      </label>

      <label>
        <div className="label-name">Occupation</div>
        <select {...register("occupations")}>
          {occupations.map((occupation, index) => (
            <option key={index} value={occupation}>
              {occupation}
            </option>
          ))}
        </select>
        {errors.occupations && <p>{errors.occupations.message}</p>}
      </label>

      <button type="submit">Sign up</button>
    </form>
  );
};

export default CommonInfo;
