import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section5.component.html',
  styleUrl: './section5.component.css'
})
export class Section5Component {


  list = [
    { preco: 'R$19,90', plano: 'Plano Mensal (1 mês)', telas:'2 telas', canais: 'Todos os Canais', cortesia: 'Filmes e Séries', qualidade: 'Qualidade SD, HD, FULL HD e 4k', adulto: 'Canais Adulto(opcional)', app: 'Aplicativo Para Android'},
    { preco: 'R$50,00', plano: 'Plano Trimestral (3 meses)', telas:'2 telas', canais: 'Todos os Canais', cortesia: 'Filmes e Séries', qualidade: 'Qualidade SD, HD, FULL HD e 4k', adulto: 'Canais Adulto(opcional)', app: 'Aplicativo Para Android'},
    { preco: 'R$99,90', plano: 'Plano Semestral (6 meses)', telas:'3 telas', canais: 'Todos os Canais', cortesia: 'Filmes e Séries', qualidade: 'Qualidade SD, HD, FULL HD e 4k', adulto: 'Canais Adulto(opcional)', app: 'Aplicativo Para Android'},
    { preco: 'R$189,00', plano: 'Plano Anual (1 ano)', telas:'3 telas', canais: 'Todos os Canais', cortesia: 'Filmes e Séries', qualidade: 'Qualidade SD, HD, FULL HD e 4k', adulto: 'Canais Adulto(opcional)', app: 'Aplicativo Para Android'},
  ]

}
