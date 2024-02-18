import { getEntry } from "astro:content";
import { MAP_COLOR_VARIANT_TO_TEXT } from "./mapVariants";

export default async function convertAsteriskToStrongTag(str: string) {
  const { data: theme } = await getEntry('theme', 'theme');

  return str.replace(
    /\*{1,2}(.*?)\*{1,2}/g,
    `<strong class="font-normal ${
      MAP_COLOR_VARIANT_TO_TEXT[theme.primary]
    }">$1</strong>`
  );
}
