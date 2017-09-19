export function provideHandlers(handlers: { type: string, reducerFn: Function}[]) {
  const ducks = {};

  handlers.forEach(handler => {
    ducks[handler.type] = handler.reducerFn;
  });

  return ducks;
}
