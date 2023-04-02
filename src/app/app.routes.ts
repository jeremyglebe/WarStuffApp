import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'unit-creation',
    loadComponent: () =>
      import('./unit-creation/unit-creation.page').then(
        (m) => m.UnitCreationPage
      ),
  },
  {
    path: 'view-unit',
    loadComponent: () =>
      import('./view-unit/view-unit.page').then((m) => m.ViewUnitPage),
  },
  {
    path: 'warbands-list',
    loadComponent: () =>
      import('./warbands-list/warbands-list.page').then(
        (m) => m.WarbandsListPage
      ),
  },
  {
    path: 'warband-editor',
    loadComponent: () => import('./warband-editor/warband-editor.page').then( m => m.WarbandEditorPage)
  },
  {
    path: 'warband-view',
    loadComponent: () => import('./warband-view/warband-view.page').then( m => m.WarbandViewPage)
  },
];