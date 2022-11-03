export default function peopleReducer(people, action) {
  switch (action.type) {
    case "updated": {
      debugger;
      const { before, after } = action;

      return {
        ...people,
        mentos: people.mentos.map((mento) => {
          if (mento.name === before.trim()) {
            return { ...mento, name: after };
          }
          return mento;
        }),
      };
    }
    case "addded": {
      const { name, title } = action;
      return {
        ...people,
        mentos: [
          ...people.mentos,
          {
            name,
            title,
          },
        ],
      };
    }
    case "deleted": {
      const { name } = action;
      return {
        ...people,
        // mentos: [...prev.mentos.filter((mento) => mento.name !== name)],
        mentos: people.mentos.filter((mento) => mento.name !== name),
      };
    }
    default: {
      return Error(`잘못된 action 입니다. ${action.type}`);
    }
  }
}
