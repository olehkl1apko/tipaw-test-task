import { useTranslation } from "react-i18next";
import * as Styled from "./styled";

type Props = {
  isPending: boolean;
  typeForm?: string;
  error: any;
};

const SaveButton = ({ isPending, typeForm, error }: Props) => {
  const { t } = useTranslation();

  return (
    <Styled.Button
      type="submit"
      isPending={isPending}
      typeForm={typeForm}
      disabled={isPending}
    >
      {isPending ? t("saving") : t("save")}
      {error && t("sendingFailed")}
    </Styled.Button>
  );
};

export default SaveButton;
