const handlePlaceholder = (
  textEditor: HTMLDivElement,
  setIsShowingPH: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (textEditor.textContent) {
    setIsShowingPH((prev) => {
      if (prev === true) {
        return false;
      } else return prev;
    });
  } else {
    setIsShowingPH((prev) => {
      if (prev === false) {
        return true;
      } else return prev;
    });
  }
};

export default handlePlaceholder;
