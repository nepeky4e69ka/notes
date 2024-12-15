import type { App } from 'vue';
import { notesTable, notesTableRow, note } from '@/components/notes';
import { noteEdit, noteRemove } from '@/components/popups';
import {
  uiLoading,
  uiBack,
  uiCheckbox,
  uiEmpty,
  uiHeader,
  uiButton,
  uiPopup,
} from '@/components/ui';
import {
  iAdd,
  iArrowLeft,
  iEdit,
  iRemove,
  iWarning,
  iInfo,
  iSave,
  iClose,
} from '@/components/icons';
/**
 * @function components register
 * @description for auto import use 'unplugin-vue-components/vite' or glob
 */
export const components = (app: App): App => {
  // components
  app.component('n-table-row', notesTableRow);
  app.component('n-table', notesTable);
  app.component('n-note', note);
  // popups
  app.component('note-edit', noteEdit);
  app.component('note-remove', noteRemove);
  // ui
  app.component('ui-empty', uiEmpty);
  app.component('ui-loading', uiLoading);
  app.component('ui-header', uiHeader);
  app.component('ui-back', uiBack);
  app.component('ui-checkbox', uiCheckbox);
  app.component('ui-button', uiButton);
  app.component('ui-popup', uiPopup);
  // icons
  app.component('i-arrow-left', iArrowLeft);
  app.component('i-add', iAdd);
  app.component('i-edit', iEdit);
  app.component('i-remove', iRemove);
  app.component('i-warning', iWarning);
  app.component('i-info', iInfo);
  app.component('i-save', iSave);
  app.component('i-close', iClose);
  //
  return app;
};
