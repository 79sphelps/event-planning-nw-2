import { Component, OnInit } from '@angular/core';

import { UtilsService } from '../../core/utils.service';
// import { FooterService } from '../footer/footer.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  displayServicesStatus: string;
  loading: boolean;

  constructor(
    public utils: UtilsService,
    // private _footerService: FooterService
    ) {
    // this._footerService.setLoaded(false);
  }

  ngOnInit() {
    window.scrollTo({ top: -200, behavior: 'smooth' });
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  setDisplayServicesStatus(status: string) {
    this.displayServicesStatus = status;
    // this._footerService.setLoaded(true);
  }
}
