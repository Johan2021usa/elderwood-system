import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit{
  articles = [
    { 
      id: 1,
      service : 'servicio de reservas para viajeros',
      descriptions : ['Elderwood le permite a los viajeros reservar su estadia en el complejo turistico El Maco facilmente, solo necesita registrarse de manera gratiuta y podra visualizar las fechas disponibles para cada habitacion.'],
      imagePath : "../../assets/images/reservas.jpg"
    },
    {
      id: 2,
      service : 'gestion de reservas, registros y salidas',
      descriptions : [
        'Nuestro sistema le permite a administradores realizar de manera confiable y efectiva los procesos de gestion de reservas, registros y salidas de huespedes.',
        'Elderwood está pensado para ficilitar la administracion de hoteles permitiendo consultar y acuatilizar los registros de manera adecuada y organizada.'
      ],
      imagePath : "../../assets/images/mujer-reserva.jpg"
    },
    {
      id: 3,
      service : 'sistema de gestion de habitaciones',
      descriptions : ['Elderwood presenta un avanzado Sistema de Gestión de Habitaciones como parte integral de su aplicación, este sistema proporciona una plataforma intuitiva y eficiente que permite a los usuarios gestionar fácilmente las reservas, el estado de las habitaciones y las preferencias personalizadas.'],
      imagePath : "../../assets/images/habitacion.jpg"
    },
    {
      id: 4,
      service : 'sistema de pedidios y servicios adicionales',
      descriptions : ['Elderwood va más allá de la simple gestión de habitaciones al ofrecer un robusto Sistema de Pedidos y Servicios Adicionales. Esta aplicación integral permite a los residentes realizar pedidos personalizados y acceder a una variedad de servicios adicionales desde la comodidad de sus habitaciones.'],
      imagePath : "../../assets/images/pedido.jpg"
    },
    {
      id: 5,
      service : 'informacion de lugares turisticos',
      descriptions : [
        'Elderwood se enorgullece de presentar su funcionalidad de Información de Lugares Turísticos, integrada de manera integral en su aplicación. Este servicio proporciona a los residentes una guía completa de destinos turísticos cercanos, permitiéndoles explorar y disfrutar de experiencias locales.',
        'Con detalles sobre atracciones, eventos culturales, restaurantes y servicios cercanos, el sistema ayuda a los residentes a planificar actividades turísticas de manera fácil y conveniente.'
    ],
      imagePath : "../../assets/images/turismo.webp"
    }
  ];
    // control + d = choose all same words
  // @HostBiding
  // private observer: IntersectionObserver;
  // constructor(private element: ElementRef){};  
  //this.views?.forEach(view => console.log(view.nativeElement));

  /* TESTING Component TS */

  // Selectors way 1
  //@ViewChild('view') view2? : ElementRef; 
  //constructor(private view?: Renderer2){}

  @ViewChildren("view") viewsElRef?: QueryList<ElementRef>;
  constructor(
    private router: Router,
    private scroller: ViewportScroller,
    private viewsRend?: Renderer2
  ){}
  //@ViewChildren("view") views3?: QueryList<Renderer2>;
  //constructor(){};

  //@ViewChildren("view") views?: QueryList<ElementRef>;
  //constructor(private view?: Renderer2){};

  // selector way 2 // Constructor take all coponents from DOM 
  //constructor(private view : ElementRef){};

  // Observer 
  private observer?: IntersectionObserver;

  // PROCESS 1
  /*
  @HostBinding('class.article-container--animation-x') isVisibleInView = false;
  
  ngOnInit(): void {
    //this.observerInitilizer();
  };
  
  ngAfterViewInit(): void {
    this.observerInitilizer();
  };
  
  observerInitilizer(){

    this.observer = new IntersectionObserver(
      this.onIntersection.bind(this), { threshold: [0.5] }
    );

    if(this.view){
      this.observer.observe(this.view2?.nativeElement as HTMLElement);
    };
  }
  onIntersection(entry: any){
    if(entry[0].isIntersecting === true ){
      //this.view2?.nativeElement.classList.add("article-container--animation-x");
      this.view2?.nativeElement.classList.forEach((val: any) => {
        if(val === "article-container--animation-x"){
          this.view?.removeClass(<HTMLFormElement>this.view2?.nativeElement, "article-container--animation-x");    
        }else{
          this.view?.addClass(<HTMLFormElement>this.view2?.nativeElement, "article-container--animation-x");
        }
      });
    }
  }
  onDestroy(): void{
    //this.observer?.unobserve(this.view2?.nativeElement);
    this.observer?.disconnect();
  }/*

  // PROCESS 2
  /*
  @HostBinding('class.article-container--animation-x') isVisibleInView = false;
  ngAfterViewInit() {
  
    this.observer = new IntersectionObserver( entries => {
      if ( entries[0].isIntersecting === true ) {
        
        //console.log(entries[0].target.firstChild);
        
        this.isVisibleInView = true;
        console.log("true");
      }
    }, {
      threshold: 0
    });
    this.observer.observe(this.view?.nativeElement as HTMLElement);
  };

  ngOnDestroy() {
    this.observer?.disconnect();
  };*/

  // PROCESS 3
  //@HostBinding('class.article-container--animation-x') isVisibleInView = false;
  
  ngOnInit(): void { 
    //this.router.navigate(["/"]);
  };
  
  ngAfterViewInit(): void {
    
    this.observerInitilizer();
    //this.scroller;
    //this.router;
  };
  
  observerInitilizer(){
    this.observer = new IntersectionObserver(
      this.onIntersection.bind(this), { threshold: [0.77] }
    );
      
    if(this.viewsElRef){
      this.viewsElRef?.forEach(view => this.observer?.observe(view.nativeElement as HTMLElement));
    };
  }
  
  onIntersection(elements: any){
    elements.forEach((element: any) => {
      this.viewsElRef?.forEach(viewRef => { 
        /*if(element.isIntersecting && element.target.classList[1] === "article-container--animation-x" && element.target.id === viewRef.nativeElement.id) {
          this.viewsRend?.removeClass(viewRef.nativeElement, "article-container--animation-x");
          console.log("a" +element.target.id);
        }else*/
        if(element.isIntersecting && element.target.id === viewRef.nativeElement.id) {
          this.viewsRend?.addClass(viewRef.nativeElement, "article-container--animation-center");
          /*document.getElementById(element.target.id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });*/
          //this.scroller.setOffset([0,200]);    
          //this.scroller.scrollToAnchor(element.target.id);  
          //this.router.navigate([],{fragment: element.target.id});
          


          //console.log("b" +element.target.id);
          /*setTimeout(()=>{
            this.viewsRend?.removeClass(viewRef.nativeElement, "article-container--animation-center")},
            1020
          );*/
        }/*else
        if(element.isIntersecting && element.target.id !== viewRef.nativeElement.id) {
            this.viewsRend?.removeClass(viewRef.nativeElement, "article-container--animation-center");
          //console.log(element.target.id);
        }*/
      });  

    });
    
    /*elements.forEach((element: any) => {
      if (element.isIntersecting) {
        //console.log(element.target.id);
        this.viewsElRef?.forEach(viewRef => { 
          if(element.target.id === viewRef.nativeElement.id) {
            this.viewsRend?.addClass(viewRef.nativeElement, "article-container--animation-x");
            //console.log(view.nativeElement.id);
          }else{
            this.viewsRend?.removeClass(viewRef.nativeElement, "article-container--animation-x");
          }
        });
      }
    });*/
  };

  onDestroy(): void{
    this.observer?.disconnect();
  }

  // PROCESS TEST
}

