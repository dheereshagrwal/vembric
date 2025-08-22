export function formatRequestType(requestType?: string) {
  if (!requestType) return "";
  return String(requestType).toUpperCase();
}

export function getRequestTypeColorClass(requestType?: string) {
  const rt = formatRequestType(requestType);
  switch (rt) {
    case "GET":
      return `bg-green-100 text-green-800`;
    case "POST":
      return `bg-blue-100 text-blue-800`;
    case "PUT":
      return `bg-yellow-100 text-yellow-800`;
    case "DELETE":
      return `bg-red-100 text-red-800`;
    default:
      return `bg-gray-100 text-gray-800`;
  }
}
