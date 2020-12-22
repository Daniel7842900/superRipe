export const categories = [
  { id: "1", name: "Food" },
  { id: "2", name: "Life Hack" },
];

export function getCategories() {
  return categories.filter((c) => c);
}
