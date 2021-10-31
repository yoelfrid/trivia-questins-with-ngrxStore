import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DataSeviceService } from '../data-sevice.service';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit, OnChanges {

  @Input() possibleAnswers: any;
  @Input() correntQustions : any
  @Output() selectedAnsewr = new EventEmitter<any>();
  responsiveOptions: { breakpoint: string; numVisible: number; numScroll: number; }[]
  count: number = 20;
  cars = ["aa", "bb", "cc","fff"]

  aaaa(){
    return 3000
  }
  constructor(private dataSreve: DataSeviceService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ngOnInit(): void {
  }
  ngOnChanges(): void {
    // setInterval(() => {
    //   console.log(this.count--);
    //   if (this.count == 0) {
    //     clearInterval
    //   }
    // }, 1000)
  }

  getText(an: any) {
    return atob(an)
  }





  onClick(anser: string) {

    this.selectedAnsewr.emit(anser)
  }

}
