export type Color = {
    base: string,
    accents: Array<string>
}

export enum Sex {
    Men, Women, Both
}

export type Collection = {
    name: string;
    sex: Sex;
}

export interface Option {
    collection?: Collection;
    color?: Color;
    size?: number;
    sex?: Sex;
}