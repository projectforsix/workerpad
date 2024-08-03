const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { Worker } = require('worker_threads');

// const ymessage = 'Hello, friend. You have been hacked. :)';
// const filepath = path.join(__dirname, 'ymessage.txt');

function startWorker() {
    return new Promise((resolve, reject) => {
        const workr = new Worker('./hello.js');

        workr.on('online', () => {
            resolve();
        });

        workr.on('error', (err) => {
            reject(err);
        });

        workr.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`[!] Worker parou...: ${code}`));
            }
        });
    });
}

async function openparallenote(){
    const promisys = []
    promisys.push(startWorker());

    try {
        await Promise.all(promisys);
        console.log("[+] !infinity looping opening notepad...")
    } catch (err) {
        console.log("[!] error...: ", err);
    }
}

openparallenote();






