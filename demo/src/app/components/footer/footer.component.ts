import { ChangeDetectionStrategy, Component } from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-footer',
  template: `
    <footer class="rc-footer rc-footer-dark" style="background: transparent">
<!--      <section class="rc-footer-container">-->
<!--        <section class="rc-footer-columns">-->
<!--          <div app-footer-col [title]="'Resources'">-->
<!--            <app-footer-item title="Web3-Connect" link="https://www.npmjs.com/package/@b-ee/web3-connect"></app-footer-item>-->
<!--            <app-footer-item title="Angular" link="https://angular.io/"></app-footer-item>-->
<!--            <app-footer-item title="Angular CLI" link="https://cli.angular.io/"></app-footer-item>-->
<!--          </div>-->
<!--          <div app-footer-col [title]="'Community'">-->
<!--            <app-footer-item title="Blog" link="/"></app-footer-item>-->
<!--          </div>-->
<!--          <div app-footer-col [title]="'Help'">-->
<!--            <app-footer-item title="GitHub" link="https://github.com/bee-io/web3-connect"></app-footer-item>-->
<!--            <app-footer-item-->
<!--              [title]="'FAQ'"-->
<!--              [link]=""-->
<!--            ></app-footer-item>-->
<!--            <app-footer-item-->
<!--              [title]="'Bug Report'"-->
<!--              [link]=""-->
<!--            ></app-footer-item>-->
<!--            <app-footer-item-->
<!--              [title]="'Issue'"-->
<!--              [link]=""-->
<!--            ></app-footer-item>-->
<!--            <app-footer-item-->
<!--              title="StackOverflow"-->
<!--              link="https://stackoverflow.com/questions/tagged/@b-ee/web3-connect"-->
<!--            ></app-footer-item>-->
<!--          </div>-->
<!--        </section>-->
<!--      </section>-->
      <section class="rc-footer-bottom">
        <div class="rc-footer-bottom-container">
          <ng-container *ngIf="(appService.theme$ | async) as themes">
            <ng-container *ngIf="themes !== 'dark'">
              <svg width="139" height="19" viewBox="0 0 139 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M94.0202 9.26187L85.3164 4.60864L94.0202 0L96.275 1.26906L89.8502 4.60864L90.7576 5.10472L94.6852 2.98958L96.9781 4.23015L93.0504 6.34524L94.0202 6.81279L100.3 3.3396L102.651 4.60864L94.0202 9.26187ZM84.9443 5.21569V14.4517L93.5934 18.999V15.5835L92.493 13.7848L93.5934 13.1582V9.76298L84.9443 5.21569ZM87.1931 9.83284V8.77318L91.3447 10.9501V12.0098L87.1931 9.83284ZM87.1932 13.2645V12.2049L91.3448 14.3818V15.4415L87.1932 13.2645ZM94.3098 19L102.963 14.4233V12.0344L96.6099 15.3538V14.2725L100.69 12.2104V9.89697L96.6099 12.0344V10.9531L102.963 7.60866V5.16946L94.3098 9.77127V19Z" fill="url(#paint0_linear_208_43)"/>
                <path d="M111.852 14.5291C113.616 14.5291 114.546 13.4567 114.546 12.1162C114.546 10.9901 113.755 10.0652 112.769 9.91773C113.644 9.74346 114.366 8.99278 114.366 7.86675C114.366 6.6737 113.463 5.58789 111.699 5.58789H106.824V14.5291H111.852ZM111.269 9.16704H108.796V7.22331H111.269C111.935 7.22331 112.352 7.63886 112.352 8.20188C112.352 8.76489 111.935 9.16704 111.269 9.16704ZM111.338 12.8802H108.796V10.8025H111.338C112.116 10.8025 112.532 11.285 112.532 11.8481C112.532 12.4915 112.088 12.8802 111.338 12.8802Z" fill="#000000"/>
                <path d="M118.407 12.2939V10.0586H115.833V12.2939H118.407Z" fill="000000"/>
                <path d="M128.704 14.5291V12.8534H123.305V10.8293H128.589V9.15364H123.305V7.26352H128.704V5.58789H120.981V14.5291H128.704Z" fill="#000000"/>
                <path d="M139 14.5291V12.8534H133.601V10.8293H138.885V9.15364H133.601V7.26352H139V5.58789H131.277V14.5291H139Z" fill="#000000"/>
                <path d="M17.2838 7.60907C16.4558 7.60907 15.6155 8.02407 15.2324 8.7114V7.7647H14.1572V16.7648H15.2324V12.8743C15.6155 13.5875 16.4311 13.9766 17.2962 13.9766C18.878 13.9766 20.1756 12.7187 20.1756 10.7993C20.1756 8.89295 18.8656 7.60907 17.2838 7.60907ZM17.1849 12.9132C16.2457 12.9132 15.2324 12.1221 15.2324 10.8123C15.2324 9.51544 16.1592 8.67249 17.1849 8.67249C18.2477 8.67249 19.0881 9.60622 19.0881 10.8123C19.0881 12.0313 18.2477 12.9132 17.1849 12.9132ZM24.2957 13.9766C25.9394 13.9766 27.3234 12.7057 27.3234 10.7864C27.3234 8.86702 25.9394 7.60907 24.2957 7.60907C22.6521 7.60907 21.2804 8.86702 21.2804 10.7864C21.2804 12.7057 22.6521 13.9766 24.2957 13.9766ZM24.2957 12.9132C23.2453 12.9132 22.3679 12.0443 22.3679 10.7864C22.3679 9.54138 23.2453 8.67249 24.2957 8.67249C25.3585 8.67249 26.2483 9.54138 26.2483 10.7864C26.2483 12.0443 25.3585 12.9132 24.2957 12.9132ZM36.0644 7.7647L34.5938 12.0702L33.1108 7.7647H32.0604L30.5898 12.0702L29.1192 7.7647H27.9575L30.1572 13.821H31.047L32.5794 9.32091L34.1736 13.821H35.0757L37.226 7.7647H36.0644ZM43.7077 10.7734C43.7077 8.85405 42.4843 7.60907 40.8407 7.60907C39.197 7.60907 37.8747 8.85405 37.8747 10.7734C37.8747 12.6927 39.197 13.9766 40.8407 13.9766C41.9529 13.9766 42.9909 13.406 43.4853 12.3555L42.5584 11.9665C42.2247 12.576 41.5821 12.9132 40.8777 12.9132C39.8891 12.9132 39.1476 12.3555 38.9869 11.2792H43.683C43.6954 11.1106 43.7077 10.942 43.7077 10.7734ZM38.9993 10.3065C39.1723 9.21717 39.8644 8.67249 40.8407 8.67249C41.7922 8.67249 42.4966 9.26904 42.6326 10.3065H38.9993ZM47.8794 7.60907C47.1132 7.60907 46.5571 8.07594 46.2605 9.13936V7.7647H45.173V13.821H46.2605V11.6034C46.2605 10.0082 46.7177 8.69843 47.867 8.69843C48.0895 8.69843 48.3984 8.7503 48.7074 8.90592L48.8804 7.84251C48.7074 7.72579 48.2872 7.60907 47.8794 7.60907ZM55.2088 10.7734C55.2088 8.85405 53.9854 7.60907 52.3417 7.60907C50.6981 7.60907 49.3758 8.85405 49.3758 10.7734C49.3758 12.6927 50.6981 13.9766 52.3417 13.9766C53.454 13.9766 54.492 13.406 54.9864 12.3555L54.0595 11.9665C53.7258 12.576 53.0832 12.9132 52.3788 12.9132C51.3902 12.9132 50.6487 12.3555 50.488 11.2792H55.1841C55.1964 11.1106 55.2088 10.942 55.2088 10.7734ZM50.5004 10.3065C50.6734 9.21717 51.3655 8.67249 52.3417 8.67249C53.2933 8.67249 53.9977 9.26904 54.1337 10.3065H50.5004ZM61.2343 4.4707V8.7114C60.8512 7.99813 60.0355 7.60907 59.1705 7.60907C57.5886 7.60907 56.2911 8.86702 56.2911 10.7864C56.2911 12.6927 57.601 13.9766 59.1828 13.9766C60.0108 13.9766 60.8512 13.5616 61.2343 12.8743V13.821H62.3094V4.4707H61.2343ZM59.2693 12.9132C58.2189 12.9132 57.3786 11.9795 57.3786 10.7734C57.3786 9.55435 58.2189 8.67249 59.2693 8.67249C60.2209 8.67249 61.2343 9.46357 61.2343 10.7734C61.2343 12.0702 60.3074 12.9132 59.2693 12.9132ZM70.4574 7.60907C69.5923 7.60907 68.7767 7.99813 68.3936 8.7114V4.4707H67.3184V13.821H68.3936V12.8743C68.7767 13.5616 69.617 13.9766 70.445 13.9766C72.0268 13.9766 73.3368 12.6927 73.3368 10.7864C73.3368 8.86702 72.0392 7.60907 70.4574 7.60907ZM70.3461 12.9132C69.3204 12.9132 68.3936 12.0702 68.3936 10.7734C68.3936 9.46357 69.4069 8.67249 70.3461 8.67249C71.4089 8.67249 72.2493 9.55435 72.2493 10.7734C72.2493 11.9795 71.4089 12.9132 70.3461 12.9132ZM78.6345 7.7647L76.8673 12.2259L75.1248 7.7647H73.9631L76.2864 13.6394L75.0754 16.7648H76.2123L79.7961 7.7647H78.6345Z" fill="#000000"/>
                <linearGradient id="paint0_linear_208_43" x1="75.7473" y1="1.57776e-07" x2="95.4658" y2="17.2737" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#13154E"/>
                  <stop offset="1" stop-color="#3C6BAC"/>
                </linearGradient>
              </svg>
            </ng-container>
            <ng-container *ngIf="themes === 'dark'">
              <svg width="139" height="19" viewBox="0 0 139 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M94.0202 9.26187L85.3164 4.60864L94.0202 0L96.275 1.26906L89.8502 4.60864L90.7576 5.10472L94.6852 2.98958L96.9781 4.23015L93.0504 6.34524L94.0202 6.81279L100.3 3.3396L102.651 4.60864L94.0202 9.26187ZM84.9443 5.21569V14.4517L93.5934 18.999V15.5835L92.493 13.7848L93.5934 13.1582V9.76298L84.9443 5.21569ZM87.1931 9.83284V8.77318L91.3447 10.9501V12.0098L87.1931 9.83284ZM87.1932 13.2645V12.2049L91.3448 14.3818V15.4415L87.1932 13.2645ZM94.3098 19L102.963 14.4233V12.0344L96.6099 15.3538V14.2725L100.69 12.2104V9.89697L96.6099 12.0344V10.9531L102.963 7.60866V5.16946L94.3098 9.77127V19Z" fill="url(#paint0_linear_208_43)"/>
                <path d="M111.852 14.5291C113.616 14.5291 114.546 13.4567 114.546 12.1162C114.546 10.9901 113.755 10.0652 112.769 9.91773C113.644 9.74346 114.366 8.99278 114.366 7.86675C114.366 6.6737 113.463 5.58789 111.699 5.58789H106.824V14.5291H111.852ZM111.269 9.16704H108.796V7.22331H111.269C111.935 7.22331 112.352 7.63886 112.352 8.20188C112.352 8.76489 111.935 9.16704 111.269 9.16704ZM111.338 12.8802H108.796V10.8025H111.338C112.116 10.8025 112.532 11.285 112.532 11.8481C112.532 12.4915 112.088 12.8802 111.338 12.8802Z" fill="#FFFFFF"/>
                <path d="M118.407 12.2939V10.0586H115.833V12.2939H118.407Z" fill="FFFFFF"/>
                <path d="M128.704 14.5291V12.8534H123.305V10.8293H128.589V9.15364H123.305V7.26352H128.704V5.58789H120.981V14.5291H128.704Z" fill="#FFFFFF"/>
                <path d="M139 14.5291V12.8534H133.601V10.8293H138.885V9.15364H133.601V7.26352H139V5.58789H131.277V14.5291H139Z" fill="#FFFFFF"/>
                <path d="M17.2838 7.60907C16.4558 7.60907 15.6155 8.02407 15.2324 8.7114V7.7647H14.1572V16.7648H15.2324V12.8743C15.6155 13.5875 16.4311 13.9766 17.2962 13.9766C18.878 13.9766 20.1756 12.7187 20.1756 10.7993C20.1756 8.89295 18.8656 7.60907 17.2838 7.60907ZM17.1849 12.9132C16.2457 12.9132 15.2324 12.1221 15.2324 10.8123C15.2324 9.51544 16.1592 8.67249 17.1849 8.67249C18.2477 8.67249 19.0881 9.60622 19.0881 10.8123C19.0881 12.0313 18.2477 12.9132 17.1849 12.9132ZM24.2957 13.9766C25.9394 13.9766 27.3234 12.7057 27.3234 10.7864C27.3234 8.86702 25.9394 7.60907 24.2957 7.60907C22.6521 7.60907 21.2804 8.86702 21.2804 10.7864C21.2804 12.7057 22.6521 13.9766 24.2957 13.9766ZM24.2957 12.9132C23.2453 12.9132 22.3679 12.0443 22.3679 10.7864C22.3679 9.54138 23.2453 8.67249 24.2957 8.67249C25.3585 8.67249 26.2483 9.54138 26.2483 10.7864C26.2483 12.0443 25.3585 12.9132 24.2957 12.9132ZM36.0644 7.7647L34.5938 12.0702L33.1108 7.7647H32.0604L30.5898 12.0702L29.1192 7.7647H27.9575L30.1572 13.821H31.047L32.5794 9.32091L34.1736 13.821H35.0757L37.226 7.7647H36.0644ZM43.7077 10.7734C43.7077 8.85405 42.4843 7.60907 40.8407 7.60907C39.197 7.60907 37.8747 8.85405 37.8747 10.7734C37.8747 12.6927 39.197 13.9766 40.8407 13.9766C41.9529 13.9766 42.9909 13.406 43.4853 12.3555L42.5584 11.9665C42.2247 12.576 41.5821 12.9132 40.8777 12.9132C39.8891 12.9132 39.1476 12.3555 38.9869 11.2792H43.683C43.6954 11.1106 43.7077 10.942 43.7077 10.7734ZM38.9993 10.3065C39.1723 9.21717 39.8644 8.67249 40.8407 8.67249C41.7922 8.67249 42.4966 9.26904 42.6326 10.3065H38.9993ZM47.8794 7.60907C47.1132 7.60907 46.5571 8.07594 46.2605 9.13936V7.7647H45.173V13.821H46.2605V11.6034C46.2605 10.0082 46.7177 8.69843 47.867 8.69843C48.0895 8.69843 48.3984 8.7503 48.7074 8.90592L48.8804 7.84251C48.7074 7.72579 48.2872 7.60907 47.8794 7.60907ZM55.2088 10.7734C55.2088 8.85405 53.9854 7.60907 52.3417 7.60907C50.6981 7.60907 49.3758 8.85405 49.3758 10.7734C49.3758 12.6927 50.6981 13.9766 52.3417 13.9766C53.454 13.9766 54.492 13.406 54.9864 12.3555L54.0595 11.9665C53.7258 12.576 53.0832 12.9132 52.3788 12.9132C51.3902 12.9132 50.6487 12.3555 50.488 11.2792H55.1841C55.1964 11.1106 55.2088 10.942 55.2088 10.7734ZM50.5004 10.3065C50.6734 9.21717 51.3655 8.67249 52.3417 8.67249C53.2933 8.67249 53.9977 9.26904 54.1337 10.3065H50.5004ZM61.2343 4.4707V8.7114C60.8512 7.99813 60.0355 7.60907 59.1705 7.60907C57.5886 7.60907 56.2911 8.86702 56.2911 10.7864C56.2911 12.6927 57.601 13.9766 59.1828 13.9766C60.0108 13.9766 60.8512 13.5616 61.2343 12.8743V13.821H62.3094V4.4707H61.2343ZM59.2693 12.9132C58.2189 12.9132 57.3786 11.9795 57.3786 10.7734C57.3786 9.55435 58.2189 8.67249 59.2693 8.67249C60.2209 8.67249 61.2343 9.46357 61.2343 10.7734C61.2343 12.0702 60.3074 12.9132 59.2693 12.9132ZM70.4574 7.60907C69.5923 7.60907 68.7767 7.99813 68.3936 8.7114V4.4707H67.3184V13.821H68.3936V12.8743C68.7767 13.5616 69.617 13.9766 70.445 13.9766C72.0268 13.9766 73.3368 12.6927 73.3368 10.7864C73.3368 8.86702 72.0392 7.60907 70.4574 7.60907ZM70.3461 12.9132C69.3204 12.9132 68.3936 12.0702 68.3936 10.7734C68.3936 9.46357 69.4069 8.67249 70.3461 8.67249C71.4089 8.67249 72.2493 9.55435 72.2493 10.7734C72.2493 11.9795 71.4089 12.9132 70.3461 12.9132ZM78.6345 7.7647L76.8673 12.2259L75.1248 7.7647H73.9631L76.2864 13.6394L75.0754 16.7648H76.2123L79.7961 7.7647H78.6345Z" fill="#FFFFFF"/>
                <linearGradient id="paint0_linear_208_43" x1="75.7473" y1="1.57776e-07" x2="95.4658" y2="17.2737" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#13154E"/>
                  <stop offset="1" stop-color="#3C6BAC"/>
                </linearGradient>
              </svg>
            </ng-container>
          </ng-container>
        </div>
      </section>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public appService: AppService) {}

}
