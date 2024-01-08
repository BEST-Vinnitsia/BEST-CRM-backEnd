export const Regex = {
  member: {
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    surname: /^[A-Z][a-z]*$/,
    full_name: /^[A-Z][a-z]*$/,
    middle_name: /^[A-Z][a-z]*$/,
  },
};
