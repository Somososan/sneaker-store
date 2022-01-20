export type Color = {
    base: string,
    accents: Array<string>
}

export type Sex ={
    type:OptionType.Sex;
    sex:{men| women| Both};
}

export type Collection = {
    type:OptionType.Collection;
    name: string;
}

export type Size = {
    type: OptionType.Size;
    value:number
};

export enum OptionType {
    Collection,
    Color,
    Size,
    Sex,
}
