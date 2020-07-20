import * as actions from "./../../actions";
import * as c from "./../../actions/ActionTypes";

describe("headline reducer actions", () => {
  test("requestHeadlines should create REQUEST_HEADLINES action", () => {
    expect(actions.requestHeadlines()).toEqual({
      type: c.REQUEST_HEADLINES
    });
  });

  test("getHeadlinesSuccess should create GET_HEADLINES_SUCCESS action", () => {
    const headlines = "A headline";
    expect(actions.getHeadlinesSuccess(headlines)).toEqual({
      type: c.GET_HEADLINES_SUCCESS,
      headlines
    });
  });

  test("getHeadlinesFailure should create GET_HEADLINES_FAILURE action", () => {
    const error = "A error";
    expect(actions.getHeadlinesFailure(error)).toEqual({
      type: c.GET_HEADLINES_FAILURE,
      error
    });
  });
})