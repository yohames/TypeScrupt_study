interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface SharePhoto {
  shareTelegram(): void;
  shareFacebook(): void;
  shareX(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
  }
}

class Youtube implements TakePhoto, SharePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
    this.short = short;
  }

  shareTelegram(): void {
    console.log("Sharing on Telegram");
  }
  shareFacebook(): void {
    console.log("Sharing on Facebook");
  }
  shareX(): void {
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

// ================================================
// ============= Interface Inheritance ============
// ================================================

interface EditPhoto extends TakePhoto {
  editPhoto(): void;
}

class PhotoEditor implements EditPhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
  }

  editPhoto(): void {
    console.log("Editing photo");
  }
}

const editor = new PhotoEditor("Normal", "No Filter", 1);
console.log("this shows editor", editor);
editor.editPhoto();

// ================================================
// ================ Abstract Class ================
// ================================================

abstract class TakePhoto1 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
  }
  abstract getSepia(): void;
  getReelTime() {
    return this.cameraMode;
  }
}

class Facebook extends TakePhoto1 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public platform: string
  ) {
    super(cameraMode, filter, burst);
    this.platform = platform;
  }
  getSepia(): void {
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
