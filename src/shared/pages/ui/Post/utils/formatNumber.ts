const formatNumber = (target: number) => {
  const local = navigator.language;
  const options: Intl.NumberFormatOptions = {
    notation: "compact",
  };

  const numberFormat = new Intl.NumberFormat(local, options);

  return numberFormat.format(target);
};

export default formatNumber;
