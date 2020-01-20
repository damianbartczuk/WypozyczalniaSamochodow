import {Component, OnInit} from '@angular/core';
import {Uzytkownik} from '../modele/Uzytkownik';
import {UzytkownikService} from '../serwisy/uzytkownik.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private zalogowanyUzytkownik: Uzytkownik;
  private czyToAdmin = false;
  constructor(private userService: UzytkownikService,
              private route: Router) { }

  ngOnInit() {
    this.pobierzZalogowanegoUzytkownika();
  }

  private pobierzZalogowanegoUzytkownika() {
    this.userService.pobierzUzytkownikaByToken()
      .subscribe(value => {
          this.zalogowanyUzytkownik = value;
          // this.czyToAdmin = this.zalogowanyUzytkownik.roles[1].nazwa.toLowerCase() === 'admin'
        },
        error => console.log(error),
        () => {
          console.log('skonczyłem pobierać zalogowanego uzytkownika')
          this.zweryfikujCzyToAdmin()
        }
      );
  }

  przekierujNaStroneGlowna() {
    this.route.navigate(['/strona_glowna/'+this.zalogowanyUzytkownik.idUzytkownik+'/'+this.zalogowanyUzytkownik.imie + '/'+this.zalogowanyUzytkownik.nazwisko])
  }

  zweryfikujCzyToAdmin(){
    for(var x = 0; this.zalogowanyUzytkownik.roles.length; x++){
      if(this.zalogowanyUzytkownik.roles[x].nazwa === 'admin'){
        this.czyToAdmin = true;
        return this.czyToAdmin;
      }
    }
  }
}
