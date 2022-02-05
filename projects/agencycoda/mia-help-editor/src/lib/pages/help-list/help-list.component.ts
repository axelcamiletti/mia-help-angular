import { MiaCategoryService } from '@agencycoda/mia-category-core';
import { MiaQuery, nil } from '@agencycoda/mia-core';
import { MiaHelp, MiaHelpService } from '@agencycoda/mia-help-core';
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
    //protected categoryModal: MiaCategoryModalService,
    //protected categoryService: MiaCategoryService,
    protected navigator: Router
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  onSearch(text: string) {
    this.config.tableConfig.query.resetWhere();
    if(text.length > 2){
      this.config.tableConfig.query.addWhereLikes(['firstname', 'lastname'], text);
    }
    console.log(this.pageComp);
    this.pageComp.loadItems();
  }

  onAction(action: {key: string; item: any;}) {
    if(action.key == 'add'){
      this.pageComp.openForm(new MiaHelp()).pipe(nil()).subscribe(result => this.pageComp.loadItems());
    } else if (action.key == 'search') {
      this.onSearch(action.item);
    } else if(action.key == 'edit'){
      this.pageComp.openForm(action.item).pipe(nil()).subscribe(result => this.pageComp.loadItems());
    } else if(action.key == 'remove'){
      this.pageComp.onClickRemove(action.item);
    } else if(action.key == 'see'){
      this.navigator.navigateByUrl('/team/profile/' + action.item.id);
    }
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
        key_action: 'click-lock',
        options: [
          { value: 0, color: '#333', icon: 'visibility-off' },
          { value: 1, color: 'blue', icon: 'visibility' },
        ]
      } },
      { key: 'more', type: 'more', title: '', extra: {
        actions: [
          { icon: 'create', title: 'Editar', key: 'edit' },
          { icon: 'delete', title: 'Borrar', key: 'remove' },
        ]
      } }
    ];
  }

  loadConfig() {
    this.config.title = 'Help Center';

    this.config.buttons.push({ key: 'organize', title: 'Organize', icon: 'edit' });
    this.config.buttons.push({ key: 'add', title: 'New video', icon: 'edit' });

    this.loadTableConfig();
    //this.loadFormConfig();
  }
}
