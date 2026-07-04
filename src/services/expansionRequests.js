export function saveExpansionRequest(request) {
  const existing =
    JSON.parse(localStorage.getItem("expansionRequests")) || [];

  existing.push({
    ...request,
    date: new Date().toLocaleString(),
    status: "New",
  });

  localStorage.setItem(
    "expansionRequests",
    JSON.stringify(existing)
  );
}