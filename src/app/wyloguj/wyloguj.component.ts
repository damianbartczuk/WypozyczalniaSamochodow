import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wyloguj',
  templateUrl: './wyloguj.component.html',
  styleUrls: ['./wyloguj.component.css']
})
export class WylogujComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("Właśnie sie wylogowałeś, teraz przejdziemy na stronę do logowania");
    localStorage.clear();
    this.router.navigate(['/zaloguj']);
  }

}
