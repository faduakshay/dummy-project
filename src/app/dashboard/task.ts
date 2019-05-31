export class Task {
    task: string;
    isChecked: boolean;
    constructor(lable: string, status: boolean = false) {
        this.task = lable;
        this.isChecked = status;
    }
}
