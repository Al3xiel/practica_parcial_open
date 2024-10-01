import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    MatAnchor
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit {
  currentRoute: string = "";
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentRoute = "http://localhost:4200/" + this.activatedRoute.snapshot.url.map(segment => segment.path).join('/');
  }
}
