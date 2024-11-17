import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'canvas-capture',
    pathMatch: 'full'
  },
 
  {
    path: 'view-captured',
    loadChildren: () => import('./pages/view-captured/view-captured.module').then( m => m.ViewCapturedPageModule)
  },
  {
    path: 'transit-view',
    loadChildren: () => import('./pages/transit-view/transit-view.module').then( m => m.TransitViewPageModule)
  },
  {
    path: 'canvas-capture',
    loadChildren: () => import('./pages/canvas-capture/canvas-capture.module').then( m => m.CanvasCapturePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
