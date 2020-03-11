export class NgFormBuilder {
  beginFormTemplate = `
    <div class="container">
    <form #form="ngForm" (ngSubmit)="onSubmit(form.value)">`;

  endFormTemplate = `
    </form>
    </div>`;

  controlTemplate = `
    <div class="form-group">
    <div>LABEL</div>
    <input type="$TYPE$" name="$NAME$" [(ngModel)]="$NAME$" class="form-control">
    </div>`;

  buttonTemplate = `
    <div class="form-group">
    <input type="$TYPE$" value="$LABEL$">
    </div>`;

  newForm = '';

  public getTemplateForm(jsonData: any) {

    this.newForm = this.beginFormTemplate;

    for (let i = 0; i < jsonData.length; i++) {
      let type = jsonData[i].Type;
      let label = jsonData[i].Label;

      if (type === "password" || type === "text") {
        let template = this.controlTemplate.replace("$TYPE$", type);
        template = template.replace("LABEL", label);
        this.newForm += template;
      }
      else if (type === "button" || type === "submit") {
        let template = this.buttonTemplate.replace("$TYPE$", type);
        template = template.replace("$LABEL$", label);
        this.newForm += template;
      }
    }
    this.newForm += this.endFormTemplate;
    return this.newForm;
  }
}
