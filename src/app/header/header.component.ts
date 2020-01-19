import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sprawdzCzyZalogowany(){
    return !(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined)
  }
}
