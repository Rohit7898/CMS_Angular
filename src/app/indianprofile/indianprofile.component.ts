import { Component, OnInit } from '@angular/core';
import { IndianprofileService } from './indianprofile.service'

@Component({
  selector: 'app-indianprofile',
  templateUrl: './indianprofile.component.html',
  styleUrls: ['./indianprofile.component.css']
})
export class IndianprofileComponent implements OnInit {
  indianprofile: indianprofile[];
  errorMsg: any;
  constructor(public indianprofileService: IndianprofileService) { }

  ngOnInit() {
    this.indianprofileService.getindian().subscribe(
      data => this.indianprofile = data,
      error => this.errorMsg = error
    );
  }
}
