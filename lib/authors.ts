// ============================================================
// EarnWiseHub – Author Definitions
// ============================================================

import type { Author } from "@/types";

export const editorialTeam: Author = {
  name: "EarnWiseHub Editorial Team",
  title: "Editorial Team",
  bio: "The EarnWiseHub editorial team researches and writes practical guides about online earning, freelancing, digital skills and remote work. All content is reviewed for accuracy before publication and updated when platform information changes. We do not fabricate earnings claims or platform statistics.",
  avatar: "/images/authors/editorial-team.svg",
};

export const authors: Record<string, Author> = {
  editorial: editorialTeam,
};
