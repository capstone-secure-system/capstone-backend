export class SnapShot {
    snapshotId: String;
    label: String;
    createdAt: String;
    imageUrl: String;

    constructor(snapshotId: String,createdAt: String,label: String , imageUrl: String) {
        this.snapshotId = snapshotId;
        this.createdAt = createdAt;
        this.label = label;
        this.imageUrl = imageUrl;
    }
}