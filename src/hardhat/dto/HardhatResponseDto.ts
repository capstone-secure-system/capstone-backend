import { response } from "express";

export class HardhatResponseDto {
    status: string;
    label: string;
    createdAt: Date;

    static Builder = class {
        response: HardhatResponseDto;

        constructor() {
            this.response = new HardhatResponseDto();
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

        build(): HardhatResponseDto {
            return this.response;
        }
    }
}