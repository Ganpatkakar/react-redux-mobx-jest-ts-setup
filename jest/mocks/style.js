// The identity-obj-proxy module was not working correctly.
// For whatever reason, in our tests, it was returning { default: {} }.
// and all of our snapshots were showing className={undefined}
// this seems to be working for our needs.
const handler = {
  get: (t, n) => n,
};

module.exports = new Proxy({}, handler);
