export const selectCreatedAdData = ({
  createdAd: { createFormData },
}: any): [] => createFormData;

export const selectCategoriesCreate = ({
  createdAd: {
    createFormData: { createAdCategory },
  },
}: any): string => createAdCategory;

export const selectSubcategoriesCreate = ({
  createdAd: {
    createFormData: { createAdSubCategory },
  },
}: any): string => createAdSubCategory;

export const selectCity = ({
  createdAd: {
    createFormData: { createAdCity },
  },
}: any): string => createAdCity;

export const selectImagesData = ({
  createdAd: {
    createFormData: { createdAdImages },
  },
}: any): [{ [key: string]: string }] => createdAdImages;
