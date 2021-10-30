export const validateSeed = (input: string): boolean => {
  return 0 < input.length && input.length <= 8 && !/[^0-9A-Fa-f]/g.test(input)
}
