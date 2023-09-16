export const generateTimeBasedId = () => {
  const timestamp = Date.now();
  const randomId = `${timestamp}-${Math.floor(Math.random() * 10000)}`;
  return randomId;
};
