import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'profile',
                loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
            },
            {
                path: 'feed',
                loadChildren: () => import('../feed/feed.module').then( m => m.FeedPageModule)
            },
            {
                path: 'camera',
                loadChildren: () => import('../camera/camera.module').then( m => m.CameraPageModule)
            } 
        ]
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsRoutingModule { }
