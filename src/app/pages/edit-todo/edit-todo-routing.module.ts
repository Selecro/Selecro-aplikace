import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTodoPage } from './edit-todo.page';

const routes: Routes = [
  {
    path: '',
    component: EditTodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTodoPageRoutingModule {}
