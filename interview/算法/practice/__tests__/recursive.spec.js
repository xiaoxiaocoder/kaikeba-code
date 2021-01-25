import { permute, subsets } from "../recursive";

describe("递归与回溯思想", () => {
  it("递归与回溯--全排列", () => {
    let nums = [3, 5, 9];
    let res = permute(nums);
    expect(res.length).toEqual(6);

    // 升级版 ????
    nums = [3, 3, 9];
    res = permute(nums);
  });

  //   it('递归与回溯--全排列', () => {
  //     let nums = [1, 2, 3]
  //     let res = subsets(nums)
  //     expect(res.length).toEqual(6)

  //   });
});
