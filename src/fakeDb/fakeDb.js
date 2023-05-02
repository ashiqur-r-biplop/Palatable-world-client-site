// use local storage to manage cart data
const addToDb = (id) => {
  const recipesID = JSON.parse(localStorage.getItem("recipe"));
  let storedRecipe;
  if (recipesID) {
    const previousStorage = recipesID.find((d) => d === id);
    if (previousStorage) {
      return alert("already added");
    } else {
      const currentStorage = [...recipesID, id];
      localStorage.setItem("recipe", JSON.stringify(currentStorage));
    }
  } else {
    storedRecipe = [id];
    localStorage.setItem("recipe", JSON.stringify(storedRecipe));
  }
};
const getDb = () => {
  const getLocalStorageData = JSON.parse(localStorage.getItem("details"));
  return getLocalStorageData;
};
export { addToDb, getDb, };
