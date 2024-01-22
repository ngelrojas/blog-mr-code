import {ClassNamesParams} from "./utils.interface.ts";

export function classNames({classes}: ClassNamesParams) {
    return classes?.filter(Boolean).join(' ')
}