import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component {

  image1 = '../../../assets/icons/computador.png'
  image2 = '../../../assets/icons/tecnologia.png'
  image3 = '../../../assets/icons/video.png'


  groups = [
    {icon: this.image1, alt : 'imagem generica', title: 'Estabilidade', description: 'Contamos com os melhores servidores do mercado a fim de garantir a estabilidade dos canais sem travamentos.'},
    {icon: this.image2, alt : 'imagem generica', title: 'Todos os Canais', description: 'Oferecemos todos os Canais Abertos e Fechados, sem travamentos, a fim de que você tenha uma excelente experiência ao curtir os seus programas favoritos.'},
    {icon: this.image3, alt : 'imagem generica', title: 'Praticidade', description: 'É só acessar o celular, tablet ou TV Box baixar o app, apertar o botão play e aproveitar.'},

  ]

}
