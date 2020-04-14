export class NgFormBuilder {
  beginFormTemplate = `
    <div class="container">
    <form #loginForm="ngForm" (ngSubmit)="onLogin(loginForm)">`;

  endFormTemplate = `
    </form>
    </div>`;

  controlTemplate = `
    <div class="form-group">
    <div class="label" for="IDTAG">LABEL</div>
    <input type="TYPE" id="IDTAG" [(ngModel)]="IDTAG" class="form-control" required/>
    </div>`;

  textAreaTemplate = `
    <div class="form-group">
    <div class="label" for="IDTAG">LABEL</div>
    <TYPE id="IDTAG" [(ngModel)]="IDTAG" class="form-control" rows="ROWS" cols="COLS" placeholder="PLACEHOLDER"></TYPE>
    </div>`;

  checboxTemplate = `
    <div class="form-group">
    <input type="TYPE" id="IDTAG" name="IDTAG" /><span for="IDTAG">LABEL</span>
    </div>`;

  radioStartTemplate = `
    <div class="form-group">
    <div class="label">LABEL</div>`

  radioBodyTemplate = `
    <div class="form-group">
    <input type="TYPE" id="SUBID" name="IDTAG" value="SUBID"/><span for="SUBID">LABEL</span>
    </div>`;

  radioEndTemplate = `</div>`;

  selectDropdownTemplate = `
    <div class="form-group">
    <div for="IDTAG">LABEL</div>
    <select class="form-control" id="IDTAG" required>
      <option value="Select Value">Select Value</option>
    </select>
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
      let IdTag = jsonData[i].IdTag;

      if (type === "password" || type === "text" || type === "email") {
        let template = this.controlTemplate.replace("TYPE", type);
        template = template.replace(/IDTAG/g, IdTag);
        template = template.replace("LABEL", label);
        this.newForm += template;
      }
      else if (type === "textarea") {
        let rows = jsonData[i].rows;
        let cols = jsonData[i].cols;
        let placeholder = jsonData[i].placeholder;
        let template = this.textAreaTemplate.replace(/TYPE/g, type);
        template = template.replace(/IDTAG/g, IdTag);
        template = template.replace("LABEL", label);
        template = template.replace("ROWS", rows);
        template = template.replace("COLS", cols);
        template = template.replace("PLACEHOLDER", placeholder);
        this.newForm += template;
      }
      else if (type === "button" || type === "submit") {
        let template = this.buttonTemplate.replace("TYPE", type);
        template = template.replace("LABEL", label);
        this.newForm += template;
      }
      else if (type === "checkbox") {
        let template = this.checboxTemplate.replace("TYPE", type);
        template = template.replace(/IDTAG/g, IdTag);
        template = template.replace("LABEL", label);
        this.newForm += template;
      }
      else if (type === "radio") {
        let template = this.radioStartTemplate.replace("LABEL", label);
        console.log("TEMP:", template);
        this.newForm += template;
        console.log("NF:", this.newForm);
        for (let j = 0; j < jsonData[i].SubType.length; j++) {
          let subId = jsonData[i].SubType[j].SubName;
          let subLabel = jsonData[i].SubType[j].SubLabel;
          template = this.radioBodyTemplate.replace("TYPE", type);
          template = template.replace(/IDTAG/g, IdTag);
          template = template.replace(/SUBID/g, subId);
          template = template.replace("LABEL", subLabel);
          this.newForm += template;
        }
        template = this.radioEndTemplate;
        this.newForm += template;
      }
      else if (type === "select") {
        let template = this.selectDropdownTemplate.replace("TYPE", type);
        template = template.replace(/IDTAG/g, IdTag);
        template = template.replace("LABEL", label);
        this.newForm += template;
      }
    }
    this.newForm += this.endFormTemplate;
    return this.newForm;
  }
}
