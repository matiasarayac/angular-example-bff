import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'      
    })
  };

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private router: Router, private http:HttpClient) {}

    usuario = {};    

    ngOnInit() {
        console.log("pagina iniciada")
    }

    onLogin() {
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
    }


    postLogin(){
        var url = "http://localhost:63472/login/";        
        this.http.post(url, {"userId":this.usuario["userId"], "password":this.usuario["password"]}, httpOptions).subscribe(
            data => {                
                if(data == 200){
                    console.log("Login ok!");
                    this.onLogin();
                } else {
                    console.log("Error de usuario o contraseña");
                }
            }, error => {
                console.log("Error en Login!");
            }
        );
    }
}
