export const hello = (name: string) => {
  try {
    const example = [
      {
        msg: `Hello ${name}`
      },
    ];
    return example;
  } catch (e) {
    console.error('An error ocurred: ', e);
    return {
      status: 'error',
      message: 'An error ocurred at example.service.hello',
      error: e
    };
  }
};