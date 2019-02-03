import { Component, OnInit } from '@angular/core';

import { UtilsService } from '../../core/utils.service';
// import { FooterService } from '../footer/footer.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  displayEventsStatus: string;
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

  setDisplayEventsStatus(status: string) {
    this.displayEventsStatus = status;
    // this._footerService.setLoaded(true);
  }
}
