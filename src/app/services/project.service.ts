import { Injectable } from '@angular/core';
import {Project} from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  public getProjects(): Project[] {
    const projects = new Array();

    let project = new Project();
    project.id = 0;
    project.title = "Planning 2.0";
    project.content = "In many cases development teams have to define complexities before performing tasks. With this application, they could do this remotely and simply. " +
      "<a href='assets/planning-app.jpg' target='_blank'><i class='fa fa-image'> See an image</i></a>" +
      "<br>" +
      "<br>" +
      "<a href='https://planning-poker-jme.netlify.com/#/' target='_blank'><i class='fa fa-external-link'></i> Go to app!</a>";
    project.image = "assets/cabin.png";
    projects.push(project);

    project = new Project();
    project.id = 1;
    project.title = "COVID19 Stats";
    project.content = "During 2020 the world went through a difficult pandemic. Through this app you will be able to consult day by day data about confirmed cases, deaths and recovered in the world. This information can also be obtained for a particular country. " +
      "<a href='assets/covid-app.jpg' target='_blank'><i class='fa fa-image'> See an image</i></a>" +
      "<br>" +
      "<br>" +
      "<a href='https://covid19-stats-jme.netlify.com/#/' target='_blank'><i class='fa fa-external-link'></i> Go to app!</a>";
    project.image = "assets/cake.png";
    projects.push(project);

    project = new Project();
    project.id = 2;
    project.title = "Rama Portfolio";
    project.content = "A friend had to submit a web page design for his thesis. He designed it and I developed it. It is not finished yet. " +
      "<a href='assets/rama-app.jpg' target='_blank'><i class='fa fa-image'> See an image</i></a>" +
      "<br>" +
      "<br>" +
      "<a href='https://portfolio-rami-20.netlify.app/#/' target='_blank'><i class='fa fa-external-link'></i> Go to app!</a>";
    project.image = "assets/safe.png";
    projects.push(project);
    
    project = new Project();
    project.id = 3;
    project.title = "Scrum Board";
    project.content = "Board for scrum. It allows you to create cards of different colors and move them between columns. It is possible to display the burdown graph. " +
      "<a href='assets/scrum-app.jpg' target='_blank'><i class='fa fa-image'> See an image</i></a>" +
      "<br>" +
      "<br>" +
      "<a href='https://scrum-board.netlify.app/#/app' target='_blank'><i class='fa fa-external-link'></i> Go to app!</a>";
    project.image = "assets/game.png";
    projects.push(project);

    return projects;
  }

  public getProjectById(id: number): Project {
    return this.getProjects()[id];
  }

}
