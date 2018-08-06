import { NgModule } from "../../../node_modules/@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule } from "../../../node_modules/@angular/forms";
import { CommonModule } from "../../../node_modules/@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule
    ]
})
export class AuthModule {}