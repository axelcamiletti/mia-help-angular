import { MiaCategoryService } from '@agencycoda/mia-category-core';
import { MiaCategoryModalService } from '@agencycoda/mia-category-editor';
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
    protected categoryModal: MiaCategoryModalService,
    //protected categoryService: MiaCategoryService,
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
      this.pageComp.openForm(new MiaHelp()).pipe(nil()).subscribe(result => this.pageComp.loadItems());
    } else if (action.key == 'search') {
      this.onSearch(action.item);
    } else if(action.key == 'edit'){
      this.pageComp.openForm(action.item).pipe(nil()).subscribe(result => this.pageComp.loadItems());
    } else if(action.key == 'remove'){
      this.pageComp.onClickRemove(action.item);
    } else if(action.key == 'see'){
      this.navigator.navigateByUrl('/team/profile/' + action.item.id);
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

  loadConfig() {
    this.config.title = 'Help Center';

    this.config.buttons.push({ key: 'organize', title: 'Organize' });
    this.config.buttons.push({ key: 'add', title: 'Add new Item' });

    this.loadTableConfig();
    //this.loadFormConfig();
  }
}
