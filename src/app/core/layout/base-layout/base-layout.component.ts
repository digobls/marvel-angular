import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

interface LinkMenu {
  label: string;
  url: string;
  icon?: string;
  children?: LinkMenu[];
}

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})

export class BaseLayoutComponent implements OnInit {
  showPersonalDropdown = false;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly titleService: Title,
  ) {

  }

  ngOnInit(): void { }
}
