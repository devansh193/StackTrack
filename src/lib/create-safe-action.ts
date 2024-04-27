import {z} from "zod";

export type FieldError<T> = {
    [K in keyof T]?: string[];
};