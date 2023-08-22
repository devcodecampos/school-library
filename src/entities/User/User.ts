import { v4 as uuid } from "uuid";

export interface UserProps {
  id: string;
  name: string;
}

export class User {
  private _userProps: UserProps;

  constructor(userProps: Omit<UserProps, "id">) {
    this._userProps = {
      name: userProps.name,
      id: uuid(),
    };
  }

  get id(): string {
    return this._userProps.id;
  }

  get name(): string {
    return this._userProps.name;
  }

  set name(name: string) {
    this._userProps.name = name;
  }
}