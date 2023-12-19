export class SnapShot {
    snapshotId: String;
    label: String;
    createdAt: String;
    imageUrl: String;
    detectedNum: number;

    constructor(snapshotId: String,createdAt: String,label: String , imageUrl: String,detectedNum: number) {
        this.snapshotId = snapshotId;
        this.createdAt = createdAt;
        this.label = label;
        this.imageUrl = imageUrl;
        this.detectedNum = detectedNum;
    }
}