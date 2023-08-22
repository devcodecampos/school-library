import { User, UserProps } from "../User/User";

interface StudentProps {
  studentClass: string;
  registrationId: string;
}

export class Student extends User {
  private _studentProps: StudentProps;

  constructor(userProps: Omit<UserProps, "id">, studentProps: StudentProps) {
    super(userProps);
    this._studentProps = studentProps;
  }

  get studentClass(): string {
    return this._studentProps.studentClass;
  }

  set studentClass(studentClass: string) {
    this._studentProps.studentClass = studentClass;
  }

  get registrationId(): string {
    return this._studentProps.registrationId;
  }

  set registrationId(registrationId: string) {
    this._studentProps.registrationId = registrationId;
  }
}