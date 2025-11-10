import { Component } from '@angular/core';
import { Header } from "../layout/header/header";
import { Navbare } from "../layout/navbare/navbare";
import { Sidebare } from "../layout/sidebare/sidebare";
import { Main } from "../layout/main/main";
import { Footer } from "../layout/footer/footer";

@Component({
  selector: 'app-dashboard',
  imports: [Header, Navbare, Sidebare, Main, Footer],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
