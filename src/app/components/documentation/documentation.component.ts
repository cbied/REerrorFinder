import { Component } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent {

  downloadFile(filename: string) {
    // Logic to download the file
  }

  toggleAnswer(questionNumber: number) {
    
    console.log(questionNumber)
    const answer: HTMLElement | null = document.getElementById(`faq-answer-${questionNumber}`);

    if (answer != null) {
      
      console.log(answer)
      answer.style.display = answer.style.display === 'none' ? 'block' : 'none'
    }
  }

}

