export class Disciplina {
    id: number;
    name: string;
    teacher: string;
    email: string;
    periodo: number;
  
    constructor(id: number, name: string, teacher: string, email: string, periodo: number) {
      this.id = id;
      this.name = name;
      this.teacher = teacher;
      this.email = email;
      this.periodo = periodo;
    }
  
  }