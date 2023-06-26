export function classNames(
  cls: string,
  mods: Record<string, boolean | string | undefined> = {},
  additional: (string | undefined)[] = [],
): string {
  const filteredMods = Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([cls, _]) => cls);
  return [cls, ...filteredMods, ...additional.filter(Boolean)].join(' ');
}
