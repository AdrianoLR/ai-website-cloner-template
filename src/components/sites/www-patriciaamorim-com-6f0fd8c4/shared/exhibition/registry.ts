import type { ProjectDetail } from "@/types/patricia-amorim";

import { exhibition as e0 } from "../../exhibitions-cleanse-63f2ef2e/content";
import { exhibition as e1 } from "../../exhibitions-between-light-traces-and-the-archive-36dccd9b/content";
import { exhibition as e2 } from "../../exhibitions-searching-my-work-0a5f4ffb/content";
import { exhibition as e3 } from "../../exhibitions-ecu-postgraduate-show-76472b94/content";
import { exhibition as e4 } from "../../exhibitions-finding-our-place-336d22cd/content";
import { exhibition as e5 } from "../../exhibitions-the-artist-is-absent-1580b11d/content";
import { exhibition as e6 } from "../../exhibitions-collective-39e1a92e/content";
import { exhibition as e7 } from "../../exhibitions-here-now-78ec3cf0/content";
import { exhibition as e8 } from "../../exhibitions-crossroads-a7fbfc09/content";
import { exhibition as e9 } from "../../exhibitions-nexus-8a514a53/content";
import { exhibition as e10 } from "../../exhibitions-re-borrowing-arrows-2a60cd5b/content";

/**
 * Detail content for every /exhibitions/<slug> page, in the order the detail
 * pages list each other (it differs from the order of the /exhibitions page).
 */
export const exhibitionDetails: ProjectDetail[] = [e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10];
