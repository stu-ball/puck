const resolvePuckPath = (puckPath: string[] = []) => {
  // Normalize: treat [""] and [] as root
  const normalized = !puckPath || puckPath.length === 0 || (puckPath.length === 1 && puckPath[0] === "") ? [] : puckPath;

  const hasPath = normalized.length > 0;
  const isEdit = hasPath ? normalized[normalized.length - 1] === "edit" : false;

  let pathArr = isEdit ? normalized.slice(0, normalized.length - 1) : normalized;
  let path = "/" + pathArr.join("/");
  if (path === "/") return { isEdit, path: "/" };
  if (path.endsWith("/") && path.length > 1) path = path.slice(0, -1);

  return {
    isEdit,
    path,
  };
};

export default resolvePuckPath;
