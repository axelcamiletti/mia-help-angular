import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-topic-view-help',
  templateUrl: './topic-view-help.component.html',
  styleUrls: ['./topic-view-help.component.css']
})
export class TopicViewHelpComponent implements OnInit {

  breadcrumb:any = [
    {route: 'Codacoin'},
    {route: 'Interfac de Codacion'},
    {route: 'Transacción'}
  ]

  sidebar:any = [
    {route: 'Write press releases'},
    {route: 'Optimize newsroom'},
    {route: 'Manage contacts'},
    {route: 'Send emial putches'},
    {route: 'Find new media contacts'},
    {route: 'Analyze PR performance'},
    {route: 'Manage your account'},
  ]

  @Input() isSidebarOpen:boolean = true;

  constructor(
    public breakpointObserver: BreakpointObserver,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSidebarOpen = false;
        }
    });
  }

  sidebarCloseMobile(){
    if (this.breakpointObserver.isMatched('(max-width: 599px)')) {
      this.isSidebarOpen = false;
    }
  }

}
