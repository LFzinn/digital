import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section7.component.html',
  styleUrl: './section7.component.css'
})
export class Section7Component implements OnInit {

  ngOnInit(): void {
      this.perguntaAtiva = 0;
  }


  list = [
    { pergunta: 'Como vou receber?', resposta: 'Os dados de acesso serão enviados de forma automática em seu whatsapp.' },
    { pergunta: 'Qual a velocidade da internet que preciso ter?', resposta: 'Recomendamos ao nossos clientes que os mesmos possuam uma banda larga de no mínimo 10Mb para uma boa experiência de uso.' },
    { pergunta: 'Posso assistir em qualquer modelo de TV?', resposta: 'Sua TV precisa ser do tipo smartv e da marca (LG ou Samsung) para que tenha compatibilidade com nosso serviço. Se você possuir uma Smartv com sistema Android também funciona!'},
    { pergunta: 'Como funciona o suporte?', resposta: 'Nosso suporte é de Segunda a Sábado, das 09h às 22h.' },
    { pergunta: 'Tem fidelidade? E reembolso?', resposta: 'Não Temos fidelidade, você é livre de deixar nosso serviço a qualquer momento, porém não reembolsamos o seu dinheiro.'},
  ]

  perguntaAtiva: number | null = null;

  mostrarResposta(index: number): void {
    this.perguntaAtiva = index;
  }

}
