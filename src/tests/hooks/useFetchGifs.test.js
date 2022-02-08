import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Test of Hook : useFetchGifs", () => {
  const category = "Skyrim";
  test("useFetchGifs : Hook Returns Initial State", () => {
    const { result } = renderHook(() => useFetchGifs(category));

    const { data, loading } = result.current;

    expect(data).toEqual([]);
    expect(data.length).toBe(0);
    expect(loading).toBeTruthy();
    expect(loading).toBe(true);
  });

  test("useFetchGifs : Hook Returns Array of Images and Loading False", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    await waitForNextUpdate();

    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });
});
