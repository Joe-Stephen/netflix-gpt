export const checkValidateData = (fullName = "name", email, password) => {
  const thisName = fullName.trim();
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);
  if (thisName === null || thisName === "") {
    return "Name is not valid";
  }
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
