import { BasePage, IdentificationType } from "./BasePage";

const Locators = {
    duration:{
        type: IdentificationType[IdentificationType.Xpath],
        value: "//Duration"
    }

}

export class CourseDetailsPage extends BasePage{

   duration = this.elementLocator(Locators.duration);

   clickDuration(){
       this.duration.click();
   }

}