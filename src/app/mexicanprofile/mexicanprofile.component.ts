import { Component, OnInit } from '@angular/core';
import { MexicanprofileService } from './mexicanprofile.service'

@Component({
  selector: 'app-mexicanprofile',
  templateUrl: './mexicanprofile.component.html',
  styleUrls: ['./mexicanprofile.component.css']
})
export class MexicanprofileComponent implements OnInit {
  mexicanprofile: mexicanprofile[];
  errorMsg: any;
  constructor(public mexicanprofileService: MexicanprofileService) { }

  ngOnInit() {
    this.mexicanprofileService.getmexican().subscribe(
      data => this.mexicanprofile = data,
      error => this.errorMsg = error
    );
  }
}
