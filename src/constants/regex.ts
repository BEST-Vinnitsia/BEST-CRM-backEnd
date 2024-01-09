export const Regex = {
  member: {
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    surname: /^[A-Z][a-z]*$/,
    fullName: /^[A-Z][a-z]*$/,
    middleName: /^[A-Z][a-z]*$/,
  },
};
