// 导入接口，并使用
import { StringValidator } from "./StringValidator";

export const numberRegExp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegExp.test(s);
  }
}
