import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../../auth/auth.service';
import { ApiService } from './../../../core/api.service';
import { UtilsService } from './../../../core/utils.service';
import { FilterSortService } from './../../../core/filter-sort.service';
import { Subscription } from 'rxjs/Subscription';
import { Personel } from './../../../core/models/personel.model';
import { expandCollapse } from './../../../core/expand-collapse.animation';

@Component({
  selector: 'app-personel',
  templateUrl: './personel.component.html',
  styleUrls: ['./personel.component.scss'],
  animations: [expandCollapse]
})
export class PersonelComponent implements OnInit, OnDestroy {
  pageTitle = 'Personel';
  personelSub: Subscription;
  personelList: Personel[];
  filteredPersonel: Personel[];
  loading: boolean;
  error: boolean;
  query = '';

  constructor(
    private title: Title,
    public auth: AuthService,
    private api: ApiService,
    public utils: UtilsService,
    public fs: FilterSortService
  ) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getPersonelList();
    this.loadScript('../../../../assets/js/jquery.stellar.min.js');
    this.loadScript('../../../../assets/js/main.js');
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

  private _getPersonelList() {
    this.loading = true;

    // Get all (admin) personel
    this.personelSub = this.api.getPersonel$().subscribe(
      res => {
        this.personelList = res;
        this.filteredPersonel = res;
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
      }
    );
  }

  searchPersonel() {
    this.filteredPersonel = this.fs.search(
      this.personelList,
      this.query,
      '_id'
    );
  }

  resetQuery() {
    this.query = '';
    this.filteredPersonel = this.personelList;
  }

  ngOnDestroy() {
    this.personelSub.unsubscribe();
  }
}
