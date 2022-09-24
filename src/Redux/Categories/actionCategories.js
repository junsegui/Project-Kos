export const SELECTED_CATEGORIE = "SELECTED_CATEGORIE";

export const selectedCategorie = (categorie) => ({
  type: SELECTED_CATEGORIE,
  payload: categorie,
});
