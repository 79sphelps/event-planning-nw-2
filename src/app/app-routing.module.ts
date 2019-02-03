import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { EventsComponent } from './pages/events/events.component';
import { RequestComponent } from './pages/request/request.component';
import { BlogEntryComponent } from './pages/blog/blog-entry/blog-entry.component';

import { CallbackComponent } from './pages/callback/callback.component';
// import { CustomServicesComponent } from './pages/custom-services/custom-services.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';

import { AdminComponent } from './pages/admin/admin.component';

// import { EventComponent } from './pages/event/event.component';
import { CreateEventComponent } from './pages/admin/create-event/create-event.component';
import { UpdateEventComponent } from './pages/admin/update-event/update-event.component';

import { UpdateHomepageComponent } from './pages/admin/update-homepage/update-homepage.component';
import { HomepageDetailsComponent } from './pages/admin/homepage-details/homepage-details.component';

import { ImagesUpdateComponent } from './pages/admin/images-update/images-update.component';
import { ImagesComponent } from './pages/admin/images/images.component';
import { ImageComponent } from './pages/admin/image/image.component';
import { ImagesNewComponent } from './pages/admin/images-new/images-new.component';

import { PersonComponent } from './pages/admin/person/person.component';
import { PersonelUpdateComponent } from './pages/admin/personel-update/personel-update.component';
import { PersonelNewComponent } from './pages/admin/personel-new/personel-new.component';
// import { PersonelFormComponent } from './pages/admin/personel-form/personel-form.component';
import { PersonelComponent } from './pages/admin/personel/personel.component';

import { ServicesUpdateComponent } from './pages/admin/services-update/services-update.component';
import { ServicesAdminComponent } from './pages/admin/services-admin/services-admin.component';
import { ServiceComponent } from './pages/admin/service/service.component';
import { ServicesNewComponent } from './pages/admin/services-new/services-new.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog-single',
    component: BlogEntryComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'request',
    component: RequestComponent
  },
  /*
  {
    path: 'event/:id',
    component: EventComponent,
    canActivate: [AuthGuard]
  },
  */
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'admin',
    canActivate: [AuthGuard, AdminGuard],
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: 'event/new',
        component: CreateEventComponent
      },
      {
        path: 'event/update/:id',
        component: UpdateEventComponent
      },
      {
        path: 'homepage',
        component: HomepageDetailsComponent
      },
      {
        path: 'homepage/:id',
        component: HomepageDetailsComponent
      },
      {
        path: 'homepage/update/:id',
        component: UpdateHomepageComponent
      },
      {
        path: 'images/update/:id',
        component: ImagesUpdateComponent
      },
      {
        path: 'images/new',
        component: ImagesNewComponent
      },
      {
        path: 'images',
        component: ImagesComponent
      },
      {
        path: 'images/:id',
        component: ImageComponent
      },
      {
        path: 'services/update/:id',
        component: ServicesUpdateComponent
      },
      {
        path: 'services/new',
        component: ServicesNewComponent
      },
      {
        path: 'services',
        component: ServicesAdminComponent
      },
      {
        path: 'services/:id',
        component: ServiceComponent
      },
      {
        path: 'personel/update/:id',
        component: PersonelUpdateComponent
      },
      {
        path: 'personel/new',
        component: PersonelNewComponent
      },
      {
        path: 'personel/:id',
        component: PersonComponent
      }
    ]
  },
  {
    path: 'personel',
    component: PersonelComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuard]
})
export class AppRoutingModule {}
