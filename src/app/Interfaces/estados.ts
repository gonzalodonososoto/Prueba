import { getCurrencySymbol } from "@angular/common";

export interface Estado {
    id: number;
    color: string;
}


export let Lista:Array<Estado>=[
    {
        id:1,
        color:"green",
    },

    {
        id:2,
        color:"yellow",
    },

    {
        id:3,
        color: "red",
    },
]