interface UserProps {
  id: string;
  name: string;
}

export class User {
  private _props: UserProps;

  constructor(props: UserProps) {
    this._props = props;
  }

  get id(): string {
    return this._props.id;
  }

  set id(id: string) {
    this._props.id = id;
  }

  get name(): string {
    return this._props.name;
  }

  set name(name: string) {
    this._props.name = name;
  }
}