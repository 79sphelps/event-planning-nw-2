import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../../auth/auth.service';
import { ApiService } from './../../../core/api.service';
import { UtilsService } from './../../../core/utils.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Service } from './../../../core/models/services.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit, OnDestroy {

  pageTitle: string;
  id: string;
  loggedInSub: Subscription;
  routeSub: Subscription;
  tabSub: Subscription;
  serviceSub: Subscription;
  service: Service;
  loading: boolean;
  error: boolean;
  tab: string;
  eventPast: boolean;

  constructor(
    private route: ActivatedRoute,
    public auth: AuthService,
    private api: ApiService,
    public utils: UtilsService,
    private title: Title
  ) {}

  ngOnInit() {
    this.loggedInSub = this.auth.loggedIn$.subscribe(loggedIn => {
      this.loading = true;
      if (loggedIn) {
        this._routeSubs();
      }
    });
    this.loadScript('../../../assets/js/jquery.stellar.min.js');
    this.loadScript('../../../assets/js/main.js');
    window.scrollTo({ top: -200, behavior: 'smooth' });
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  private _routeSubs() {
    // Set service ID from route params and subscribe
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this._getService();
    });

    // Subscribe to query params to watch for tab changes
    this.tabSub = this.route.queryParams.subscribe(queryParams => {
      this.tab = queryParams['tab'] || 'details';
    });
  }

  private _getService() {
    this.loading = true;
    // GET service by ID
    this.serviceSub = this.api.getServiceById$(this.id).subscribe(
      res => {
        this.service = res;
        this._setPageTitle(this.service.title);
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
        this._setPageTitle('Service Details');
      }
    );
  }

  private _setPageTitle(title: string) {
    this.pageTitle = title;
    this.title.setTitle(title);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.tabSub.unsubscribe();
    this.serviceSub.unsubscribe();
  }
}
