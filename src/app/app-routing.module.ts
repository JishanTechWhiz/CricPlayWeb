import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'stu-modal',
    loadChildren: () => import('./stu-modal/stu-modal.module').then( m => m.StuModalPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'user-page',
    loadChildren: () => import('./user-page/user-page.module').then( m => m.UserPagePageModule)
  },
  {
    path: 'organizer-page',
    loadChildren: () => import('./organizer-page/organizer-page.module').then( m => m.OrganizerPagePageModule)
  },
  {
    path: 'user-dash',
    loadChildren: () => import('./user-dash/user-dash.module').then( m => m.UserDashPageModule)
  },
  {
    path: 'organizer-dash',
    loadChildren: () => import('./organizer-dash/organizer-dash.module').then( m => m.OrganizerDashPageModule)
  },
  {
    path: 'add-player',
    loadChildren: () => import('./Udash/add-player/add-player.module').then( m => m.AddPlayerPageModule)
  },
  {
    path: 'join-tournament',
    loadChildren: () => import('./Udash/join-tournament/join-tournament.module').then( m => m.JoinTournamentPageModule)
  },
  {
    path: 'my-team',
    loadChildren: () => import('./Udash/my-team/my-team.module').then( m => m.MyTeamPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./Udash/my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./Udash/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'add-tournament',
    loadChildren: () => import('./ODash/add-tournament/add-tournament.module').then( m => m.AddTournamentPageModule)
  },
  {
    path: 'view-team',
    loadChildren: () => import('./ODash/view-team/view-team.module').then( m => m.ViewTeamPageModule)
  },
  {
    path: 'view-tournament',
    loadChildren: () => import('./ODash/view-tournament/view-tournament.module').then( m => m.ViewTournamentPageModule)
  },
  {
    path: 'join-form/:id',
    loadChildren: () => import('./join-form/join-form.module').then( m => m.JoinFormPageModule)
  },
  {
    path: 'org-profile',
    loadChildren: () => import('./ODash/org-profile/org-profile.module').then( m => m.OrgProfilePageModule)
  },
  {
    path: 'update-team/:id',
    loadChildren: () => import('./Udash/update-team/update-team.module').then( m => m.UpdateTeamPageModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
