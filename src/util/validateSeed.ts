export const validateSeed = (input: string) => {
  return 0 < input.length && input.length <= 8 && !/[^0-9A-Fa-f]/g.test(input)
}
