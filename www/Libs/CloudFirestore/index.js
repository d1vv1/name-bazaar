import { displayTextOnPage, loadRandomImage, loadImage } from '../firebaseFunctions.js'

// loadRandomImage('im1')
// loadRandomImage('im2')
// loadRandomImage('info')

loadImage("images", "image1", "path", "im1")
loadImage("images", "image2", "path", "im2")
loadImage("images", "image3", "path", "info")
loadImage("images", "image4", "path", "other-info")

displayTextOnPage('data', "services", "homePageInfo", "text");