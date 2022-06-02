"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fileReadMethod() {
    return __awaiter(this, void 0, void 0, function* () {
        const fs = require('fs/promises');
        let fileHandle;
        try {
            fileHandle = yield fs.open('test.txt', 'r');
            let buffer = yield fileHandle.readFile();
            console.log(buffer.toString());
        }
        finally {
            if (fileHandle) {
                fileHandle.close();
            }
        }
    });
}
fileReadMethod();
