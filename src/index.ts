export { MyCustomeComponent } from './custom.element/mycustomeelement'
export { someFunction } from "./common/someFunction";

enum EnumTest {
    VALUE1 = 1,
    VALUE2 = 2,
  }
  
  const test = (): string => {
    const abc = [EnumTest.VALUE1, EnumTest.VALUE2];
    if (abc[0] === EnumTest.VALUE1) {
      return "test1";
    }
    return "test2";
  };
  
  console.log(test());