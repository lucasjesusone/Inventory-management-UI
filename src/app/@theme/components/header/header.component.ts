import { LayoutService } from './../../../@core/utils/layout.service';
import { Component, Inject, OnInit } from "@angular/core";
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NB_WINDOW } from "@nebular/theme";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

@Component({
  selector: "ngx-header",
  styleUrls: ["./header.component.scss"],
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  userMenu: any;
  // isHomologation: boolean = !environment.production;
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    // private permissionsService: NgxPermissionsService,
    private breakpointService: NbMediaBreakpointsService,
    // private authenticationService: AuthenticationService,
    private nbMenuService: NbMenuService,
    @Inject(NB_WINDOW) private window) {
  }

  ngOnInit() {
    // this.permissionsService.permissions$.subscribe((permissions) => {
      this.userMenu = [
        { icon: 'person-outline', title: 'Usuário', link: '/pages/user/list',},
        { icon: 'shield-outline', title: 'Perfil', link: '/pages/profile/list',},
        { icon: 'smartphone-outline', title: 'Aparelhos', link: '/pages/device/list'},
        { icon: 'flip-2-outline', title: 'Trocar Senha', link: '/pages/change-password'},
        { icon: 'menu-outline', title: 'Licença' },
        { icon: 'log-out-outline', title: 'Log out' }
      ];
  // }
  // )

    this.nbMenuService.onItemClick()
      .pipe(filter(({ tag }) => tag === 'context-menu'), map(({ item: { title } }) => title))
      .subscribe(title => {
        // this.selectMenu(title);
      });

    const { xl } = this.breakpointService.getBreakpointsMap();

    this.themeService.onMediaQueryChange()
      .pipe(map(([, currentBreakpoint]) => currentBreakpoint.width < xl), takeUntil(this.destroy$))
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    // this.authenticationService.currentUser
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(user => {
    //     this.user = user;
    //   })
  }

  // selectMenu(selected) {
  //   if (selected === 'Log out') {
  //     this.logout();
  //   }
  // }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }

  // navigateHome() {
  //   this.authenticationService.home();
  //   this.menuService.navigateHome();
  //   return false;
  // }

  // logout() {
  //   this.authenticationService.logout();
  // }
}

function takeUntil(destroy$: any): any {
  throw new Error("Function not implemented.");
}

function filter(arg0: ({ tag }: { tag: any; }) => boolean): any {
  throw new Error("Function not implemented.");
}

