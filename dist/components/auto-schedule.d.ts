import type { Components, JSX } from "../types/components";

interface AutoSchedule extends Components.AutoSchedule, HTMLElement {}
export const AutoSchedule: {
    prototype: AutoSchedule;
    new (): AutoSchedule;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
