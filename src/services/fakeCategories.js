export const categories = [
  { id: "1", name: "food" },
  { id: "2", name: "life hack" },
];

export function getCategories() {
  return categories.filter((c) => c);
}
