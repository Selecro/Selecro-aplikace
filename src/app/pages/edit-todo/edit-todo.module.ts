import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTodoPageRoutingModule } from './edit-todo-routing.module';

import { EditTodoPage } from './edit-todo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTodoPageRoutingModule
  ],
  declarations: [EditTodoPage]
})
export class EditTodoPageModule {}
