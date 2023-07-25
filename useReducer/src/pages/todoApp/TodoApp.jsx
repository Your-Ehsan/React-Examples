import { useReducer, useState } from "react";

const ACTIONS = Object.freeze({
    ADD_TODO: "add-todo",
  }),
  reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...state, add_todo(action)];
      //   break;

      default:
        return state;
      //   break;
    }
  },
  add_todo = (action) => {
    return {
      id: Date.now(),
      title: action.payload.Title,
      complete: false,
    };
  };

const TodoApp = () => {
  const [todo, dispatch] = useReducer(reducer, []),
    [Title, setTitle] = useState(""),
    classes = {
      input:
        " bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
      button:
        "text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg",
    },
    handleSubmit = (e) => {
      e.preventDefault();
      dispatch({ type: ACTIONS.ADD_TODO, payload: { Title } });
      setTitle("");
    };
  console.log(todo);
  return (
    <section>
      <form
        className="flex gap-8 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="grid relative">
          <input
            placeholder="title"
            type="text"
            id="name"
            name="name"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            className={classes.input}
          />
        </div>
        <button className={classes.button} type="submit">
          Add
        </button>
      </form>
    </section>
  );
};

export default TodoApp;
