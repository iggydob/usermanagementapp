import {NgModule} from "@angular/core";
import {UserComponent} from "./component/user/user.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [],
  imports:
    [BrowserModule,
      FormsModule,
      UserComponent
    ]
})
export class AppModule {
}
