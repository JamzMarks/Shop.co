import { Size } from "../../types/size-type";

export function sizeValidator(key: string): Size | undefined {
    const sizeEntry = Object.entries(Size).find(([enumKey, enumValue]) => enumKey === key || enumValue === key);
    
    if (sizeEntry) {
        return sizeEntry[1] as Size;
    } else {
        console.error(`Invalid size: ${key}`);
        return undefined;
    }
}

