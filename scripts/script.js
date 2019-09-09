//!IMPORTANT (Activate "picker" on project capabilities

const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const NativeUI = require('NativeUI');
const Textures = require('Textures');
const Patches = require('Patches');

const iconLUT01 = Textures.get('LUTIcon01');
const iconLUT02 = Textures.get('LUTIcon02');
const iconLUT03 = Textures.get('LUTIcon03');
const iconLUT04 = Textures.get('LUTIcon04');
const iconLUT05 = Textures.get('LUTIcon05');
const iconLUT06 = Textures.get('LUTIcon06');
const iconLUT07 = Textures.get('LUTIcon07');
const iconLUT08 = Textures.get('LUTIcon08');
const iconLUT09 = Textures.get('LUTIcon09');
const iconLUT10 = Textures.get('LUTIcon10');
const iconLUT11 = Textures.get('LUTIcon11');
const iconLUT12 = Textures.get('LUTIcon12');
const iconLUT13 = Textures.get('LUTIcon13');

const index = 0;

const configuration = {

  selectedIndex: index,

  items: [
    {image_texture: iconLUT01},
    {image_texture: iconLUT02},
    {image_texture: iconLUT03},
    {image_texture: iconLUT04},
    {image_texture: iconLUT05},
    {image_texture: iconLUT06},
    {image_texture: iconLUT07},
    {image_texture: iconLUT08},
    {image_texture: iconLUT09},
    {image_texture: iconLUT10},
    {image_texture: iconLUT11},
    {image_texture: iconLUT12},
    {image_texture: iconLUT13},    
  ]
};

const picker = NativeUI.picker;

picker.configure(configuration);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(val) {
  Patches.setScalarValue("LUTNumber", val.newValue);
});
