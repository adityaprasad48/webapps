

class WReduce {
  arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  sum(arr: number[]): number {
    return arr.reduce((acc: number, cur: number):number => acc + cur, 0);
  }

  produce(arr: number[]): number {
    return arr.reduce((acc: number, cur: number) => acc * (cur ** 2), 1);
  }

  max(): number {
    return this.arr.reduce((acc: number, cur: number) => Math.max(acc, cur), 0);
  }

  flatArray(arr_a: any[], arr_b: any[]): any[] {
    const nested = [arr_a, arr_b];
    return nested.reduce((acc: any[], cur: any[]) => acc.concat(cur), []);
  }

  longestWord(words: string[]): [string, number] {
    const word: [string, number] = words.reduce(
      (acc: [string, number], cur: string, index: number): [string, number] => {
        if (acc[0].length > cur.length) {
          return acc;
        } else {
          return [cur, index];
        }
      },
      ['', 0]
    );
    return word;
  }

  mapProp(users: { id: number; name: string }[]): { [key: number]: string } {
    return users.reduce((acc: { [key: number]: string }, cur) => {
      acc[cur.id] = cur.name;
      return acc;
    }, {});
  }

  reverseString(str: string): string {
    return Array.from(str).reduce((acc: string, cur: string) => cur + acc, '');
  }

  reverseArray(): number[] {
    return this.arr.reduce((acc: number[], cur: number) => [cur, ...acc], []);
  }
}