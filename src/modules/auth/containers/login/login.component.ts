import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private authService: AuthService, private router: Router) {}
    ngOnInit() {}

    onSubmit() {
        let frmVal = this.loginForm.value;

        console.log(frmVal.email);
        console.log(frmVal.password);

        if (frmVal.email && frmVal.password){
            this.authService.getAuth$(frmVal.email, frmVal.password).subscribe((response) => {
                // console.log(response);
            })
        }

        // TODO: Use EventEmitter with form value
        // console.warn(this.loginForm.value);
    }
}
