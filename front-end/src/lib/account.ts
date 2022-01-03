import { Writable, writable } from "svelte/store";

export module Account {
    
    export const account:Writable<Account> =writable();


    export interface Account {
        uuid:string;
        gender:string;
        shoesizeLength?:number;
        shoesizeWidth?:number;
    }

    
}