import { ShoutPipe } from "./shout.pipe";

describe("ShoutPipe", () => {
  it("create an instance", () => {
    const pipe = new ShoutPipe();
    expect(pipe.transform("fofo")).toBe("FOFO");
  });
});
