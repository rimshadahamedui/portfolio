import { Component } from '@angular/core';
import { HeaderComponent} from "../header/header.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent , CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  skills = [
    {url : 'assets/images/skills/angular.svg' , name: 'Angular/SSR'},
    {url : 'assets/images/skills/react.svg' , name: 'React'},
    {url : 'assets/images/skills/typescript.png' , name: 'Typescript'},
    {url : 'assets/images/skills/html.png' , name: 'HTML/CSS/SCSS'}
  ]
  adobeskills = [
    {url : 'assets/images/skills/ps.png' , name: 'Photoshop'},
    {url : 'assets/images/skills/illustrator.svg' , name: 'Illustrator'},
    {url : 'assets/images/skills/animate.svg' , name: 'Animate'},
    {url : 'assets/images/skills/xd.png' , name: 'XD'}
  ]
  works = [
    {  name: 'Real Research', thumbnail: 'assets/images/portfolio/realresearch/w-realresearch.png',
        screens : [{url: 'assets/images/portfolio/realresearch/realresearch.JPG'},
        {url: 'assets/images/portfolio/realresearch/insights.png'},
        {url: 'assets/images/portfolio/realresearch/3.JPG'},
        {url: 'assets/images/portfolio/realresearch/3.JPG'},
        {url: 'assets/images/portfolio/realresearch/5.JPG'},
        {url: 'assets/images/portfolio/realresearch/6.JPG'}]
    },
    {  name: 'Bytrade.io', thumbnail: 'assets/images/portfolio/realresearch/w-2.png',
      screens : [{url: 'assets/images/portfolio/realresearch/realresearch.JPG'},
        {url: 'assets/images/portfolio/realresearch/insights.png'},
        {url: 'assets/images/portfolio/realresearch/3.JPG'},
        {url: 'assets/images/portfolio/realresearch/3.JPG'},
        {url: 'assets/images/portfolio/realresearch/5.JPG'},
        {url: 'assets/images/portfolio/realresearch/6.JPG'}]
    },
    {  name: 'Halving Lottery', thumbnail: 'assets/images/portfolio/realresearch/w-1.png',
      screens : [{url: 'assets/images/portfolio/realresearch/realresearch.JPG'},
        {url: 'assets/images/portfolio/realresearch/insights.png'},
        {url: 'assets/images/portfolio/realresearch/3.JPG'},
        {url: 'assets/images/portfolio/realresearch/3.JPG'},
        {url: 'assets/images/portfolio/realresearch/5.JPG'},
        {url: 'assets/images/portfolio/realresearch/6.JPG'}]
    },
    {  name: 'ABBC', thumbnail: 'assets/images/portfolio/realresearch/w-4.png',
      screens : [{url: 'assets/images/portfolio/realresearch/realresearch.JPG'},
        {url: 'assets/images/portfolio/realresearch/insights.png'},
        {url: 'assets/images/portfolio/realresearch/3.JPG'},
        {url: 'assets/images/portfolio/realresearch/3.JPG'},
        {url: 'assets/images/portfolio/realresearch/5.JPG'},
        {url: 'assets/images/portfolio/realresearch/6.JPG'}]
    }
  ]
}
