import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Event Module
import { EventModule } from './pages/event/event.module';

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
import { CustomServicesComponent } from './pages/custom-services/custom-services.component';
import { PaginationComponent } from './pagination/pagination.component';

import { RootComponent } from './root/root.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RequestComponent } from './request/request.component';
import { BlogSliderComponent } from './home/blog-slider/blog-slider.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { ServicesContentComponent } from './services/services-content/services-content.component';
import { ServicesHeaderComponent } from './services/services-header/services-header.component';
import { EventsHeaderComponent } from './events/events-header/events-header.component';
import { EventsContentComponent } from './events/events-content/events-content.component';
// import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { BookingComponentComponent } from './home/booking-component/booking-component.component';
import { TwoColSectionComponent } from './home/two-col-section/two-col-section.component';
import { EventsSectionComponent } from './home/events-section/events.section.component';
import { ServicesSectionComponent } from './home/services-section/services.section.component';
import { SliderComponent } from './home/slider/slider.component';
import { AboutSectionComponent } from './home/about-section/about.section.component';

// Services
import { PaginationService } from './pagination/pagination.service';
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
    CustomServicesComponent,
    PaginationComponent,
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
    EventModule,
    AdminModule
  ],
  providers: [Title, PaginationService, FooterService],
  bootstrap: [RootComponent]
})
export class AppModule {}
