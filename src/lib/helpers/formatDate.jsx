export const formatDate = (tanggal) => {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("id-ID", options).format(new Date(tanggal));
};
