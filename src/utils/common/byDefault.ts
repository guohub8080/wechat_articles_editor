export default (given: any, defaultValue: any) => {
  if (typeof given === "undefined") return defaultValue
  if (given === null) return defaultValue
  return given
}