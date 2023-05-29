const shoppingList = ["milk", "eggs", "meat", "tomato"];

describe("Array List", () => {
  test("contains milk in array", () => {
    expect(shoppingList).toContain("milk");
  });

  test("contains at least 3 product", ()=> {
    expect(shoppingList).toHaveLength(4);
  })

  test("array length not to be 0", ()=> {
    expect(shoppingList).not.toHaveLength(0)
  })
});
