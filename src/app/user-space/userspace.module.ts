import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PitchesListComponent } from './pitches-list/pitches-list.component';
import { TerrainCardComponent } from './terrain-card/terrain-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { PitchBookingComponent } from './pitch-booking/pitch-booking.component';
import { UserSpaceComponent } from './userspace.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ParticipateComponent } from './participate/participate.component';
import { SignupComponent } from '../shared/components/signup/signup.component';

const UserSpaceRoutes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: SignupComponent,
  },
  {
    path: 'terrain/:id',
    component: PitchBookingComponent,
  },
  {
    path: 'competition/:id',
    component: ParticipateComponent,
  },
  {
    path: 'reservation/:id',
    component: ReservationComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    PitchesListComponent,
    NotificationsComponent,
    TerrainCardComponent,
    UserSpaceComponent,
    SearchBarComponent,
    PitchBookingComponent,
    CategoriesListComponent,
    ReservationComponent,
    ParticipateComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(UserSpaceRoutes)],
})
export class UserspaceModule {}
