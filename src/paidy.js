const ref = {};
const localCustomClosed = {};

const configure = (configuration) => {
  const customClosed = configuration.closed;

  configuration.closed = (data) => {
    if (typeof localCustomClosed.current === "function") {
      localCustomClosed.current(data);
    }

    if (typeof customClosed === "function") {
      customClosed(data);
    }
  };

  ref.current = window.Paidy.configure(configuration);
};

const launch = (data, closed) => {
  localCustomClosed.current = closed;
  ref.current.launch(data);
};

const isConfigured = () => {
  return !!ref.current;
};

const paidy = () => {
  return ref.current;
};

export { configure, launch, isConfigured, paidy };
