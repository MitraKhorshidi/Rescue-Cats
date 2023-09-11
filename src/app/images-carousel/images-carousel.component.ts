import { Component , Input} from '@angular/core';
import { BreedImageData } from 'src/utils/models';

@Component({
  selector: 'app-images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.css']
})
export class ImagesCarouselComponent  {

  @Input() images : BreedImageData[] = [] as BreedImageData[];
  

}
