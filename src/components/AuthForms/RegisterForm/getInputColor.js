export const getNameColor = (name, isNameValid) => {
  if (!name) {
    return '#fafafa';
  }
  if (!isNameValid && name.length > 0) {
    return '#e74a3b';
  }
  if (isNameValid && name.length > 0) {
    return '#3cbc81';
  }
  if (name.length === 0) {
    return '#fafafa';
  }
};

export const getEmailColor = (email, isEmailValid) => {
  if (!email) {
    return '#fafafa';
  }
  if (!isEmailValid && email.length > 8) {
    return '#e74a3b';
  }
  if (isEmailValid && email.length > 8) {
    return '#3cbc81';
  }
  if (email.length <= 8) {
    return '#fafafa';
  }
};

export const getPasswordColor = (password, passwordValidationState) => {
  if (!password) {
    return '#fafafa';
  }
  if (passwordValidationState === 'weak' && password.length > 0) {
    return '#e74a3b';
  }
  if (passwordValidationState === 'medium' && password.length > 0) {
    return '#f6c23e';
  }
  if (passwordValidationState === 'strong' && password.length > 0) {
    return '#3cbc81';
  }
  if (password.length <= 0) {
    return '#fafafa';
  }
};
