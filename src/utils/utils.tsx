export const todayDate = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate
};

export const currentTime = () => {
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");

  const formattedTime = `${hours}:${minutes}`;

 return formattedTime
};

export const tableHeader = ["#", "Name", "Email", "City"];

export const shortId = (str: string): string =>  {
  return `${str[0]}${str[1]}${str[2]}`;
}