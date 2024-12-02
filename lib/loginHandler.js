const email = import.meta.env.VITE_EMAIL;
const password = import.meta.env.VITE_PASS;

export const validateLogin = (data) => {
  if (data.email === email && data.password === password) return true;

  return false;
};
