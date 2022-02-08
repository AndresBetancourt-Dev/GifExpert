import { getGifs } from "../../helpers/getGifs";

describe("getGifs Tests", () => {
  test("getGifs Gets the Specified number of Elements", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBe(10);
  });

  test("getGifs Gets the Specified number of Elements", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
