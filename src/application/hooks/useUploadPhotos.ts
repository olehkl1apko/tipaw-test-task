import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { projectStorage } from "../../firebase/firebaseConfig";
import { IPhotos } from "../../presentation/modules";

export const useUploadPhotos = (
  images: File[] | null,
  userId: string | undefined
) => {
  const [imageUrls, setImageUrls] = useState<string[] | never[]>([]);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const uploadImages = async () => {
      setError(null);
      setIsPending(true);

      if (!images || images?.length === 0 || !userId) {
        setImageUrls([]);
        setIsPending(false);
        return;
      }

      try {
        const storageRef = ref(projectStorage, `photos/${userId}`);

        // upload user thumbnail
        const promises = images.map(async (image) => {
          const imageRef = ref(storageRef, image.name);
          await uploadBytes(imageRef, image);
          return getDownloadURL(imageRef);
        });

        const urls: IPhotos = await Promise.all(promises);

        setImageUrls(urls);
        setIsPending(false);
      } catch (error: any) {
        setError(error.message);
        setIsPending(false);
      }
    };

    uploadImages();
  }, [userId, images]);

  return { imageUrls, isPending, error };
};
