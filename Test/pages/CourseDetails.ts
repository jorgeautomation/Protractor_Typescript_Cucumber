import { BasePage, IdentificationType } from "./BasePage";

const Locators = {
    duration:{
        type: IdentificationType[IdentificationType.Xpath],
        value: "//Duration"
    },
    courseHeading:{
        type: IdentificationType[IdentificationType.Xpath],
        value: "//h2"
    }

}

export class CourseDetailsPage extends BasePage{

   duration = this.elementLocator(Locators.duration);
   courseHeading = this.elementLocator(Locators.courseHeading);

   clickDuration(){
       this.duration.click();
   }

   async gerCourseHeading(){
       await this.courseHeading;
   }

}