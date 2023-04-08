import { Constants } from 'commons';

const getValidityErrorMessage = elem => {
  const { validity, name } = elem;
  const invalidKey = Constants.ValidityKeys.find(key => validity[key]);

  if (!invalidKey) return '';

  return Constants.PatternInvalidMessages[name] || '';
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getValidityErrorMessage,
};
