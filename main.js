const path = require('path');
const url = require('url');
const {app, BrowserWindow, Menu, dialog} = require('electron');
//const MyXlsx = require('xsls-populate');

const template =[
    {
        label: "Файл",
        submenu:[
            {
                label: "Открыть",
                click: async() => {
                    dialog.showMessageBox({
                        title: "Hola",
                        type:"info",
                        message:'Выбран пункт:"Открыть"'
                    });
                }
            },
            {
                label: "Сохранить",
                click: async() => {
                    dialog.showMessageBox({
                        title: "Hola",
                        type:"info",
                        message:'Выбран пункт:"Сохранить"'
                    });
                }
            },
            {
                type: "separator"
            },
            {
                role: "close"
            }
        ]
    }
    
];
    



let win;



function createWindow(){
    win = new BrowserWindow(
        {width: 700, 
        height:500,
        icon:__dirname + "/img/icon.png"
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname,"index.html"),
        protocol: "file",
        slashes: true
        
    }));

    win.webContents.openDevTools();

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    win.on('closed', ()=>{
        win = null;
    })
}


// Load a new blank workbook
//MyXlsx.fromFileAsync('file old.xlsx')
    //.then(workbook => {
        // Modify the workbook.
        //workbook.sheet("Sheet1").cell("A1").value("This is neat!");
 
        // Write to file.
       // return workbook.toFileAsync("./file_new.xlsx");
    //});


app.on('ready', createWindow);

app.on('window-all-closed',()=>{
    app.quit();
})