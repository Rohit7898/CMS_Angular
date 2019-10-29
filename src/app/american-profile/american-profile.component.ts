import { Component, OnInit } from '@angular/core';
import { AmericanProfileService } from './american-profile.service';

@Component({
  selector: 'app-american-profile',
  templateUrl: './american-profile.component.html',
  styleUrls: ['./american-profile.component.css']
})
export class AmericanProfileComponent implements OnInit {
  americanprofilelist: americanprofile[];
  errorMsg: any;
  constructor(public americanprofileService: AmericanProfileService) { }

  ngOnInit() {
    this.americanprofileService.getamerican().subscribe(
      data => this.americanprofilelist = data,
      error => this.errorMsg = error
    );
  }
}
