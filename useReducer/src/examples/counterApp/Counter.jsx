import { useReducer } from "react";

const ACTIONS = Object.freeze({
  INCREMENT: "increment",
  DECREMENT: "decrement",
});

const reducer = (state, action) => {
  //   return { count: state.count + 1 };
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    //   break;
    default:
      return state;
    //   break;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // TODO: useReducer also have third paramater
  const classes = {
    button:
      "mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg",
  };
  return (
    <section className="flex gap-8 items-center justify-center">
      <button
        className={classes.button}
        onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
      >
        -
      </button>
      <div className="text-6xl font-sans">{state.count}</div>
      <button
        className={classes.button}
        onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
      >
        +
      </button>
    </section>
  );
};

export default Counter;
