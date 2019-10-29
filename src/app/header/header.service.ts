import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService{

    visible: boolean;
    user_name: string;
    member_id: string;
    constructor() { this.visible = true; }
    hide() { this.visible = false; }
    show() { this.visible = true; }
    toggle() { this.visible = !this.visible; }

    tokenUser(){
        this.user_name = localStorage.getItem('token');
        this.member_id = localStorage.getItem('tokenId');
    }
}