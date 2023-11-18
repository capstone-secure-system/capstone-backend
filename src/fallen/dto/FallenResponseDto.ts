export class FallenResponseDto {
    status: string;
    label: string;
    createdAt: Date;

    // inner class for builder pattern
    static Builder = class {
        response: FallenResponseDto;

        constructor() {
            this.response = new FallenResponseDto();
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

        build(): FallenResponseDto {
            return this.response;
        }
    }
}