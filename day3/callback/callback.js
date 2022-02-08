const getValues = (callback) => {
  let durum = true;

  durum ? callback(undefined, "Callback works") : callback("ERROR", undefined);
};

const callback = (err, data) => {
  err ? console.log(err) : console.log(data);
};
getValues(callback);
