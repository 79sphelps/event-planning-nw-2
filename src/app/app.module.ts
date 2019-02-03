import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Event Module
// import { EventModule } from './pages/event/event.module';

// Admin Module
import { AdminModule } from './pages/admin/admin.module';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Auth Modules
import { AuthModule } from './auth/auth.module';

// Core Modules
import { CoreModule } from './core/core.module';

// Components
import { CallbackComponent } from './pages/callback/callback.component';
// import { CustomServicesComponent } from './pages/custom-services/custom-services.component';
// import { PaginationComponent } from './pagination/pagination.component';

import { RootComponent } from './root/root.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { HomeSliderComponent } from './pages/home-slider/home-slider.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ServicesComponent } from './pages/services/services.component';
import { EventsComponent } from './pages/events/events.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RequestComponent } from './pages/request/request.component';
import { BlogSliderComponent } from './pages/home/blog-slider/blog-slider.component';
import { GalleryComponent } from './pages/home/gallery/gallery.component';
import { BlogEntryComponent } from './pages/blog/blog-entry/blog-entry.component';
import { ServicesContentComponent } from './pages/services/services-content/services-content.component';
import { ServicesHeaderComponent } from './pages/services/services-header/services-header.component';
import { EventsHeaderComponent } from './pages/events/events-header/events-header.component';
import { EventsContentComponent } from './pages/events/events-content/events-content.component';
// import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { BookingComponentComponent } from './pages/home/booking-component/booking-component.component';
import { TwoColSectionComponent } from './pages/home/two-col-section/two-col-section.component';
import { EventsSectionComponent } from './pages/home/events-section/events.section.component';
import { ServicesSectionComponent } from './pages/home/services-section/services.section.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { AboutSectionComponent } from './pages/home/about-section/about.section.component';

// Services
// import { PaginationService } from './pagination/pagination.service';
import { FooterService } from './footer/footer.service';
import { ClickOutsideDirective } from './navbar2/click-outside.directive';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    BlogComponent,
    ServicesComponent,
    EventsComponent,
    HomeSliderComponent,
    BookingComponentComponent,
    TwoColSectionComponent,
    EventsSectionComponent,
    ServicesSectionComponent,
    AboutSectionComponent,
    SliderComponent,
    AboutComponent,
    ContactComponent,
    RequestComponent,
    BlogSliderComponent,
    GalleryComponent,
    BlogEntryComponent,
    CallbackComponent,
    ServicesContentComponent,
    ServicesHeaderComponent,
    EventsHeaderComponent,
    EventsContentComponent,
    Navbar2Component,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule.forRoot(),
    CoreModule.forRoot(),
    AdminModule
  ],
  providers: [Title, FooterService],
  bootstrap: [RootComponent]
})
export class AppModule {}
