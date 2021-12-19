export class UserClass {
  id: number | null = null;

  email: string | null = null;

  constructor(...args: any) {
    args.forEach((item: UserClass) => {
      this.id = item.id || null;
      this.email = item.email || null;
    });
  }
}
