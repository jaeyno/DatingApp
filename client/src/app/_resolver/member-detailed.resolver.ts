import { MembersService } from './../_services/members.service';
import { Member } from './../_model/member';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ 
    providedIn: 'root' 
})
export class MemberDetailedResolver implements Resolve<Member> {

    constructor(private memberService: MembersService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Member> {
        return this.memberService.getMember(route.paramMap.get('username'));
    }
}