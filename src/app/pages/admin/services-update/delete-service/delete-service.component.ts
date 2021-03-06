import { Component, OnDestroy, Input } from '@angular/core';
import { Service } from './../../../../core/models/services.model';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from './../../../../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.scss']
})
export class DeleteServiceComponent implements OnDestroy {
  @Input()
  service: Service;
  confirmDelete: string;
  deleteSub: Subscription;
  submitting: boolean;
  error: boolean;

  constructor(private api: ApiService, private router: Router) {}

  removeService() {
    this.submitting = true;
    // DELETE event by ID
    this.deleteSub = this.api.deleteService$(this.service._id).subscribe(
      res => {
        this.submitting = false;
        this.error = false;
        console.log(res.message);
        // If successfully deleted event, redirect to Admin
        this.router.navigate(['/admin/services']);
      },
      err => {
        console.error(err);
        this.submitting = false;
        this.error = true;
      }
    );
  }

  ngOnDestroy() {
    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
    }
  }
}
