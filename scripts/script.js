const Diagnostics = require("Diagnostics");
const Scene = require("Scene");
const NativeUI = require("NativeUI");
const Textures = require("Textures");
const Patches = require("Patches");

Promise.all([
  Textures.findFirst("LUTIcon01"),
  Textures.findFirst("LUTIcon02"),
  Textures.findFirst("LUTIcon03"),
  Textures.findFirst("LUTIcon04"),
  Textures.findFirst("LUTIcon05"),
  Textures.findFirst("LUTIcon06"),
  Textures.findFirst("LUTIcon07"),
  Textures.findFirst("LUTIcon08"),
  Textures.findFirst("LUTIcon09"),
  Textures.findFirst("LUTIcon10"),
  Textures.findFirst("LUTIcon11"),
  Textures.findFirst("LUTIcon12"),
  Textures.findFirst("LUTIcon13"),
]).then(function (results) {
  const iconLUT01 = results[0];
  const iconLUT02 = results[1];
  const iconLUT03 = results[2];
  const iconLUT04 = results[3];
  const iconLUT05 = results[4];
  const iconLUT06 = results[5];
  const iconLUT07 = results[6];
  const iconLUT08 = results[7];
  const iconLUT09 = results[8];
  const iconLUT10 = results[9];
  const iconLUT11 = results[10];
  const iconLUT12 = results[11];
  const iconLUT13 = results[12];

  const index = 0;

  const configuration = {
    selectedIndex: index,

    items: [
      { image_texture: iconLUT01 },
      { image_texture: iconLUT02 },
      { image_texture: iconLUT03 },
      { image_texture: iconLUT04 },
      { image_texture: iconLUT05 },
      { image_texture: iconLUT06 },
      { image_texture: iconLUT07 },
      { image_texture: iconLUT08 },
      { image_texture: iconLUT09 },
      { image_texture: iconLUT10 },
      { image_texture: iconLUT11 },
      { image_texture: iconLUT12 },
      { image_texture: iconLUT13 },
    ],
  };

  const picker = NativeUI.picker;

  picker.configure(configuration);

  picker.visible = true;

  picker.selectedIndex.monitor().subscribe(function (val) {
    Patches.inputs.setScalar("LUTNumber", val.newValue);
  });
});
