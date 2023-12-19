export class FallenResponseDto {
    snapShotId: string;
    status: string;
    label: string;
    createdAt: Date;
    imgUrl : string;
    detectedNum: number;

    // inner class for builder pattern
    static Builder = class {
        response: FallenResponseDto;

        constructor() {
            this.response = new FallenResponseDto();
        }
0
        setSnapShotId(snapShotId: string): this {
            this.response.snapShotId = snapShotId;
            return this;
        }

        setStatus(status: string): this {
            this.response.status = status;
            return this;
        }

        setLabel(label: string): this {
            this.response.label = label;
            return this;
        }

        setCreatedAt(createdAt: Date): this {
            this.response.createdAt = createdAt;
            return this;
        }

        setImgUrl(imgurl: string): this {
            this.response.imgUrl = imgurl;
            return this;
        }

        setDetectedNum(detectedNum: number) {
            this.response.detectedNum = detectedNum;
            return this;
        }

        build(): FallenResponseDto {
            return this.response;
        }
    }
}