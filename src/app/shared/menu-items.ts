import { Injectable } from "@angular/core";
export interface Menu{
    state:string,
    name:string,
    type:string,
    icon:string,
    role:string,
} 
const MENUITEMS=[
{ state:"dashboard", name:"Dashboard", type:"link", icon:"dashboard", role:""  } //not used role
]

@Injectable()
export class MenuItems{
    getMenuItems(){
        return MENUITEMS;
    }
}