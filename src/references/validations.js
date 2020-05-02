export const required = (value) => {
  return {
    error: !value
  }
};

export default {
  required
}