import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {Hero} from '../hero';
import {HeroService}  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero:Hero;

  constructor(private heroService:HeroService,
              private route:ActivatedRoute,
              private location:Location) {
  }

  ngOnInit() {
    this.route.params.forEach((params:Params) => {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero => this.hero = hero);
    });
  }

  save():void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  goBack():void {
    this.location.back();
  }

}
