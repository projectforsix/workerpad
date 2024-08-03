const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

// Mensagem que você quer escrever no Notepad
const ymessage = 'Hello, friend. You have been hacked. :)';

// Caminho para o arquivo de texto no diretório atual
const filepath = path.join(__dirname, 'hello.txt');

// Escreve a mensagem no arquivo
fs.writeFileSync(filepath, ymessage, 'utf-8');

// Função para abrir o Notepad com o arquivo de texto
function openNotepad(filePath) {
    exec(`notepad.exe ${filePath}`, (error, stdout, stderr) => {
        if (error) {
            console.log("[!] algum erro ocorreu: ", error);
            return;
        }
        console.log("[+] notepad opened...!");
        console.log("[+] hello.txt sending...!")
    });
}

// Abre o Notepad com o arquivo contendo a mensagem
while (true){
    openNotepad(filepath);
}

