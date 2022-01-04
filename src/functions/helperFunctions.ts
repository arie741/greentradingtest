//Unique-fy an array. Example: [1,1,2,3,3,4,5,5] becomes [1,2,3,4,5]
export function uniqueArray<Type>(array: Type[]): Type[] {
  return Array.from(new Set(array));
}
//
export function removeArrayItemOnce<Type>(array: Type[], value: any) {
  let newArray:any[] = [...array];
  let index = newArray.indexOf(value);
  if (index > -1) {
    newArray.splice(index, 1);
  }
  return newArray;
}
