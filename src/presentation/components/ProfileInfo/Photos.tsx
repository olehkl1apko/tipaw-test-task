import { FC, useEffect, useState } from "react";
import { object, mixed } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import "react-datepicker/dist/react-datepicker.css";

import * as Styled from "./styled";
import { useUserContext } from "../../../application/context";
import { useUpdateProfile, useUploadPhotos } from "../../../application/hooks";
import SaveButton from "./SaveButton";

const Photos: FC = () => {
  const { t } = useTranslation();
  const { userFromDB, setUserFromDB } = useUserContext();
  const [files, setFiles] = useState<File[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const { imageUrls } = useUploadPhotos(files, userFromDB?.id);
  const { profile, error, isPending } = useUpdateProfile(
    imageUrls,
    userFromDB?.id,
    "photos"
  );

  useEffect(() => {
    if (profile) {
      setUserFromDB(profile);
    }
  }, [profile, setUserFromDB]);

  const schema = object().shape({
    images: mixed().test(
      "required",
      "Please select one or more photos...",
      (value: any) => value && value.length
    ),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ images: File[] }>({
    resolver: yupResolver(schema) as any,
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = evt.target.files;
    if (!selectedFiles) return;
    const previewURLs: string[] = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const target = e.target;
        if (target && target instanceof FileReader) {
          previewURLs.push(target.result as string);
          if (previewURLs.length === selectedFiles.length) {
            setImagesPreview(previewURLs);
          }
        }
      };

      reader.readAsDataURL(selectedFiles[i]);
    }
  };

  const onFormSubmit = (data: { images: File[] }) => {
    if (data.images.length > 0) {
      const files = Array.from(data.images);
      setFiles(files);
      reset();
    }
  };

  return (
    <Styled.Form onSubmit={handleSubmit(onFormSubmit)}>
      <Styled.Title>{t("uploadingPhotos")}</Styled.Title>

      {imagesPreview.length > 0 && (
        <Styled.PreviewContainer>
          {imagesPreview.map((previewURL, index) => (
            <Styled.ImagePreview
              key={index}
              src={previewURL}
              alt={`Preview ${index}`}
            />
          ))}
        </Styled.PreviewContainer>
      )}

      <Styled.Label>
        <Styled.Input
          type="file"
          id="images"
          accept="images/*"
          multiple
          {...register("images")}
          onChange={handleChange}
        />
        {errors.images && <Styled.Error>{errors.images.message}</Styled.Error>}
      </Styled.Label>
      <SaveButton isPending={isPending} error={error} typeForm="photos" />
    </Styled.Form>
  );
};

export default Photos;
