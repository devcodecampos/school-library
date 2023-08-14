export interface UserProps {
  id: string;
  name: string;
}

export class User {
  private _userProps: UserProps;

  constructor(props: UserProps) {
    this._userProps = props;
  }

  get id(): string {
    return this._userProps.id;
  }

  set id(id: string) {
    this._userProps.id = id;
  }

  get name(): string {
    return this._userProps.name;
  }

  set name(name: string) {
    this._userProps.name = name;
  }
}