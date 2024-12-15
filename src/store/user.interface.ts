import { Ref } from 'vue';

export interface UserStore {
  isCompleted: Ref<boolean | undefined>;
  loading: Ref<boolean>;
  popup: Ref<UserPopup>;
  toggleFilter: () => void;
  toggleLoading: (state: boolean) => void;
  togglePopup: (data: UserPopupPayload) => void;
  updateRouter: () => void;
  preload: () => void;
}

export enum UserPopupType {
  NOTE_EDIT = 'note-edit',
  NOTE_REMOVE = 'note-remove',
}

export interface UserPopup {
  active: boolean;
  show: boolean;
  type: UserPopupType;
  data?: any;
}

export interface UserPopupPayload {
  state: boolean;
  type?: UserPopupType;
  data?: any;
}
