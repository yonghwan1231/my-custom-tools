type TOptions = {
  sep?: string;
  time?: boolean;
  calc?: number;
};

type TFormatDate = (
  date: string | undefined | number | Date,
  options?: TOptions
) => string;

export const formatDate: TFormatDate = (date, options) => {
  if (!date) return "";
  const dateObj = new Date(date);
  if (options?.calc) dateObj.setDate(dateObj.getDate() + options.calc);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  const sep = options?.sep || "-";
  let formattedDate = `${year}${sep}${month}${sep}${day}`;

  if (options?.time) {
    const hh = String(dateObj.getHours()).padStart(2, "0");
    const ii = String(dateObj.getMinutes()).padStart(2, "0");
    formattedDate += ` ${hh}:${ii}`;
  }

  return formattedDate;
};
