import { isDefined } from "./isDefined";

export function isBrowser(): boolean {
  return isDefined(globalThis?.window) && isDefined(globalThis?.document);
}
