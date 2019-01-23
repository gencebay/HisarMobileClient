const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
const ARGUMENT_NAMES = /([^\s,]+)/g;

export namespace ObjectHelper {
  export function toQueryString(obj: any) {
    return Object.keys(obj)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
      .join("&");
  }
  export function getParamNames(func) {
    var fnStr = func.toString().replace(STRIP_COMMENTS, "");
    var result = fnStr
      .slice(fnStr.indexOf("(") + 1, fnStr.indexOf(")"))
      .match(ARGUMENT_NAMES);
    if (result === null) result = [];
    return result;
  }
}
