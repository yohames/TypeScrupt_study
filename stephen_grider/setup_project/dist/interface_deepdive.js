"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    shareTelegram() {
        console.log("Sharing on Telegram");
    }
    shareFacebook() {
        console.log("Sharing on Facebook");
    }
    shareX() {
        console.log("Sharing on X");
    }
}
const insta = new Instagram("Normal", "No Filter", 1);
console.log("this shows insta", insta);
insta.cameraMode = "Portrait";
console.log("this shows insta", insta);
const uTube = new Youtube("Normal", "No Filter", 1, "Short");
console.log("this shows uTube", uTube);
uTube.cameraMode = "Portrait";
uTube.shareFacebook();
class PhotoEditor {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    editPhoto() {
        console.log("Editing photo");
    }
}
const editor = new PhotoEditor("Normal", "No Filter", 1);
console.log("this shows editor", editor);
editor.editPhoto();
// ================================================
// ================ Abstract Class ================
// ================================================
class TakePhoto1 {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getReelTime() {
        return this.cameraMode;
    }
}
class Facebook extends TakePhoto1 {
    constructor(cameraMode, filter, burst, platform) {
        super(cameraMode, filter, burst);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.platform = platform;
        this.platform = platform;
    }
    getSepia() {
        console.log("Getting Sepia");
    }
    getReelTime() {
        return `hello : ${this.platform}`;
    }
}
const hc = new Facebook("Portrait", "No Filter", 1, "Facebook");
console.log("this shows hc", hc);
hc.getSepia();
console.log("show reel time", hc.getReelTime());
