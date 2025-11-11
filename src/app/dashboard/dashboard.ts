import { Component } from '@angular/core';
import { Header } from "../layout/header/header";
import { Sidebare } from "../layout/sidebare/sidebare";

import { Footer } from "../layout/footer/footer";

@Component({
  selector: 'app-dashboard',
  imports: [Header, Sidebare, Footer],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
