import { MiaCategoryService } from '@agencycoda/mia-category-core';
import { MiaCategoryModalService } from '@agencycoda/mia-category-editor';
import { MiaQuery, nil } from '@agencycoda/mia-core';
import { MiaField, MiaFormConfig } from '@agencycoda/mia-form';
import { MiaHelp, MiaHelpService } from '@agencycoda/mia-help-core';
import { MiaLanguageService } from '@agencycoda/mia-language-core';
import { MiaPageCrudComponent, MiaPageCrudConfig } from '@agencycoda/mia-layout';
import { MiaColumn } from '@agencycoda/mia-table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HelpfulColumnComponent } from '../../columns/helpful-column/helpful-column.component';

@Component({
  selector: 'lib-help-list',
  templateUrl: './help-list.component.html',
  styleUrls: ['./help-list.component.css']
})
export class HelpListComponent implements OnInit {

  @ViewChild('pageComp') pageComp!: MiaPageCrudComponent;

  config = new MiaPageCrudConfig();

  constructor(
    protected helpService: MiaHelpService,
    protected categoryModal: MiaCategoryModalService,
    protected languageService: MiaLanguageService,
    protected categoryService: MiaCategoryService,
    protected navigator: Router
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  onSearch(text: string) {
    this.config.tableConfig.query.resetWhere();
    if(text.length > 2){
      this.config.tableConfig.query.addWhereLikes(['title'], text);
    }
    this.pageComp.loadItems();
  }

  onAction(action: {key: string; item: any;}) {
    if(action.key == 'add'){
      //this.navigator.navigateByUrl('/help/new-item');
      this.pageComp.openForm(new MiaHelp()).pipe(nil()).subscribe(result => this.pageComp.loadItems());
    } else if (action.key == 'search') {
      this.onSearch(action.item);
    } else if(action.key == 'edit'){
      this.pageComp.openForm(action.item).pipe(nil()).subscribe(result => this.pageComp.loadItems());
      //this.navigator.navigateByUrl('/help/new-item/' + action.item.id);
    } else if(action.key == 'remove'){
      this.pageComp.onClickRemove(action.item);
    } else if(action.key == 'click-status') {
      this.saveNewStatus(action.item, action.item.status == 1 ? 0 : 1);
    } else if(action.key == 'organize') {
      this.categoryModal.openOrganize(1);
    }
  }

  saveNewStatus(item: MiaHelp, newStatus: number) {
    item.status = newStatus;
    this.helpService.saveOb(item).subscribe();
  }

  loadTableConfig() {
    this.config.tableConfig.query.addWith('category');
    this.config.tableConfig.query.addWith('language');

    this.config.tableConfig.loadingColor = 'black';
    this.config.tableConfig.hasEmptyScreen = false;
    this.config.tableConfig.service = this.helpService;
    this.config.tableConfig.columns = [
      { key: 'id', type: 'string', title: '#', field_key: 'id' },
      { key: 'title', type: 'string', title: 'Title', field_key: 'title' },
      { key: 'category', type: 'string', title: 'Category', field_key: ['category', 'title'] },
      { key: 'helpful', type: 'custom', title: 'Helpful', extra: { component: HelpfulColumnComponent } },
      { key: 'language', type: 'string', title: 'Language', field_key: ['language', 'title'] },
      { key: 'visibility', type: 'icon-toggle', title: '', field_key: 'status', extra: {
        key_action: 'click-status',
        options: [
          { value: 0, color: '#333', icon: 'visibility-off' },
          { value: 1, color: 'blue', icon: 'visibility' },
        ]
      } },
      { key: 'more', type: 'more', title: '', extra: {
        actions: [
          { icon: 'create', title: 'Edit', key: 'edit' },
          { icon: 'delete', title: 'Delete', key: 'remove' },
        ]
      } }
    ];
  }

  loadFormConfig() {
    this.config.formConfig.titleNew = 'Add new item';
    this.config.formConfig.titleEdit = 'Edit item';
    this.config.formConfig.service = this.helpService;
    this.config.formConfig.config = new MiaFormConfig();
    this.config.formConfig.config.hasSubmit = false;
    this.config.formConfig.config.fields = [
      { key: 'language_id', type: MiaField.TYPE_SELECT_SERVICE, label: 'Lenguaje', extra: { service: this.languageService, field_display: 'title', field_list: 'language-auto', query: new MiaQuery() } },
      { key: 'category_id', type: MiaField.TYPE_SELECT_SERVICE, label: 'Categoría', extra: { service: this.categoryService, field_display: 'title', field_list: 'category-auto', query: new MiaQuery() } },
      { key: 'title', type: MiaField.TYPE_STRING, label: 'Titulo' },
      { key: 'content', type: MiaField.TYPE_HTML, label: 'Contenido' },
      { key: 'status', type: MiaField.TYPE_SELECT, label: 'Estado', extra: {
        options: [
          { id: 0, title: 'Inactivo' },
          { id: 1, title: 'Activo' },
        ]
      }},
    ];
    this.config.formConfig.config.errorMessages = [
      { key: 'required', message: 'The "%label%" is required.' }
    ];
  }

  loadConfig() {
    this.config.title = 'Help Center';

    //this.config.buttons.push({ key: 'organize', title: 'Organize' });
    this.config.buttons.push({ key: 'add', title: 'Add new Item' });

    this.loadTableConfig();
    this.loadFormConfig();
  }
}
