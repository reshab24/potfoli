import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

const style1 = style({
  opacity: 1,
  transform: "translateY(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translateY(-100%)"
})

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('fadein', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide',animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
      // state('triggerFade', style({ transform: 'translateX(0)' })),
      // transition(':enter', [
      //   style({ transform: 'translateX(-100%)' }),
      //   animate('0.5s 300ms ease-in')
      // ]),
      // transition(':leave', [
      //   animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      // ])
    ]),
    trigger('slidelefttitle', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(150%)' }),
        animate('900ms 300ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }, ))
      ])
    ])
  ]
})

// @ViewChild('profile', { static: false }) Profile:any;

export class ProfileComponent implements OnInit {
  fadeinState: String='';

  @ViewChild('profile', {static: false}) public profile: ElementRef;
  @ViewChild('history', {static: false}) public history: ElementRef;

  historyArrayData:Array<Object>=[
    {
      'header':'conaug',
      'contant':'Working as a Web developer'
    },
    {
      'header':'infipre',
      'contant':'Working as a Web developer'
    },
]

  constructor(public el: ElementRef) { }
  @HostListener("window:scroll", [])

  onWindowScroll($event) {

    // console.log(this.profile.nativeElement,"native");
    // console.log(this.profile.nativeElement);
    console.log(this.el.nativeElement.offsetTop,"elementref");
    console.log(this.history.nativeElement.offsetTop,"elementtop");
    console.log(this.history.nativeElement.offsetTop+this.history.nativeElement.children[0].offsetTop,"elementref");
    console.log(this.history.nativeElement.offsetTop+this.history.nativeElement.children[1].offsetTop,"element1");

    // if( window.pageYOffset>=(this.profile.nativeElement.offsetTop-250)){
    //   this.fadeinState="show";
    // }
    // else if( window.pageYOffset>=(this.history.nativeElement.offsetTop)){
    //   this.fadeinState="show";
    // }
     if( window.pageYOffset>=(490)){
      this.fadeinState="show";
    }
    else if( window.pageYOffset>=(this.history.nativeElement.offsetTop+this.history.nativeElement.children[1]-350)){
      this.fadeinState="show";
    }
    else{
      this.fadeinState="hide";
    }
  }

  ngOnInit(): void {
  }
 

}
