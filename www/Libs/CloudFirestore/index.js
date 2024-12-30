import { displayTextOnPage, loadRandomImage, loadImage } from '../firebaseFunctions.js'


loadImage("images", "image1", "path", "im1")
loadImage("images", "image2", "path", "im2")
loadImage("images", "image3", "path", "info")
loadImage("images", "image4", "path", "other-info")

displayTextOnPage('data', "services", "homePageInfo/pi1", "text");
displayTextOnPage('data', "services", "homePageInfo/pi2", "text");
displayTextOnPage('data', "services", "homePageInfo/pi3", "text");
displayTextOnPage('data', "services", "homePageInfo/pi4", "text");