import { resolve } from "path";

export const delayTimeout: (delay: number) => Promise<boolean> = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, delay * 1000);
    });
};
