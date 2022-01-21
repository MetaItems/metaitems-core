class Loader {
  async load() {
    if (this._wasm) return;
    /**
     * @private
     */
    //  this._wasm = await import("@emurgo/cardano-serialization-lib-asmjs/");
    this._wasm = await import("@emurgo/cardano-serialization-lib-browser/");
  }

  get Cardano() {
    return this._wasm;
  }
}

export default new Loader();