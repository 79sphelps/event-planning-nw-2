// src/app/pages/admin/admin.module.ts
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreModule } from "./../../core/core.module";
import { AdminComponent } from "./admin.component";

import { CreateEventComponent } from "./create-event/create-event.component";
import { UpdateEventComponent } from "./update-event/update-event.component";
import { EventFormComponent } from "./event-form/event-form.component";
import { DeleteEventComponent } from "./update-event/delete-event/delete-event.component";

import { UpdateHomepageComponent } from "./update-homepage/update-homepage.component";
import { HomepageDetailsComponent } from "./homepage-details/homepage-details.component";
import { HomepageFormComponent } from "./homepage-form/homepage-form.component";

import { ImageDetailComponent } from "./image/image-detail/image-detail.component";
import { ImagesFormComponent } from "./images-form/images-form.component";
import { ImagesUpdateComponent } from "./images-update/images-update.component";
import { DeleteImageComponent } from "./images-update/delete-image/delete-image.component";
import { ImagesComponent } from "./images/images.component";
import { ImageComponent } from "./image/image.component";
import { ImagesNewComponent } from "./images-new/images-new.component";

import { PersonelComponent } from "./personel/personel.component";
import { PersonComponent } from "./person/person.component";
import { PersonelUpdateComponent } from "./personel-update/personel-update.component";
import { PersonelNewComponent } from "./personel-new/personel-new.component";
import { PersonelFormComponent } from "./personel-form/personel-form.component";
import { PersonDetailComponent } from "./person/person-detail/person-detail.component";
import { DeletePersonComponent } from "./personel-update/delete-person/delete-person.component";

import { RouterModule } from "@angular/router";
import { ServiceComponent } from './service/service.component';
import { ServiceDetailComponent } from './service/service-detail/service-detail.component';
import { ServicesFormComponent } from './services-form/services-form.component';
import { ServicesNewComponent } from './services-new/services-new.component';
import { ServicesUpdateComponent } from './services-update/services-update.component';
import { DeleteServiceComponent } from './services-update/delete-service/delete-service.component';
import { ServicesAdminComponent } from './services-admin/services-admin.component';
//import { ADMIN_ROUTES } from "./admin.routes";

// RouterModule.forChild(ADMIN_ROUTES)
@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [
    AdminComponent,
    CreateEventComponent,
    UpdateEventComponent,
    EventFormComponent,
    DeleteEventComponent,
    UpdateHomepageComponent,
    HomepageDetailsComponent,
    HomepageFormComponent,
    ImageDetailComponent,
    ImagesFormComponent,
    ImagesUpdateComponent,
    DeleteImageComponent,
    ImagesComponent,
    ImageComponent,
    ImagesNewComponent,
    PersonelComponent,
    PersonComponent,
    PersonelUpdateComponent,
    PersonelNewComponent,
    PersonelFormComponent,
    PersonDetailComponent,
    DeletePersonComponent,
    ServiceComponent,
    ServiceDetailComponent,
    ServicesFormComponent,
    ServicesNewComponent,
    ServicesUpdateComponent,
    DeleteServiceComponent,
    ServicesAdminComponent
  ]
})
export class AdminModule {}
