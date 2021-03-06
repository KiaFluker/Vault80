declare module "*.json" {
    const value: any;
    export default value;
  }
  declare module '*.less' {
    const content: any;
    export default content;
  }
  declare module '*.css' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }
  