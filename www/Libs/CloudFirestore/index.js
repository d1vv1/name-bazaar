import { displayTextOnPage, loadImage } from '../firebaseFunctions.js'

await displayTextOnPage('data', "services", "homePageInfo/homePageHeading", "home-head");
await displayTextOnPage('data', "services", "homePageInfo/boxHead", "box-head");
await displayTextOnPage('data', "services", "homePageInfo/pi1", "text");
await displayTextOnPage('data', "services", "homePageInfo/pi2", "text");
await displayTextOnPage('data', "services", "homePageInfo/pi3", "text");
await displayTextOnPage('data', "services", "homePageInfo/pi4", "text");

await loadImage("images", "image1", "path", "im1")
await loadImage("images", "image2", "path", "im2")
await loadImage("images", "image3", "path", "info")
await loadImage("images", "image4", "path", "other-info")