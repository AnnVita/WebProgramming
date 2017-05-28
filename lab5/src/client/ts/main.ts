window.onload = (): void => {
    getFiles();
};

const deleteButton: HTMLInputElement = document.getElementById("delete-button") as HTMLInputElement;
const getButton: HTMLInputElement = document.getElementById("get-button") as HTMLInputElement;

function getFiles(): void {
    const directoryRequest: XMLHttpRequest = new XMLHttpRequest();

    directoryRequest.onreadystatechange = (): void => {
        if (directoryRequest.readyState === 4 && directoryRequest.status === 200) {
            const filesOnHost: any = JSON.parse(directoryRequest.responseText);
            const files: HTMLElement = document.getElementById("folders");
            while (files.firstChild) {
                files.removeChild(files.firstChild);
            }
            for (const file in filesOnHost.elements) {
                if (filesOnHost.elements.hasOwnProperty(file)) {
                    const element: HTMLElement = document.createElement("li");
                    element.innerHTML = filesOnHost.elements[file];
                    files.appendChild(element);
                }
            }
        }
    };
    directoryRequest.open("GET", "/files");
    directoryRequest.send();
}

getButton.onclick = (): void => {
    const fileForGet: HTMLInputElement = document.getElementById("get-input") as HTMLInputElement;
    const nameOfFileForGet: string = fileForGet.value;
    const getRequest: XMLHttpRequest = new XMLHttpRequest();
    const regex = /(?:\.([^.]+))?$/;
    const extension = regex.exec(nameOfFileForGet)[1];
    if (extension !== "txt" && extension !== "html" && extension !== "css" && extension !== "js") {
        getRequest.responseType = "blob";
    }
    getRequest.open("GET", encodeURI(nameOfFileForGet));
    getRequest.send();
    getRequest.onreadystatechange = (): void => {
        if (4 === getRequest.readyState) {
            const info = document.getElementById("data");
            if (200 === getRequest.status) {
                const contentType = getRequest.getResponseHeader("content-type");
                info.innerHTML = "";
                if (contentType.substring(0, 5) === "Image") {
                    const img: HTMLImageElement = document.createElement("img");
                    img.onload = (): void => {
                        window.URL.revokeObjectURL(img.src);
                    };
                    img.src = window.URL.createObjectURL(getRequest.response);
                    info.appendChild(img);
                } else if (contentType.substring(0, 4) === "Text") {
                    info.innerHTML = getRequest.responseText;
                }
            } else {
                info.innerHTML = getRequest.status + getRequest.statusText;
            }
        }
    };
};

deleteButton.onclick = (): void => {
    const file: HTMLInputElement = document.getElementById("delete-input") as HTMLInputElement;
    const fileName: string = file.value;
    const deleteRequest: XMLHttpRequest = new XMLHttpRequest();
    deleteRequest.onreadystatechange = (): void => {
        if (deleteRequest.readyState === 4) {
            if (deleteRequest.status === 200) {
                getFiles();
            }
            const info = document.getElementById("data");
            info.innerHTML = deleteRequest.responseText;
        }
    };
    deleteRequest.open("DELETE", encodeURI(fileName));
    deleteRequest.send();
};
