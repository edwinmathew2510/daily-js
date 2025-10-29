// day 20,To Be Or Not To Be
let expect = function (val) {
  return {
    toBe: function (v) {
      if (val === v) return true;
      else throw new Error("Not Equal");
    },
    notToBe: function (v) {
      if (val !== v) return true;
      else throw new Error("Equal");
    },
  };
};

console.log(expect(5).toBe(5));
