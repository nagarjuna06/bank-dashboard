const email = "nagarjuna@greendzine.in";
const password = "nagarjuna@123";

export const validateLogin = (data) => {
  if (data.email === email && data.password === password) return true;

  return false;
};
