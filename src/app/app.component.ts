import { Component, ElementRef, ViewChild, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'calculator-1';
  expression=''
  janela: any
  buttonElement: any
  @ViewChild('result') result!: ElementRef;

  calcular(a: string, b: string|number){
    if(a==='acao'){
      if(b==='c'){
        this.result.nativeElement.value = ''
     }else{
        this.result.nativeElement.value += b
      }
   }else if(a==='valor'){
      this.result.nativeElement.value += b
    }

  }
  equal(){
   this.expression = eval(this.result.nativeElement.value)
   this.result.nativeElement.value = this.expression
  }
  

}
