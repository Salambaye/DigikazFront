import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { UserService } from './user/user.service';
import { UserTableViewComponent } from './user/user-table-view/user-table-view.component';
import { PostViewComponent } from './post/post-view/post-view.component';
import { PostService } from './post/post.service';

import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { animation } from '@angular/animations';

import { PostCreateComponent } from './post/post-create/post-create.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './auth/login-form/LoginFormComponent';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './common/top-bar/top-bar.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { PropertiesViewComponent } from './properties/properties-view/properties-view.component';
import { PropertiesCreateComponent } from './properties/properties-create/properties-create.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HomeViewComponent } from './home/home-view/home-view.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PostViewComponent,
    TopBarComponent,
    PostCreateComponent,
    UserTableViewComponent,
    SpinnerComponent,
    PropertiesViewComponent,
    PropertiesCreateComponent,
    UserCreateComponent,
    HomeViewComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatPaginatorModule,


  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
