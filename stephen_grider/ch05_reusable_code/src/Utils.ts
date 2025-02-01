export function parseDate(input: string): Date {
  let dateParts = input.split("/");
  return new Date(+dateParts[0], +dateParts[1], +dateParts[2]);
}
