import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {
  loadFooterFlag: boolean;

  constructor(
    // private _footerService: FooterService
    ) { }

  ngOnInit() {
    console.log('--- initializing footer ---');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
        // this.loadFooterFlag = this._footerService.checkLoaded();
    }, 3000);

  }
}
