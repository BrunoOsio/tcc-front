import { DropboxAction } from "./DropboxAction";

export const runAction = (actions: DropboxAction[], key: string): void => {
  const target = actions.filter(option => option.key === key)[0];

  target.action();
}