import { Component, Input } from '@angular/core';

@Component({
  selector: 'plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.css']
})
export class PlanCardComponent {
  @Input() title: string = 'Title';
  @Input() subtitle: string = 'Subtitle';
  @Input() price: string = '$100';
  @Input() planType: 'basic' | 'standard' | 'premium' = 'basic';

  private planFeatures = {
    basic: [
      { icon: 'check', text: 'Design of your website' },
      { icon: 'check', text: 'Adaptable for cell phones' },
      { icon: 'check', text: 'Image gallery' },
      { icon: 'check', text: 'Links to social networks' },
      { icon: 'check', text: '1 section' },
      { icon: 'check', text: 'Positioning in Google search results' },
      { icon: 'check', text: 'Google Maps location' },
      { icon: 'check', text: 'Technical support 1 month' },
      { icon: 'cross', text: 'Hosting and domain' },
      { icon: 'cross', text: 'Embedded video' },
      { icon: 'cross', text: 'Dark mode' },
      { icon: 'cross', text: 'Translator' },
    ],
    standard: [
      { icon: 'check', text: 'Design of your website' },
      { icon: 'check', text: 'Adaptable for cell phones' },
      { icon: 'check', text: 'Image gallery' },
      { icon: 'check', text: 'Links to social networks' },
      { icon: 'check', text: '3 sections to choose from' },
      { icon: 'check', text: 'Positioning in Google search results' },
      { icon: 'check', text: 'Google Maps location' },
      { icon: 'check', text: 'Technical support 2 months' },
      { icon: 'check', text: 'Hosting and domain' },
      { icon: 'check', text: 'Embedded video' },
      { icon: 'cross', text: 'Dark mode' },
      { icon: 'cross', text: 'Translator' },
    ],
    premium: [
      { icon: 'check', text: 'Design of your website' },
      { icon: 'check', text: 'Adaptable for cell phones' },
      { icon: 'check', text: 'Image gallery' },
      { icon: 'check', text: 'Links to social networks' },
      { icon: 'check', text: '5 sections to choose from' },
      { icon: 'check', text: 'Positioning in Google search results' },
      { icon: 'check', text: 'Google Maps location' },
      { icon: 'check', text: 'Technical support 6 months' },
      { icon: 'check', text: 'Hosting and domain' },
      { icon: 'check', text: 'Embedded video' },
      { icon: 'check', text: 'Dark mode' },
      { icon: 'check', text: 'Translator' },
    ]
  };

  // Método para obtener la lista de características según el tipo de plan
  get textList() {
    return this.planFeatures[this.planType];
  }
}
