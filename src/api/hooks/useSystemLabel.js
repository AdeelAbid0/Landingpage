import { useClientQuery } from "@/api/apiService";
import { API_URL } from "@/api/apiUrl";
import howItWorksLabels from "@/data/how-it-works-labels.json";

// The backend returns labels as a flat list of { Identifier, Message }
// pairs. Identifiers can be dot-namespaced (e.g. "Nav.Home") for grouped
// lookups, so this rebuilds the same nested-object shape the old
// Prodoo_reactjs redux store produced (see
// Prodoo_reactjs/src/actions/systemLabelAction.js) instead of a flat map.
const buildLabelTree = (items = []) =>
  items.reduce((tree, { Identifier, Message }) => {
    const path = Identifier.split(".");
    let node = tree;
    path.forEach((key, index) => {
      if (index === path.length - 1) {
        node[key] = Message;
      } else {
        node[key] = node[key] ?? {};
        node = node[key];
      }
    });
    return tree;
  }, {});

// Pre-select shape (`{ items: [...] }`) so it matches the raw API response
// — react-query runs `select` on placeholderData too. Only seeds the "How
// it works" section's labels so it renders real copy on first paint
// (SSR/SEO) instead of blank text while the live request resolves; every
// other label is undefined until the real fetch completes, same as before.
const placeholderData = {
  items: Object.entries(howItWorksLabels).map(([Identifier, Message]) => ({
    Identifier,
    Message,
  })),
};

// Global system labels — fetched once on app load and read from the shared
// React Query cache everywhere else, so no page triggers its own fetch.
export const useSystemLabel = () => {
  return useClientQuery({
    queryKeys: ["systemLabel"],
    url: API_URL.SystemLabel.systemLabel(1),
    select: (data) => buildLabelTree(data?.items),
    placeholderData,
  });
};
