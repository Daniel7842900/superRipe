import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // Start index of each page.
  const startIdx = (pageNumber - 1) * pageSize;

  // Returns items on each page.
  return _(items).slice(startIdx).take(pageNumber).value();
}
