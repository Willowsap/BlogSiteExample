import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { CreateEntryComponent } from "./blog/create-entry/create-entry.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'create-entry', component: CreateEntryComponent},
    {path: '', component: HomeComponent},
  ];
  
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}