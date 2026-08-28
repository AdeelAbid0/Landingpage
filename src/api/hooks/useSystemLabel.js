import { useClientQuery } from "@/api/apiService";
import { API_URL } from "@/api/apiUrl";
import howItWorksLabels from "@/data/how-it-works-labels.json";

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

const placeholderData = {
  items: Object.entries(howItWorksLabels).map(([Identifier, Message]) => ({
    Identifier,
    Message,
  })),
};

export const useSystemLabel = () => {
  return useClientQuery({
    queryKeys: ["systemLabel"],
    url: API_URL.SystemLabel.systemLabel(1),
    select: (data) => buildLabelTree(data?.items),
    placeholderData,
  });
};
