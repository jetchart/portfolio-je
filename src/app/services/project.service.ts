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
    project.id = 1;
    project.title = "First project";
    project.content = "<b>Lorem</b> ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam. ";
    project.image = "assets/image1.jpg";
    projects.push(project);

    project = new Project();
    project.id = 2;
    project.title = "#2 project";
    project.content = "orem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam. ";
    project.image = "assets/image1.jpg";
    projects.push(project);

    project = new Project();
    project.id = 3;
    project.title = "#3 project";
    project.content = "orem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam. ";
    project.image = "assets/image1.jpg";
    projects.push(project);

    project = new Project();
    project.id = 4;
    project.title = "#4 project";
    project.content = "orem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam. ";
    project.image = "assets/image1.jpg";
    projects.push(project);

    return projects;
  }

  public getProjectById(id: number): Project {
    return this.getProjects()[id];
  }

}
