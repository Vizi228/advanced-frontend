export function classNames(cls: string, mods: Record<string, boolean | string>, additional: string[]): string {
  const filteredMods = Object.entries(mods).filter(([_, value]) => Boolean(value)).map(([cls, _]) => cls);
  return [cls, ...filteredMods, ...additional].join(' ')
}