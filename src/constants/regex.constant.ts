export const Regex = {
  member: {
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    name: /^[A-Z][a-z]*$/,
    surname: /^[A-Z][a-z]*$/,
    middleName: /^[A-Z][a-z]*$/,
  },
};
