export class NgFormBuilder {
  beginFormTemplate = `
    <div class="container">
    <form #loginForm="ngForm" (ngSubmit)="onLogin(loginForm)">`;

  endFormTemplate = `
    </form>
    </div>`;

  controlTemplate = `
    <div class="form-group">
    <div for="NAME">LABEL</div>
    <input type="TYPE" id="NAME" [(ngModel)]="NAME" class="form-control"/>
    </div>`;

  checboxTemplate = `
    <div class="form-group">
    <input type="TYPE" [(ngModel)]="NAME" [ngModelOptions]="{standalone: true}" /><span for="NAME">LABEL</span>
    </div>`;

  buttonTemplate = `
    <div class="form-group">
    <input type="TYPE" value="LABEL"/>
    </div>`;

  newForm = '';

  public getTemplateForm(jsonData: any) {

    this.newForm = this.beginFormTemplate;

    for (let i = 0; i < jsonData.length; i++) {
      let type = jsonData[i].Type;
      let label = jsonData[i].Label;
      let name = jsonData[i].Name;      

      if (type === "password" || type === "text") {
        let template = this.controlTemplate.replace("TYPE", type);
        template = template.replace(/NAME/g, name);
        template = template.replace("LABEL", label);
        this.newForm += template;
      }
      else if (type === "button" || type === "submit") {
        let template = this.buttonTemplate.replace("TYPE", type);
        template = template.replace("LABEL", label);
        this.newForm += template;
      }
      else if (type === "checkbox") {
        let template = this.checboxTemplate.replace("TYPE", type);
        template = template.replace(/NAME/g, name);
        template = template.replace("LABEL", label);
        this.newForm += template;
      }
    }
    this.newForm += this.endFormTemplate;
    return this.newForm;
  }
}
